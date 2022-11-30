const Account = (sequelize, DataTypes) => {
  const Account = sequelize.define("Account", {
    name: DataTypes.STRING,
    cpf: DataTypes.STRING,
    balance: DataTypes.DOUBLE,
  },
    {
      timestamps: false,
      tableName: 'Accounts',
      underscored: true,
    });
    return Account;
}


module.exports = Account;
