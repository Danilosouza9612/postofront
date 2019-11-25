import React from "react";
import { Bar } from "react-chartjs-2";
import { selectValues } from '../../../aux';

class ClienteAssiduo extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            clientes : []
        }
    }
    getClienteItem(data){
        const items = data.map((item)=>
            <tr>
                <td>{item.nome}</td>
                <td>{item.cpf}</td>
                <td>{item.frequencia}</td>
            </tr>
        );
        const dataOrdered = data.sort((a,b) => b.frequencia-a.frequencia)
        this.setState({
            clientes : items
        });
        this.getChartData(dataOrdered);
    }
    getClientes(){
        fetch("http://localhost:8080/cliente/query11", {method : "GET"})
            .then((response)=>response.json())
            .then((data)=>{
                this.getClienteItem(data);
            })
            .catch(() => {window.alert("Fetch Error")});
    }
    getChartData(data){
        const dataSelected = new Array();
        data.forEach((item, index)=>{
            if(index<=10){
                dataSelected.push(item);
            }
        });
        this.setState({
            chartData: {    
                labels: dataSelected.map(item=>item.nome),
                datasets: [
                    {
                        label: 'Os 10 clientes mais assíduos',
                        data: dataSelected.map(item=>item.frequencia),
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
        this.getClientes();
    }
    render(){
        return (
            <div className="tableContainer">
                <div>
                    <h2>Clientes mais Assíduos</h2>
                </div>
                <div>
                    <table>
                        <thead>
                            <tr>
                                <td>Nome</td>
                                <td>CPF</td>
                                <td>Quantidade</td>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.clientes}
                        </tbody>
                    </table>
                </div>
                <div>
                <Bar
                        data={this.state.chartData}
                        height="200px"
                        options={this.state.chartOptions}
                /> 
                </div>
            </div>
        );
    }
}

export default ClienteAssiduo;