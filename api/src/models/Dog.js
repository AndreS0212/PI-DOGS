const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('dog', {
    id  : {
      type : DataTypes.UUID,
      allowNull : false,
      defaultValue: DataTypes.UUIDV4,
      primaryKey : true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    weight:{
      type : DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false
    },
    height:{
      type : DataTypes.ARRAY(DataTypes.STRING),
      allowNull:false
    },
    life_span:{
      type: DataTypes.STRING,
      allowNull:true,
    },
    image : {
      type : DataTypes.STRING(500)
    },
    DB:{
      type: DataTypes.STRING,
      defaultValue: true
    }

  },{ timestamps: false });
};
