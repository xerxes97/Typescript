import {DataTypes} from 'sequelize';
import db from '../db/connection';

const usuario = db.define('Usuario',{
    userName: {
        type: DataTypes.STRING,
        unique:true,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: true
    },
    active: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    },
    admin: {
        type: DataTypes.BOOLEAN,
        allowNull:false,
        defaultValue:false
    },
    avatar: {
        type: DataTypes.STRING,
        allowNull: true
    }
},
{
    timestamps: false
});

export default usuario;