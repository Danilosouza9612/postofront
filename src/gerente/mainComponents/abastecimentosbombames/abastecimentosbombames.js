import React from "react";
import { InputComponent } from "../component";

export class AbastecimentosBombaMes extends React.Component{
/*
	public String getData();
	public float getQtdLitros();
	public String getNomeCombustivel();
	public String getNomeFornecedor();
	public float getPreco();
*/
    constructor(props){
        super(props);
        this.state = {
            abastecimentos : [],
            mes : undefined,
            ano : undefined
        }
    }
    setMonth(event){
        let data = event.target.value.split("-");
        this.setState({
            mes : data[0],
            ano : data[1]
        });
    }
    getAbastecimentosBombaItem(items){
        const itemsTr = items.map(item=>
            <tr>
                <td>{item.data}</td>
                <td>{item.qtdLitros}</td>
                <td>{item.nomeCombustivel}</td>
                <td>{item.nomeFornecedor}</td>
                <td>{item.preco}</td>
            </tr>    
        );

        this.setState({abastecimentos : itemsTr})
    }
    getAbastecimentosBomba(dataSelec){
        let requestParams = new URLSearchParams();
        requestParams.append("id", 1);
        requestParams.append("mes", this.state.mes);
        requestParams.append("ano", this.state.ano);
        fetch("http://localhost:8080/abastecimento_bomba/query13?"+requestParams.toString(), { method : "GET"})
        .then(response=>{return response.json()})
        .then(data=>{this.getAbastecimentosBombaItem(data)})
        .catch((e)=>{window.alert("Fetch Error:"+e)})
    }
    render(){
        return (
            <div id="bombaTabelaContainer"> 
                <div>
                    <h2>Abastecimentos de Bomba</h2>
                </div>
                <div>
                    <form>
                        <InputComponent text="Mês e Ano (MM-YYYY)" type="month" onChange={(e)=>this.setMonth(e)}/>
                    </form>
                </div>
                <div>
                    <input value="Exibir" type="submit" onClick={(e)=>{this.getAbastecimentosBomba()}}/>
                </div>
                <div className="tableContainer">
                    <table>
                        <thead>
                            <tr>
                                <td>Data</td>
                                <td>Litros</td>
                                <td>Combustível</td>
                                <td>Fornecedor</td>
                                <td>Preço</td>
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

export default AbastecimentosBombaMes;