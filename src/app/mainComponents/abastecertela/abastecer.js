import React from 'react';
import InputComponent from '../component.js';
import BombaOptions from '../misc';

class NovoAbastecimento extends React.Component{
    
    getPostoOptions(){
        this.options = [
            {
                id : 0,
                nome : "Bomba 1"
            },
            {
                id : 1,
                nome : "Bomba 2"
            },
            {
                id : 2,
                nome : "Bomba 3"
            }
        ];
    }
    componentWillMount(){
        this.getPostoOptions();
    }
    render(){
        return (
            <div>
                <form>
                    <div>
                        <h2>Novo Abastecimento</h2>
                    </div>
                    <InputComponent type="date" text="Data" name="data"/>
                    <InputComponent type="time" text="Hora" name="hora"/>
                    <InputComponent type="text" text="Quantidade de Litros" name="litros"/>
                    <InputComponent type="text" text="CPF do Cliente" name="cpf"/>
                    <InputComponent type="text" text="Nome do Cliente" name="nome"/>
                    <BombaOptions/>
                </form>
            </div>
        );
    }
}

export default NovoAbastecimento;
