import {DataTypes} from 'sequelize';
import db from '../db/connection';

const recipeBook = db.define('RecipeBook',{
    name: {
        type: DataTypes.STRING,
        allowNull: true
    }
}, 
{
    timestamps:false
});

export default recipeBook;