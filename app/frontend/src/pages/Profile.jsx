import React, { Component } from "react";
import api from '../services/services'

class Profile extends Component {
    state = {
        account: {
            id:0,
            name: "",
            cpf: "",
            balance: 0,
        },
        depositValue: 0,
        transactions: [],
    }

    async componentDidMount() {
        this.loadTransactions();
        const { id } = this.props.match.params;
        const response = await api.get(`/account/${id}`);
        this.setState({ account: response.data });

    }

    loadTransactions = async () => { 
        const response = await api.get(`/transaction`);
        const allTransactions = response.data;
        this.setState({ transactions: allTransactions })

    };

    handleInputChange = (event) => {
        const target = event.target;
        const name = target.name;
        const value = target.value;

        this.setState(prevState => ({
            account: { ...prevState.account, [name]: value }
        }));
    };

    render() {
        const { account, transactions } = this.state
        const transactionById = transactions.filter((elem) => elem.id_transmitter === account.id || elem.id_badge === account.id)
            return (
                <div>
                    <p>{ account.name }</p>
                    <p>{ account.balance }</p>
                {transactionById.map(elem => (
                    <article key={elem.id}>
                        <p>{elem.id_transmitter}</p>
                        <p>{elem.id_badge}</p>
                        <p>{elem.value}</p>
                        <p>{elem.date}</p>
                    </article>
                ))}
                <form>
                    <div>
                        <input 
                        type="number"
                        placeholder="Digite o Valor do Deposito" 
                        value={ this.state.depositValue }
                        // onChange={ this.handleInputChange }
                        />
                        <button type="button" onClick={ this.handleDeposit }>Depositar</button>
                    </div>
                    <div>
                        <input type="text" 
                        placeholder="Digite o CPF da pessoa que ira receber"
                        />
                        <input type="text" placeholder="Digite o Valor" />
                        <button type="button">Transferir</button>
                    </div>
                </form>
                </div>
            )
        }
    
}

export default Profile;