import React, { Component } from "react";
import api from '../services/services'
import { Redirect } from "react-router-dom";

class Cadastro extends Component {
    state = {
        account: {
            id:0,
            name: "",
            cpf: "",
            balance: 0,
        },
        ids:[],
        redirect: false
    };

    handleInputChange = (event) => {
        const target = event.target;
        const name = target.name;
        const value = target.value;

        this.setState(prevState => ({
            account: { ...prevState.account, [name]: value }
        }));
    };

    handleSubmit = (event) => {
        event.preventDefault();
        const { account: { name, cpf, balance } } = this.state;

        api.post('/account', {
            name, cpf, balance
        }).then(response => {
            if(response) {
                this.setState({ redirect:true });
            };
        }).catch(function (error) {
            console.log(error.message);
        })
    }

    render() {
        const { redirect } = this.state

        if (redirect) {
            return <Redirect to="/" />
        } else {
            return (
                <div>
                    <h1>Criar Conta</h1>
                    <form onSubmit={ this.handleSubmit }>
                        <div>
                            <label htmlFor="name">Nome</label>
                            <br />
                            <input type="text"
                                id="name"
                                name="name"
                                placeholder="Digite seu Nome"
                                required
                                value={this.state.account.name}
                                onChange={ this.handleInputChange }
                            />
                        </div>
                        <div>
                            <label htmlFor="cpf">CPF</label>
                            <br />
                            <input type="text"
                                id="cpf"
                                name="cpf"
                                placeholder="Digite Seu CPF"
                                required
                                value={this.state.account.cpf}
                                onChange={ this.handleInputChange }
                            />
                        </div>
                        <div>
                            <label htmlFor="balance">Saldo da Conta</label>
                            <br />
                            <input type="number"
                                id="balance"
                                name="balance"
                                placeholder="Digite o saldo que deseja depositar"
                                required
                                value={this.state.account.balance}
                                onChange={ this.handleInputChange }
                            />
                        </div>
                        <div>
                            <button type="submit">Criar Conta</button>
                        </div>

                    </form>
                </div>
            )
        }
    }
}

export default Cadastro;