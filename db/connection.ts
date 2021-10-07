import {Sequelize} from 'sequelize'
const fs = require('fs')
const path = require('path')

const db = new Sequelize('cooking', 'postgres', 'xerxes',{
    host: 'localhost',
    dialect: 'postgres',
    logging: false,
    native:false
});

export default db;