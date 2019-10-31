import React from "react";

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

        this.setState({
            clientes : items
        });
    }
    getClientes(){
        fetch("http://localhost:8080/cliente/query11", {method : "GET"})
            .then((response)=>response.json())
            .then((data)=>{
                this.getClienteItem(data);
            })
            .catch(() => {window.alert("Fetch Error")});
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
            </div>
        );
    }
}

export default ClienteAssiduo;