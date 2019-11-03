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
        this.bandeiraId = bandeiraId;
    }
    set BombaId(bombaId){
        this.bombaId = bombaId;
    }
    set Data(data){
        this.data = data;
    }
    set QtdLitros(qtdLitros){
        this.qtdLitros = qtdLitros;
    }
    set Preco(preco){
        this.preco = preco;
    }
}

export default AbastecimentoBomba;