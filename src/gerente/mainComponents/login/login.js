import React from 'react';
import { Redirect } from 'react-router-dom';
import './login.css';
import { insertToken, isItLogged } from './loginVerify';

export class Login extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {
            loginState : {
                cpf : '',
                senha : '',
            },
            loginStateContainer : null
        }
    }
    componentWillMount(){
        this.setState({loginStateContainer : isItLogged()})
    }
    changeForm(key, event){
        const st = this.state;
        st.loginState[key] = event.target.value;
        this.setState(st);
    }
    renderInvalidoContainer(){
        return(
            <div id="login-invalido">
                <p>Login Inválido!</p>
            </div>
        );
    }
    getInvalidoContainer(){
        const st = this.state;
        st.loginStateContainer = this.renderInvalidoContainer();
        this.setState(st);
    }
    toLogin(){
        fetch("http://localhost:8080/gerente/login", 
        { 
            method : "POST",
            body : JSON.stringify(this.state.loginState)
        })
        .then((response)=>response.json())
        .then((data)=>{this.validarLogin(data)})
        .catch((e)=>window.alert("Error: "+e))
    }
    validarLogin(data){
        if(data.token===-1){
            this.getInvalidoContainer();
        }else{
            const st = this.state;
            st.loginStateContainer = <Redirect to="/gerente"/>
            insertToken(data.token);
            this.setState(st);
        }
    }

    render(){
        return(
            <div className="login-container">
                <div className="login-content">
                    <h1>meuPosto</h1>
                    <input type="text" name="cpf" placeholder="CPF" onChange={(event)=>{this.changeForm('cpf', event)}}/>
                    <input type="password" name="senha" placeholder="Senha" onChange={(event)=>{this.changeForm('senha', event)}}/>
                    <button onClick={()=>{this.toLogin()}}>Entrar</button>
                    <div>{this.state.loginStateContainer}</div>
                </div>
            </div>
        );
    }
}

export default Login;