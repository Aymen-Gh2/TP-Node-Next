var DataTypes = require("sequelize").DataTypes;
var _article = require("./article");
var _categorie = require("./categorie");
var _scategorie = require("./scategorie");

function initModels(sequelize) {
  var article = _article(sequelize, DataTypes);
  var categorie = _categorie(sequelize, DataTypes);
  var scategorie = _scategorie(sequelize, DataTypes);

  article.belongsTo(scategorie, { as: "scategories", foreignKey: "scategorieID"});
  scategorie.hasMany(article, { as: "articles", foreignKey: "scategorieID"});
  scategorie.belongsTo(categorie, { as: "categories", foreignKey: "categorierID"});
  categorie.hasMany(scategorie, { as: "scategories", foreignKey: "categorierID"});

  return {
    article,
    categorie,
    scategorie,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
