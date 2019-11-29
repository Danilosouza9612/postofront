import React from "react";
import InputComponent from '../component.js';
import Posto from './posto';
import {FornecedorOptions} from '../misc';

class NovoPosto extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            formData : {
                cnpj : undefined,
                razao_social : undefined,
                nome_fantasia : undefined,
                telefone : undefined,
                BANDEIRA_id : undefined,
                cep : undefined,
                numero : undefined,
                complemento : undefined
            }
           
        }
    }

    enviarDados(){
        try{
            let posto = new Posto(this.state.formData);
            let json = JSON.stringify(posto);
            console.log(json);
            fetch("http://localhost:8080/posto/query12",
            {
                method : "POST",
                body : json
            })
            .then((response)=> {
                if(response.status === 200){
                    response.text().then((data)=>{window.alert(data)})
                }else{
                    window.alert("Erro " + response.status);
                }
            }).catch(()=> {window.alert("Fetch Error")});
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
                        <h2>Cadastrar Novo Posto</h2>
                    </div>
                    <InputComponent type="text" text="Informe o Cnpj" name="cnpj" onChange={(e)=>this.setFormValue("cnpj", e.target.value)}/>
                    <InputComponent type="text" text="Razão Social" name="razao_social" onChange={(e)=>this.setFormValue("razao_social", e.target.value)}/>
                    <InputComponent type="text" text="Nome Fantasia" name="nome_fantasia" onChange={(e)=>this.setFormValue("nome_fantasia", e.target.value)}/>
                    <InputComponent type="text" text="Telefone" name="telefone" onChange={(e)=>this.setFormValue("telefone", e.target.value)}/>
                    <FornecedorOptions type="text" text="Bandeira(Fornecedor)" name="BANDEIRA_id" onChange={(e)=>this.setFormValue("BANDEIRA_id", e.target.value)}/>
                    <InputComponent type="text" text="CEP" name="cep" onChange={(e)=>this.setFormValue("cep", e.target.value)}/>
                    <InputComponent type="text" text="Número" name="numero" onChange={(e)=>this.setFormValue("numero", e.target.value)}/>
                    <InputComponent type="text" text="Complemento" name="complemento" onChange={(e)=>this.setFormValue("complemento", e.target.value)}/>
                    <div>
                        <input type="submit" value="Cadastrar" onClick={(e)=> this.enviarDados()}></input>
                    </div>
            </div>


        )
    }
}

export default NovoPosto;