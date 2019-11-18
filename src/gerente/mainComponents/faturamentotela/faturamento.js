import React from "react";
import {InputComponent} from "../component";
import { Bar, Pie, Line, Doughnut } from "react-chartjs-2";

class Faturamento extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            faturamentos : [],
            mes : 11,
            ano : 2019,
            chartData: {},
            chartOptions:{
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
                labels: data.map(item=>item.nomeFantasia),
                datasets: [
                    {
                        label: 'Faturamento (R$)',
                        data: data.map(item=>item.faturamento),
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

    componentDidMount(){

    }

    setMonth(event){
        let data = event.target.value.split("-");
        this.setState({
            mes : data[0],
            ano : data[1]
        });
    }
    getFaturamentoItem(result){
        this.getChartData(result);
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
                <div className="chart">
                    <Doughnut 
                        data={this.state.chartData}
                        height="500px"
                        options={this.state.chartOptions}
                    />   
                </div>    
            </div>
        );
    }
}

export default Faturamento;