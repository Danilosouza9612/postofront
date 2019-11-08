import React from 'react';
import InputComponent from '../component.js';
import BombaOptions from '../misc';
import Abastecimento from './abastecimento';

class NovoAbastecimento extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            formData : {
                bombaId: undefined,
                nome: undefined,
                qtdLitros: undefined,
                cpf: undefined,
                data: undefined,
                hora : undefined,
            }
        }
    }

    enviarDados(){
        try{
            let abastecimento = new Abastecimento(this.state.formData);
            let json = JSON.stringify(abastecimento);
            console.log(json);
            fetch("http://localhost:8080/abastecimento/query05",
            {
                method: "POST",
                body: json

            })
            .then((response)=>{
                if(response.status===200){
                    this.props.onAbastecimento();
                    response.text().then((data)=>{window.alert(data)})
                }else{
                    window.alert("Erro " + response.status);
                }
            }).catch(()=>{window.alert("Fetch Error")});
        }catch(e){
            window.alert(e);
        }
    }

    setFormValue(key, value){
        let form = this.state.formData;
        form[key] = value;
        this.setState(form);
        console.log(this.state.formData);
    }
    render(){
        return (
            <div>
                <div>
                    <h2>Novo Abastecimento</h2>
                </div>
                <InputComponent type="date" text="Data" name="data" onChange={(e)=>this.setFormValue("data", e.target.value)}/>
                <InputComponent type="time" text="Hora" name="hora" onChange={(e)=>this.setFormValue("hora", e.target.value)}/>
                <InputComponent type="text" text="Quantidade de Litros" name="litros" onChange={(e)=>this.setFormValue("qtdLitros", e.target.value)}/>
                <InputComponent type="text" text="CPF do Cliente" name="cpf" onChange={(e)=>this.setFormValue("cpf", e.target.value)}/>
                <InputComponent type="text" text="Nome do Cliente" name="nome" onChange={(e)=>this.setFormValue("nome", e.target.value)}/>
                <BombaOptions onChange={(e)=>(this.setFormValue("bombaId", e.target.value))}/>
                <div>
                    <input type="submit" value="Inserir" onClick={(e)=> this.enviarDados()}></input>
                </div>
            </div>
        );
    }
}

export default NovoAbastecimento;
