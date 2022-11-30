import React, { Component } from "react";
import api from '../services/services'

class Cadastro extends Component {
    state = {
        account: {
            name: "",
            cpf: "",
            balance: 0,
        },
    };

    async componentDidMount() {
        const { id } = this.props.match.params;
        const response = await api.get(`/account/${id}`);
        this.setState({ account: response.data });
    }

    
    render() {
        const { account } = this.state
            return (
                <div>
                    <p>{ account.name }</p>
                    <p>{ account.balance }</p>
                </div>
            )
        }
    
}

export default Cadastro;