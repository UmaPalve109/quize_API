const express = require('express');
const router = express.Router();
const mongoose = require("mongoose");

const question = require('../model/questionModel');

router.use(express.json());

router.post("/api/question", (req, res) => {

    const question = req.body;

    question.create(question, (err, data) => {
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(201).send(data);
        }
    })

})
router.get("/api/question", (req, res) => {

    question.find(
        (err, data) => {
            if (err) {
                res.status(500).send(err)
            } else {
                res.status(200).send(data);
            }
        }
    )


})


module.exports = router;