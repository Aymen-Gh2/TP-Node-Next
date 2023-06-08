const dbConfig = require("../config/db.config.js");
const Sequelize = require("sequelize");
const model=require("./init-models").initModels 
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD,
    {
        host: dbConfig.HOST,
        dialect: dbConfig.dialect,
        operatorsAliases: false
    });
const db = {};
db.sequelize = sequelize;
db.categorie = model(sequelize).categorie; 
db.scategorie = model(sequelize).scategorie;
db.article = model(sequelize).article;

module.exports = db; 
