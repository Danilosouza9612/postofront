import React from "react";

class BombasTabela extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {
            bombas : []
        }
    }
    getBombasItem(bombas){
        const items = bombas.map((op)=> 
                <tr>
                    <td>{op.nome}</td>
                    <td>{op.preco}</td>
                    <td>{op.qtdRestante} litros</td>
                </tr>
        );

        this.setState({
            bombas : items
        });
    }
    getBombas(){
        fetch("http://localhost:8080/bomba/query08", {method : "GET"})
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
            </div>
        );
    }
}

export default BombasTabela;