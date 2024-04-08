const express = require("express");

exports.getAllData = (req, res, next) => {
    try {
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "something went wrong at server" });
    }
};

exports.getPluginsData = (req, res, next) => [];
