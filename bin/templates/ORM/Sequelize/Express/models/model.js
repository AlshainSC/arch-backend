'use strict';

//TODO HAS NOT BEEN TESTED YET

module.exports = (sequelize, DataTypes) => sequelize.define('Model', {
  id: {
    type: DataTypes.BOOLEAN,
    allowNull: false
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false
  }
  // The timestamp is added automatically by Sequelize
  // http://docs.sequelizejs.com/manual/tutorial/models-definition.html#timestamps
});
