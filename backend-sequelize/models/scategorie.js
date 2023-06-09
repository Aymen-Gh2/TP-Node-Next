const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('scategorie', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nomscategorie: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    imagescat: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    categorierID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'categorie',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'scategorie',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "id",
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "categorierID",
        using: "BTREE",
        fields: [
          { name: "categorierID" },
        ]
      },
      {
        name: "id_2",
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
