import React from "react";
import {OptionComponent} from "../component";

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

export default FornecedorOptions;