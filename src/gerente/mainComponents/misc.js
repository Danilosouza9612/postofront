import React from "react";
import {OptionComponent} from "./component";

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
        fetch("http://localhost:8080/bomba/bombas?id=1", {method : "GET"})
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

export default BombaOptions;