/*
@JsonProperty("id") int id, 
@JsonProperty("bandeiraId") int bandeiraId, 
@JsonProperty("bombaId") int bombaId,
@JsonProperty("data") String data, 
@JsonProperty("qtdLitros") float qtdLitros,
@JsonProperty("preco") float preco) throws IOException
*/

class AbastecimentoBomba{
    
    constructor(form){
        this.BandeiraId = form.bandeiraId;
        this.BombaId = form.bombaId;
        this.Data = form.data;
        this.QtdLitros = form.qtdLitros;
        this.Preco = form.preco;
    }

    get BandeiraId(){
        return this.bandeiraId;
    }
    get BombaId(){
        return this.bombaId;
    }
    get Data(){
        return this.data;
    }
    get QtdLitros(){
        return this.qtdLitros;
    }
    get Preco(){
        return this.preco;
    }
    set BandeiraId(bandeiraId){
        if(bandeiraId!==undefined){
            this.bandeiraId = bandeiraId;
        }else{
            throw new Error("Informe o Fornecedor de combustível");
        }
    }
    set BombaId(bombaId){
        if(bombaId!==undefined){
            this.bombaId = bombaId;
        }else{
            throw new Error("Informe a bomba de combustível");
        }
    }
    set Data(data){
        if(data!==undefined){
            this.data = data;
        }else{
            throw new Error("Informe a data");
        }
    }
    set QtdLitros(qtdLitros){
        if(qtdLitros!==undefined && qtdLitros!==""){
            this.qtdLitros = qtdLitros;
        }else{
            throw new Error("Informe a quantidade de litros");
        }
    }
    set Preco(preco){
        if(preco!==undefined && preco!==""){
            this.preco = preco;
        }else{
            throw new Error("Informe o preço");
        }
    }
}

export default AbastecimentoBomba;