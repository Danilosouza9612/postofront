import NovoPosto from "./novoposto";

class Posto{

    constructor(form){
        this.Cnpj = form.cnpj;
        this.RazaoSocial = form.razao_social;
        this.NomeFantasia = form.nome_fantasia;
        this.Telefone = form.telefone;
        this.GerenteId = form.GERENTE_id;
        this.BandeiraId = form.BANDEIRA_id;
        this.Cep = form.cep;
        this.Numero = form.numero;
        this.Complemento = form.complemento;
    }

    get Cnpj(){
        return this.cnpj;
    }
    get RazaoSocial(){
        return this.razao_social;
    }
    get NomeFantasia(){
        return this.nome_fantasia;
    }
    get Telefone(){
        return this.telefone;
    }
    get GerenteId(){
        return this.GERENTE_id;
    }
    get BandeiraId(){
        return this.BANDEIRA_id;
    }
    get Cep(){
        return this.cep;
    }
    get Numero(){
        return this.numero;
    }
    get Complemento(){
        return this.complemento;
    }

    set Cnpj(cnpj){
        if(cnpj!==undefined){
            this.cnpj = cnpj;
        }else{
            throw new Error("Informe o Cnpj do posto");
        }
    }
    set RazaoSocial(razao_social){
        if(razao_social!==undefined){
            this.razao_social = razao_social;
        }else{
            throw new Error("Informe a razão social do posto");
        }
    }
    set NomeFantasia(nome_fantasia){
        if(nome_fantasia!==undefined && nome_fantasia!==""){
            this.nome_fantasia = nome_fantasia;
        }else{
            throw new Error("Informe o nome fantasia do posto");
        }
    }
    set Telefone(telefone){
        if(telefone!==undefined && telefone!==""){
            this.telefone = telefone;
        }else{
            throw new Error("Informe o telefone do posto");
        }
    }
    set GerenteId(GERENTE_id){
        if(GERENTE_id!==undefined){
            this.GERENTE_id = GERENTE_id;
        }else{
            throw new Error("Informe o código do gerente do posto");
        }
    }
    set BandeiraId(BANDEIRA_id){
        if(BANDEIRA_id!==undefined){
            this.BANDEIRA_id = BANDEIRA_id;
        }else{
            throw new Error("Informe o código da Bandeira/Fornecedor do posto");
        }
    }
    set Cep(cep){
        if(cep!==undefined && cep!==""){
            this.cep = cep;
        }else{
            throw new Error("Informe o Cep do posto");
        }
    }
    set Numero(numero){
        if(numero!==undefined && numero!==""){
            this.numero = numero;
        }else{
            throw new Error("Informe o número do endereço do posto");
        }
    }
    set Complemento(complemento){
        if(complemento!==undefined && complemento!==""){
            this.complemento = complemento;
        }else{
            throw new Error("Informe ao menos um complemento de endereço para o posto");
        }
    }
   
}

export default Posto;