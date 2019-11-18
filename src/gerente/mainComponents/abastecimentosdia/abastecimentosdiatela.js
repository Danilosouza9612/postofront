import React from "react";
import InputComponent from "../component";
import { Bar } from "react-chartjs-2";

class AbastecimentoDia extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            abastecimentos : [],
            chartData:{},
            chartOptions : {
                maintainAspectRatio: false ,
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero:true,
                            min: 0,
                        }
                      }]
                   }
            }
        }
    }
    getChartData(data){
        this.setState({
            chartData: {    
                labels: data.map(item=>item.nomeCliente + " " +item.data),
                datasets: [
                    {
                        label: 'Combustivel (Litros)',
                        data: data.map(item=>item.qtdLitros),
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.6)',
                            'rgba(54, 162, 235, 0.6)',
                            'rgba(255, 206, 86, 0.6)'
                        ]
                    }
                    
                ]
            }
        })
    }
    getAbastecimentoItem(data){
        const items = data.map((item)=>{
            return (
                <tr>
                    <td>{item.data}</td>
                    <td>{item.nomeCliente}</td>
                    <td>{item.cpf}</td>
                    <td>{item.preco}</td>
                    <td>{item.qtdLitros}</td>
                    <td>{item.nome}</td>
                </tr>
            );
        })

        this.getChartData(data.sort((a,b)=>b.qtdLitros-a.qtdLitros));

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
        fetch("http://localhost:8080/abastecimento/query07?"+queryString.toString(), {method : "GET"})
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
                                <td>Hora</td>
                                <td>Nome</td>
                                <td>CPF</td>
                                <td>Preço</td>
                                <td>Litros</td>
                                <td>Combustível</td>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.abastecimentos}
                        </tbody>
                    </table>
                </div>
                <div className="chart">
                    <Bar
                        data={this.state.chartData}
                        height="500px"
                        options={this.state.chartOptions}
                    />   
                </div>  
            </div>
        );
    }
}

export default AbastecimentoDia;