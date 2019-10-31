import React from "react";

class ClienteAssiduo extends React.Component{
    constructor(props){
        super(props);
        this.clientes = [
            {
                nome : "Danilo",
                cpf : "755-333-222-111"
            },
            {
                nome : "TJ",
                cpf : "755-333-444-111"
            }
        ];
    }
    getClientes(){
        return this.clientes.map((item)=>
            <tr>
                <td>{item.nome}</td>
                <td>{item.cpf}</td>
            </tr>
        );
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
                            </tr>
                        </thead>
                        <tbody>
                            {this.getClientes()}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default ClienteAssiduo;