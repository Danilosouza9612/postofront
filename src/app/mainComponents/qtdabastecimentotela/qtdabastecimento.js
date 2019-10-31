import React from "react";

class QtdAbastecimento extends React.Component{
    constructor(props){
        super(props);
        this.combustiveis = [
            {
                combustivel : {
                    nome : "Gasolina",
                },
                quantidade : 100
            },
            {
                combustivel : {
                    nome : "Diesel",
                },
                quantidade : 50
            },
            {
                combustivel : {
                    nome : "Etanol",
                },
                quantidade : 20
            }
        ]
    }
    getCombustiveis(){
        return this.combustiveis.map( (item) =>
            <tr>
                <td>{item.combustivel.nome}</td>
                <td>{item.quantidade}</td>
            </tr>
        );
    }
    
    render(){
        return(
            <div className="tableContainer">
                <div>
                    <h2>Abastecimentos por Combustível</h2>
                </div>
                <div>
                    <table>
                        <thead>
                            <tr>
                                <td>Combustível</td>
                                <td>Quantidade</td>
                            </tr>
                        </thead>
                        <tbody>
                            {this.getCombustiveis()}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default QtdAbastecimento;