import React from "react";
import { InputComponent } from "../component";
import { Bar, Pie, Line } from "react-chartjs-2";

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

    getChartData(data){
        this.setState({
            chartData: {    
                labels: data.map(item=>item.data),
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

    componentDidMount(){
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
        this.getChartData(items.sort((a,b)=>b.qtdLitros-a.qtdLitros));

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

export default AbastecimentosBombaMes;