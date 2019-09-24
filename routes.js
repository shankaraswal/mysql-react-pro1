const express = require('express');
const app = express();

const mysql = require('mysql');
var moment = require('moment');

const connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'classicmodels'
})

connection.connect(function(err){
    console.log('connected');
})

module.exports = (app) => {

    //only for node view: home.ejs
    app.get('/', (req, res) => {
            res.render('home', {
            title:'MySql + Nodejs + ReactJs',
            }
        )
    });

    //only for node view: about.ejs
    app.get('/about', (req, res) => {
            res.render('about', {
            title:'About us',
            }
        )
    });

    //only for node view: orderlist.ejs
    app.get('/addorder', (req, res) => {
         res.render('addorder', {
            title:'Add Order'}
        )
    });

    //only for node view: orderlist.ejs
    app.get('/orderlist', (req, res) => {
        const query  = 'select * from orders';
        connection.query(query, function(err, data, fields){
             res.send(data);
             res.render('orderlist', {
                title:'Order List',
                data: data,
                moment:moment}
            )
        })
    });

    //only for react view: orderdetail.js
    app.get('/orders', (req, res) => {
        const query  = 'select * from orders';
        connection.query(query, function(err, data,){
            res.send(data);
        })
    })
}