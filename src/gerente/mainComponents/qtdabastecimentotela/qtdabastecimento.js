import React from "react";
import {InputComponent} from "../component";
import { Bar, Pie } from "react-chartjs-2";

class QtdAbastecimento extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            combustiveis : [],
            mes : 11,
            ano : 2019,
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

    getChartData(items){
        this.setState({
            chartData: {
               
                    labels: items.map(item=>item.nome),
                    datasets: [
                        {
                            label: 'Combustivel',
                            data: items.map(item=>item.quantidade),
                            backgroundColor: [
                                'rgba(255, 99, 132, 0.6)',
                                'rgba(54, 162, 235, 0.6)',
                                'rgba(255, 206, 86, 0.6)'
    
                            ]
                        }
                    ]
                }
            })
            console.log("Entrou");
        }
        
    componentDidMount(){
    }

    getCombustivelItem(combustiveis){
        this.getChartData(combustiveis);
        const items = combustiveis.map( (item) =>
            <tr>
                <td>{item.nome}</td>
                <td>{item.quantidade}</td>
            </tr>
        );

    
        this.setState({
            combustiveis : items
        })        
    }
    getCombustiveis(){
        let requestParams = new URLSearchParams();
        requestParams.append("id", 1);
        requestParams.append("mes", this.state.mes);
        requestParams.append("ano", this.state.ano);
        fetch("http://localhost:8080/combustivel/query10?"+requestParams.toString(), {method : "GET"})
            .then((response)=>response.json())
            .then((data)=>{this.getCombustivelItem(data)})
            .catch(()=>{window.alert("Fetch Error")});  
    }
    setMonth(event){
        let data = event.target.value.split("-");
        this.setState({
            mes : data[0],
            ano : data[1]
        });
    }
    render(){
        return(
            <div className="tableContainer">
                <div>
                    <h2>Abastecimentos por Combustível</h2>
                </div>
                <div>
                    <InputComponent type="month" text="Mês e Ano(MM-YYYY)" onChange={(e)=>this.setMonth(e)}/>
                </div>
                <div>
                    <input value="Exibir" type="submit" onClick={(e)=>{this.getCombustiveis()}}/>
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
                            {this.state.combustiveis}
                        </tbody>
                    </table>
                </div>
                <div className="chart">
                    <Pie
                        data={this.state.chartData}
                        height="500px"
                        options={this.state.chartOptions}
                    />   
                </div>         
            </div>
            
        );
    }
}

export default QtdAbastecimento;