import React from "react";
import {OptionComponent} from "./component";

export class BombaOptions extends React.Component{
    constructor(props){
        super(props);
        this.options = [
            {
                id : 0,
                nome : "Bomba 1"
            },
            {
                id : 1,
                nome : "Bomba 2"
            },
            {
                id : 2,
                nome : "Bomba 3"
            }
        ];
    }
    render(){
        return(
            <OptionComponent text="Bomba de Combustível" options={this.options}/>
        );
    }
}

export default BombaOptions;