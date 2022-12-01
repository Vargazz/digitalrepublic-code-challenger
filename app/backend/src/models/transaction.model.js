const Transaction = (sequelize, DataTypes) => {
    const Transaction = sequelize.define('Transaction', {
        id_transmitter: DataTypes.INTEGER,
        id_badge: DataTypes.INTEGER,
        value: DataTypes.DOUBLE,
        date: DataTypes.DATE,
},
      {
        timestamps: false,
        tableName: 'Transactions',
      });
  
    return Transaction;
}


module.exports = Transaction
