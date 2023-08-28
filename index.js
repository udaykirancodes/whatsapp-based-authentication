// SERVER CODE
const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http, {
    cors: {
        origin: "*"
    }
});

// Backend Imports
const cors = require('cors');
app.use(cors({ origin: "*" }));
// Add Access Control Allow Origin headers
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    // res.header(
    //     "Access-Control-Allow-Headers",
    //     "Origin, X-Requested-With, Content-Type, Accept"
    // );
    next();
});
const Users = require('./models/Users');
const jwt = require('jsonwebtoken');
const config = require('./config');

// WEBJS BOT CODE
const { MongoStore } = require('wwebjs-mongo');
const mongoose = require('mongoose');

const qrcode = require('qrcode');
const { Client, RemoteAuth } = require('whatsapp-web.js');
let clientCount = 0;
let client = null;
let socketter;
mongoose.connect(config.mongoUrl).then(() => {
    const store = new MongoStore({ mongoose: mongoose });
    client = new Client({
        // puppeteer: {
        //     args: ['--no-sandbox', '--disable-setuid-sandbox'],
        //     headless: true
        // },
        authStrategy: new RemoteAuth({
            store: store,
            clientId: "uday",
            backupSyncIntervalMs: 60000
        })
    });
    console.log('DB Connected !!');
    if (client == null || clientCount == 0) {
        console.log('Initializing the Client !!');
        client.initialize();
        clientCount++;
    }
    io.on('connection', (socket) => {
        socketter = socket;
        console.log('User Connected !!');
        socketSender('notification', 'Connecting to Web Whatsapp Bot !!');
    })
    client.on('remote_session_saved', async () => {
        await store.save({ session: 'uday' });
        console.log('Remote Auth Saved');
    })
    client.on('ready', () => {
        state.notification = 'Bot is Ready!';
        state.connected = true
        socketSender('notification', 'Bot is Ready !!');
        console.log('client is ready!');
    });
    client.on('authenticated', (session) => {
        socketSender('notification', 'Authented Successfully !!');
        console.log('Authenticated');
    });
    client.on('disconnected', (session) => {
        state.connected = false;
        socketSender('notification', 'Client Disconnected !!');
        console.log('disconected');
        client.initialize();
    });
    client.on('qr', qr => {
        console.log('QR Code Sent!!')
        socketSender('notification', 'Qr Code Sent , Please Scan !!');
        qrcode.toDataURL(qr, (err, url) => {
            socketter.emit('qrcode', url);
        })
    });
    client.on('message', async message => {
        if (message.isForwarded) {
            socketSender('notification', 'Forwarded Message Received !!');
        }
        if (message.from.endsWith('@c.us')) {
            // Personal Chat
            send(message, client);
        }
        else {
            socketSender('notification', 'Group Chat Received !!');
        }
    })
})


// Send Function
const send = async (message, client) => {
    try {
        console.log(message);
        let phoneNumber = message.from;
        // Send Seen Tick
        let chat = await client.getChats();
        chat[0].sendSeen()
        chat[0].sendStateTyping();
        console.log("Name is : " + message._data.notifyName);
        // check if user exists with mobile number
        let usr = await Users.findOne({ phone: phoneNumber });
        console.log('User is : ' + usr);
        if (usr != null) {
            // If user
            console.log('User Already Exists');
            // Generate Token
            let data = {
                userId: usr._id
            }
            let authToken = await jwt.sign(data, config.jwt);

            let url = `http://localhost:${config.frontendPort}/profile?token=${authToken}`;
            let totalMsg = `Here is the Clickable Link : ${url}`;
            client.sendMessage(message.from, totalMsg, {
                linkPreview: true
            });
        }
        else {
            // user not present
            let newUser = new Users({
                name: message._data.notifyName,
                phone: phoneNumber
            })
            // save the user
            let savedUser = await newUser.save();

            // Generate Token
            let data = {
                userId: savedUser._id
            }
            let authToken = await jwt.sign(data, config.jwt);

            let url = `http://localhost:${config.port}/profile?token=${authToken}`;
            let totalMsg = `Here is the Clickable Link : ${url}`;
            client.sendMessage(message.from, totalMsg, {
                linkPreview: true
            });
        }

    } catch (error) {
        console.log(error.message);
    }
}


// SERVER LISTENING
http.listen(config.port, function () {
    console.log('Server Started');
});

// ROUTES
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get('/check/:id', async (req, res) => {
    try {
        let id = req.params.id;
        if (id == null || id.length < 1) {
            res.status(500).json({ status: false, msg: "Id Not Found" });
        }
        let data = jwt.verify(id, config.jwt);

        let userDbId = data.userId;

        let usr = await Users.findById(userDbId);
        if (!usr) {
            return res.status(404).json({ status: false, msg: "User Not Found" });
        }
        return res.status(200).json({ status: true, data: usr })
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({ status: false, msg: "Internal Server Error" });
    }
})


const state = {};

const socketSender = (emitingEvent, notification) => {
    // state.notification = notification;
    socketter.emit(emitingEvent, state);
    setTimeout(() => {
        state.notification = '...';
    }, 1000);
}