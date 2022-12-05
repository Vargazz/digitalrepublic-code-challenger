import React, { Component } from "react";
import api from '../services/services'
import "../style/Profile.css"

class Profile extends Component {
    state = {
        account: {
            id:0,
            name: "",
            cpf: "",
            balance: 0,
        },
        valueTransfer: 0,
        cpfDest:"",
        accounts:[],
        transactions: [],
    }
//Referencia da Mentoria da  Trybe {-----------------------------------
    async componentDidMount() {
        this.loadTransactions();
        this.loadAccount();
        this.getById();

    }

    getById = async () => {
        const { id } = this.props.match.params;
        const response = await api.get(`/account/${id}`);
        this.setState({ account: response.data });
    }

    loadTransactions = async () => { 
        const response = await api.get(`/transaction`);
        const allTransactions = response.data;
        this.setState({ transactions: allTransactions })

    };

    loadAccount = async () => { 
        const response = await api.get(`/account`);
        const allAccounts = response.data;
        this.setState({ accounts: allAccounts });
    };

    handleInputChange = ({ target }) => {
        const value = target.type === 'checkbox' ? target.checked : target.value;

        const{ name } = target

        this.setState({
            [name]: value
        });
    };
// ----------------------------------------------------------- }
    handleDeposit = async(event) => {
            event.preventDefault();
            const { account: { balance },  valueTransfer, accounts, cpfDest } = this.state;
            const { id } = this.props.match.params;
            const accountRecipe = accounts.find((elem) => elem.cpf === cpfDest);
            const idRecipe = accountRecipe.id
            const maxValue = 2000
            if(valueTransfer < maxValue || valueTransfer <= balance){
                const soma = balance + valueTransfer
                const menos = balance - valueTransfer

                await api.put(`/account/${idRecipe}`, { balance: soma });
                await api.put(`/account/${id}`, { balance: menos });
    
                await api.post(`/transaction`, { transmitter: id, badge:idRecipe , value: valueTransfer });
                window.location.reload()
            } else{
                global.alert('Transferencia nao realizada por falta de Saldo ou Valor maximo ultrapassado');
            };
    }

    render() {
        const { account, transactions, valueTransfer, cpfDest } = this.state
        const transactionById = transactions.filter((elem) => elem.transmitter === account.id || elem.badge === account.id)
            return (
                <div>
                    <p className="name">{ account.name }</p>
                    <p className="name">R$:{ account.balance }</p>
                <form className="form">
                    <div>
                    <label htmlFor="cpfDest">CPF</label>
                        <input type="text" 
                        className="input"
                        id="cpfDest" 
                        name="cpfDest"
                        placeholder="Digite o CPF da pessoa que ira receber"
                        onChange={ this.handleInputChange }
                        value={ cpfDest }
                        />
                        <label htmlFor="valueTransfer">Valor:</label>
                        <input
                        className="input"
                        id="valueTransfer" 
                        name="valueTransfer"
                        type="number" 
                        placeholder="Digite o Valor"
                        onChange={ this.handleInputChange }
                        value={ valueTransfer }
                        />
                        <button type="button" onClick={this.handleDeposit} className="input-button">Transferir</button>
                    </div>
                </form>
                <div>
                {transactionById.map(elem => (
                    <article key={elem.id} className="Transactions">
                        <p>{elem.transmitter}</p>
                        <p>{elem.badge}</p>
                        <p>{elem.value}</p>
                        <p>{elem.createdAt}</p>
                    </article>
                ))}
                </div>
                </div>
            )
        }
    
}

export default Profile;