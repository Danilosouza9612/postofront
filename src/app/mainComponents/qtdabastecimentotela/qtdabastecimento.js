import React from "react";

class QtdAbastecimento extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            combustiveis : []
        }
    }
    getCombustivelItem(combustiveis){
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
        fetch("http://localhost:8080/combustivel/query10?id=1", {method : "GET"})
            .then((response)=>response.json())
            .then((data)=>{this.getCombustivelItem(data)})
            .catch(()=>{window.alert("Fetch Error")});  
    }
    componentDidMount(){
        this.getCombustiveis();
    }
    render(){
        return(
            <div className="tableContainer">
                <div>
                    <h2>Abastecimentos por Combustível</h2>
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
            </div>
        );
    }
}

export default QtdAbastecimento;