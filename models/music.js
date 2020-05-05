// Model for Music
module.exports = function(sequelize, DataTypes) {
    var Music = sequelize.define("Music", {
        title: DataTypes.STRING,
        artist: DataTypes.STRING,
        genre: DataTypes.STRING,
        year: DataTypes.INTEGER,
        duration: DataTypes.INTEGER
    });
    return Music
}