import React from "react";
import {OptionComponent} from "./component";
import { readToken } from './login/loginVerify';


export class BombaOptions extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            options : []
        }
    }
    getBombaItem(bombas){
        const items = bombas.map((value)=>
        {
            return {
                nome : value.nome + " " + value.id,
                id : value.id
            }
        }
        );

        this.setState({options : items});
    }
    getBombas(){
        fetch("http://localhost:8080/bomba/bombas?token="+readToken(), {method : "GET"})
        .then((response)=>response.json())
        .then((data)=>{this.getBombaItem(data)})
        .catch(()=>{window.alert("Fetch Error")})
    }
    componentDidMount(){
        this.getBombas();
    }
    render(){
        return(
            <OptionComponent text="Bomba de Combustível" onChange={this.props.onChange} name="bombaId" options={this.state.options}/>
        );
    }
}
export class FornecedorOptions extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            options : []
        }
    }
    getFornecedores(){
        fetch("http://localhost:8080/bandeira/bandeiras", {method : "GET"})
        .then((response)=>response.json())
        .then((data)=>{this.setState({options : data})})
        .catch(()=>{window.alert("Fetch Error")});
    }
    componentDidMount(){
        this.getFornecedores();
    }
    render(){
        return(
            <OptionComponent name="bandeiraId" text="Fornecedor" onChange={this.props.onChange} options={this.state.options}/>
        );
    }
}
export class FrentistaOptions extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            options : []
        }
    }
    getFrentistas(){
        fetch("http://localhost:8080/frentista/frentistas?token="+readToken(), {method : "GET"})
        .then((response)=>response.json())
        .then((data)=>{this.setState({options : data})})
        .catch(()=>{window.alert("Fetch Error")});
    }
    componentDidMount(){
        this.getFrentistas();
    }
    render(){
        return(
            <OptionComponent name="bandeiraId" text="Frentista" onChange={this.props.onChange} options={this.state.options}/>
        );
    }

}
export default BombaOptions;