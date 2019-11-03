import React from 'react';
import InputComponent from '../component.js';
import BombaOptions from '../misc';

class NovoAbastecimento extends React.Component{
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
                    <div>
                        <input type="submit" value="Inserir"></input>
                    </div>
                </form>
            </div>
        );
    }
}

export default NovoAbastecimento;
