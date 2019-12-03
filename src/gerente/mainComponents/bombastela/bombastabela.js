import React from "react";
import { Bar } from "react-chartjs-2";
import { readToken } from '../login/loginVerify';



class BombasTabela extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {
            bombas : [],
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
    getBombasItem(bombas){
        bombas.sort((a,b)=>a.qtdRestante-b.qtdRestante);
        const items = bombas.map((op)=> 
                <tr>
                    <td>{op.id}</td>
                    <td>{op.nome}</td>
                    <td>{op.preco}</td>
                    <td>{op.qtdRestante} litros</td>
                </tr>
        );

        this.setState({
            bombas : items
        });
        this.getChartData(bombas);
    }
    getChartData(data){
        this.setState({
            chartData: {    
                labels: data.map(item=>item.id + " " + item.nome),
                datasets: [
                    {
                        label: 'Combustivel (Litros)',
                        data: data.map(item=>item.qtdRestante),
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
    getBombas(){
        fetch("http://localhost:8080/bomba/query08?token="+readToken(), {method : "GET"})
        .then((response)=>response.json())
        .then((data)=>{this.getBombasItem(data)})
        .catch(()=>{window.alert("Fetch Error")});  
    }
    componentDidMount(){
        this.getBombas();
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
                                <td>Nome</td>
                                <td>Preço</td>
                                <td>Quantidade Restante</td>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.bombas}
                        </tbody>
                    </table>
                </div>
                <div>
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

export default BombasTabela;