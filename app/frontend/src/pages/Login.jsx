import React, { Component } from "react";
import { Link } from "react-router-dom";

class Login extends Component {
    state = {
        account: {
            name: "",
            cpf: ""
        },
        redirect: false,
    };

    render(){ 
    return (
        <div>
            <h1>Login</h1>
        <form>
            <div>
                <label htmlFor="name">Nome</label>
                <br />
                <input type="text" 
                id="name" 
                name="name"
                placeholder="Digite seu Nome"
                required
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
                />
            </div>
            <div>
                <button type="submit">Login</button>
                <br />
                <Link to={`/cadastro`}>Criar Conta</Link>
            </div>

        </form>
        </div>
    )
    }
}

export default Login