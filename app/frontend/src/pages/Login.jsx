import React, { Component } from "react";
import { Link } from "react-router-dom";
import api from '../services/services';
import '../style/Login.css'

class Login extends Component {
    state = {
        usuarios:[],
        id:0,
        account: {
            name:"",
            cpf:""
        }
    };
// Referencia na Mentoria da Trybe ---------------------------------------------------- {
    componentDidMount() {
        this.loadUsuarios();
        
    }

    loadUsuarios = async () => { 
        const response = await api.get(`/account`);
        const usuario = response.data;

        this.setState({ usuarios: usuario });   

    };

    handleInputChange = (event) => {
        const target = event.target;
        const name = target.name;
        const value = target.value;

        this.setState(prevState => ({
            account: { ...prevState.account, [name]: value }
        }));
    };

    handleSubmite = (event) => {
        event.preventDefault();
        const { usuarios, account } = this.state
        const { history } = this.props

        const usuario = usuarios.find((elem) => elem.cpf === account.cpf && elem.name === account.name);
        const getID = usuario.id
        history.push(`/profile/${getID}`)
    };
// ----------------------------------------------------------------------------------------------------------}
    render(){
        
    return (
        <div className="div-center">
            <div className="gradient">
            <h1 className="nameBank gradient">Digital Bank</h1>
            </div>
        <form className="formLogin">
            <h1>Login</h1>
            <div>
                <label htmlFor="name">Nome</label>
                <br />
                <input type="text" 
                className="inputs"
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
                className="inputs"
                id="cpf"
                name="cpf"
                placeholder="Digite Seu CPF"
                required
                value={this.state.account.cpf}
                onChange={ this.handleInputChange }
                />
            </div>
            <div>
               <button className="buttonLogin" type="button" onClick={ this.handleSubmite }>Login</button>
                <br />
                <Link to={`/cadastro`} className="buttonCreate">Criar Conta</Link>
            </div>

        </form>
        </div>
    )
    }
}

export default Login