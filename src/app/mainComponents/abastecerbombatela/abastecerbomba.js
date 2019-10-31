import React from "react";
import InputComponent from "../component";
import BombaOptions from "../misc";
import FornecedorOptions from "./fornecedoroptions";

class AbastecerBomba extends React.Component{

    getBombaOptions(){
        this.bombaOptions = [
            {
                id : "0",
                nome : "Bomba 0"
            },
            {
                id : "1",
                nome : "Bomba 1"
            },
            {
                id : "2",
                nome : "Bomba 2"
            }
        ]
    }
    componentWillMount(){
        this.getBombaOptions();
    }

    render(){
        return (
            <div>
                <form>
                    <div>
                        <h2>Abastecer Bomba</h2>
                    </div>
                    <InputComponent type="data" text="Data" name="data"/>
                    <InputComponent type="text" text="Quantidade de Litros" name="data"/>
                    <InputComponent type="text" text="Preço" name="preco"/>
                    <FornecedorOptions/>
                    <BombaOptions/>
                </form>
            </div>
        );
    }
}

export default AbastecerBomba;