import React from "react";

class BombasTabela extends React.Component{
    
    constructor(props){
        super(props);
        this.bombas = [
            {
                id : 0,
                combustivel : {
                    nome : "Gasolina Comum"
                },
                quantidade : 950
            },
            {
                id : 1,
                combustivel : {
                    nome : "Diesel"
                },
                quantidade : 800
            }
        ]
    }
    renderItemTabela(){
        const items = this.bombas.map((op)=> 
                <tr>
                    <td>{op.id}</td>
                    <td>{op.combustivel.nome}</td>
                    <td>{op.quantidade}</td>
                </tr>
        );

        return items;
    }
    
    render(){
        return (
            <div id="bombaTabelaContainer">
                <div>
                    <h2>Bombas de Combustível</h2>
                </div>
                <div className="tableContainer">
                    <table>
                        <thead>
                            <tr>
                                <td>Identificador</td>
                                <td>Combustível</td>
                                <td>Quantidade</td>
                            </tr>
                        </thead>
                        <tbody>
                            {this.renderItemTabela()}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default BombasTabela;