import React from "react";
import InputComponent from "../component";

class AbastecimentoDia extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            abastecimentos : []
        }
    }
    getAbastecimentoItem(data){
        const items = data.map((item)=>{
            return (
                <tr>
                    <td>{item.preco}</td>
                    <td>{item.qtdLitros}</td>
                    <td>{item.cpf}</td>
                    <td>{item.nome}</td>
                </tr>
            );
        })

        this.setState({
            abastecimentos : items
        })
    }
    dateChange(event){
        this.dateRequest(event.target.value);
    }
    dateRequest(dataSelec){
        let params = {
            data : dataSelec,
            id : 1
        };
        let queryString = new URLSearchParams();
        for(let key in params){
            queryString.append(key, params[key]);
        }
        fetch("http://localhost:8080/posto/query07?"+queryString.toString(), {method : "GET"})
        .then((response)=>response.json())
        .then((data)=>{this.getAbastecimentoItem(data)});
    }
    render(){
        return (
            <div id="bombaTabelaContainer">
                <div>
                    <h2>Abastecimentos do dia</h2>
                </div>
                <div>
                    <form>
                        <InputComponent text="Data" type="date" onChange={(e)=>this.dateChange(e)}/>
                    </form>
                </div>
                <div className="tableContainer">
                    <table>
                        <thead>
                            <tr>
                                <td>Preço</td>
                                <td>Litros</td>
                                <td>CPF</td>
                                <td>Combustível</td>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.abastecimentos}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default AbastecimentoDia;