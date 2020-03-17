module.exports = function(sequelize, DataTypes) {
  var Collab = sequelize.define("Post", {
    fName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    emailAddress: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // skills {
    //   dropdown menu
    // },
    city: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    state: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    zip: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    bio: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
  return Collab;
  });
}