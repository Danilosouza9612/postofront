import React from "react";
import { InputComponent } from "../component";
import { Line } from "react-chartjs-2";
import { selectValues } from '../../../aux';

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
    getQtdDiaMes(mes, ano){
        const diaMes = [
            31,
            () => (ano%2==0) ? 29 : 28,
            31,
            30,
            31,
            30,
            31,
            31,
            30,
            31,
            30,
            31
        ]

        return diaMes[mes-1];
    }
    getChartData(data){
        const litrosPorMes = new Array(this.getQtdDiaMes(this.state.mes, this.state.ano));
        let i;
        for(i=0; i<litrosPorMes.length; i++){
            litrosPorMes[i]={
                dia : (i+1),
                qtdLitros : 0
            };
        }
        data.forEach((value, index)=>{
            litrosPorMes[(value.data.split("/")[0]*1)-1].qtdLitros+=value.qtdLitros;
        });
        this.setState({
            chartData: {    
                labels: litrosPorMes.map((item)=>item.dia),
                datasets: [
                    {
                        label: 'Combustivel (Litros)',
                        data: litrosPorMes.map((item)=>item.qtdLitros),
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

        this.getChartData(items);

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
                    <Line
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