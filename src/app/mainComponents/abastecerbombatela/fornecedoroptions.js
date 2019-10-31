import React from "react";
import {OptionComponent} from "../component";

export class FornecedorOptions extends React.Component{
    constructor(props){
        super(props);
        this.options = [
            {
                id : 0,
                nome : "Fornecedor 1"
            },
            {
                id : 1,
                nome : "Fornecedor 2"
            },
            {
                id : 2,
                nome : "Fornecedor 3"
            }
        ];
    }
    render(){
        return(
            <OptionComponent text="Fornecedor" options={this.options}/>
        );
    }
}

export default FornecedorOptions;