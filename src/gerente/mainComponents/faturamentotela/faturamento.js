import React from "react";
import {InputComponent} from "../component";

class Faturamento extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            faturamentos : [],
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
    getFaturamentoItem(result){
        const items = result.map((item)=>(
        <tr>
            <td>{item.nomeFantasia}</td>
            <td>{item.faturamento}</td>
            <td>{item.telefone}</td>
        </tr>));
        this.setState({faturamentos : items})
    }
    getFaturamentos(){
        let requestParams = new URLSearchParams();
        requestParams.append("mes", this.state.mes);
        requestParams.append("ano", this.state.ano);
        fetch("http://localhost:8080/posto/query09?"+requestParams.toString(), {method : "GET"})
        .then((response)=>response.json())
        .then((data)=>{this.getFaturamentoItem(data)});
    }
    render(){
        return(
            <div>
                <div>
                    <h2>Faturamento de cada Posto</h2>
                </div>
                <div>
                    <InputComponent type="month" text="Mês e Ano(MM-YYYY)" onChange={(e)=>this.setMonth(e)}/>
                </div>
                <div>
                    <input value="Exibir" type="submit" onClick={(e)=>{this.getFaturamentos()}}/>
                </div>
                <div className="tableContainer">
                    <table>
                        <thead>
                            <tr>
                                <td>Posto</td>
                                <td>Faturamento</td>
                                <td>Telefone</td>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.faturamentos}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default Faturamento;