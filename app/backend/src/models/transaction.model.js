const Transaction = (sequelize, DataTypes) => {
    const Transaction = sequelize.define('Transaction', {
        transmitter: DataTypes.INTEGER,
        badge: DataTypes.INTEGER,
        value: DataTypes.DOUBLE,
},
      {
        timestamps: true,
        tableName: 'Transactions',
      });
  
    return Transaction;
}


module.exports = Transaction
