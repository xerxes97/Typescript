import {Sequelize} from 'sequelize'

const db = new Sequelize('cooking', 'postgres', 'xerxes',{
    host: 'localhost',
    dialect: 'postgres',
    logging: false,
    native:false
});

console.log('prueba ',db.models)

export default db;