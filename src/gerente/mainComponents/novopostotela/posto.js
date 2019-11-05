class Posto{

    constructor(form){
        this.Cnpj = form.cnpj;
        this.RazaoSocial = form.razao_social;
        this.NomeFantasia = form.nome_fantasia;
        this.Telefone = form.telefone;
        this.GerenteCpf = form.GERENTE_id;
        this.BandeiraId = form.BANDEIRA_id;
        this.Cep = form.cep;
        this.Numero = form.numero;
        this.Complemento = form.complemento;
    }

    get Cnpj(){
        return this.cnpj;
    }
    get RazaoSocial(){
        return this.razaoSocial;
    }
    get NomeFantasia(){
        return this.nomeFantasia;
    }
    get Telefone(){
        return this.telefone;
    }
    get GerenteCpf(){
        return this.gerenteCpf;
    }
    get BandeiraId(){
        return this.bandeiraId;
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
        if(razao_social!==undefined && razao_social!==""){
            this.razaoSocial = razao_social;
        }else{
            throw new Error("Informe a razão social do posto");
        }
    }
    set NomeFantasia(nome_fantasia){
        if(nome_fantasia!==undefined && nome_fantasia!==""){
            this.nomeFantasia = nome_fantasia;
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
    set GerenteCpf(gerenteCpf){
        if(gerenteCpf!==undefined){
            this.gerenteCpf = gerenteCpf;
        }else{
            throw new Error("Informe o código do gerente do posto");
        }
    }
    set BandeiraId(bandeiraId){
        if(bandeiraId!==undefined && bandeiraId!=="undefined"){
            this.bandeiraId = bandeiraId;
        }else{
            this.bandeiraId = null;
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