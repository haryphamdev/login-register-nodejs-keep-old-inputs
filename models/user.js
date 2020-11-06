  
export default (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
      
      confirmed: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      }
      
    });

    return User;
}

