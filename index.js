const express = require('express');
const questionRoute = require('./router/question')
const mongoose = require('mongoose');
const question = require("./model/questionModel")




//app config
const app = express();

const port = process.env.port || 8001;
const connection_url = 'mongodb+srv://admin:admin@cluster0.qeft9.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'


//Middle ware
app.use(express.json());



//DB config
mongoose.connect(connection_url, { useNewUrlParser: true, useUnifiedTopology: true }, (error) => {

    if (!error) {

        console.log("connected with database");
    } else {

        console.log("unable to connect with database");

    }

});


//API endpoint

app.get('/', (req, res) => {
    res.status(200).send("HELLO SERVER PROGRAMER");
})

app.post("/api/postQuestion", (req, res) => {
    const questionI = req.body;

    question.create(questionI, (err, data) => {
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(201).send(data);
        }
    })
})


app.get("/api/getQuestion", (req, res) => {

    question.find((err, data) => {
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(200).send(data);
        }
    })
})




//Listner

app.listen(port, () => {

    console.log("SERVER STARTED");
})
































// // const connection_url = 'mongodb+srv://admin:admin@cluster0.qeft9.mongodb.net/quize?retryWrites=true&w=majority';


// const connection_url = "mongodb+srv://admin:admin@cluster0.qeft9.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

// mongoose.connect(connection_url, { useNewUrlParser: true, useUnifiedTopology: true, }, (error) => {

//     if (!error) {

//         console.log("connected with database");
//     } else {

//         console.log("unable to connect with database");

//     }

// });

// const app = express();



// app.use(questionRoute);




// app.listen(3000, () => { console.log("server satrted") })