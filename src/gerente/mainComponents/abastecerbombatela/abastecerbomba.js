import React from "react";
import InputComponent from "../component";
import BombaOptions from "../misc";
import FornecedorOptions from "./fornecedoroptions";
import AbastecimentoBomba from "./abastecimentobomba";

class AbastecerBomba extends React.Component{
/*
@JsonProperty("id") int id, 
@JsonProperty("bandeiraId") int bandeiraId, 
@JsonProperty("bombaId") int bombaId,
@JsonProperty("data") String data, 
@JsonProperty("qtdLitros") float qtdLitros,
@JsonProperty("preco") float preco) throws IOException
*/
    constructor(props){
        super(props)
        this.state = {
            formData : {
                bandeiraId : undefined,
                bombaId : undefined,
                data : undefined,
                qtdLitros : undefined,
                preco : undefined
            }
        }
    }
    enviarDados(){
        try{
            let abastecimentoBomba = new AbastecimentoBomba(this.state.formData);
            let json = JSON.stringify(abastecimentoBomba);
            console.log(json);
            fetch("http://localhost:8080/abastecimento_bomba/query03", 
            {
                method : "POST", 
                body : json 
            })
            .then((response)=>{
                if(response.status===200){
                    response.text().then((data)=>{window.alert(data)})
                }else{
                    window.alert("Erro "+response.status);
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
            <div className="mainContainer">
                <div>
                    <h2>Abastecer Bomba</h2>
                </div>
                <InputComponent type="date" text="Data" name="data" onChange={(e)=>{this.setFormValue("data", e.target.value)}}/>
                <InputComponent type="text" text="Quantidade de Litros" name="qtdLitros" onChange={(e)=>{this.setFormValue("qtdLitros", e.target.value)}} />
                <InputComponent type="text" text="Preço" name="preco" onChange={(e)=>{this.setFormValue("preco", e.target.value)}} />
                <FornecedorOptions onChange={(e)=>{this.setFormValue("bandeiraId", e.target.value)}} />
                <BombaOptions onChange={(e)=>{this.setFormValue("bombaId", e.target.value)}} />
                <div>
                    <input type="submit" value="Inserir" onClick={(e)=>{this.enviarDados()}}/>
                </div>
            </div>
        );
    }
}

export default AbastecerBomba;