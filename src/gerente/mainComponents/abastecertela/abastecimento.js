class Abastecimento{
    
    constructor(form){
        this.Cpf = form.cpf;
        this.BombaId = form.bombaId;
        this.Data = form.data;
        this.QtdLitros = form.qtdLitros;
        this.Nome = form.nome;
        this.Hora = form.hora;
    }

    get Cpf(){
        return this.cpf;
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
    get NomeCliente(){
        return this.nome;
    }
    set Cpf(cpf){
        if(cpf===undefined){
            this.cpf=null;
        }else{
            this.cpf=cpf;
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
    set Hora(hora){
        if(hora!==undefined){
            this.hora = hora;
        }else{
            throw new Error("Informe a hora");
        }
    }
    get Hora(){
        return this.hora;
    }
    set QtdLitros(qtdLitros){
        if(qtdLitros!==undefined && qtdLitros!==""){
            this.qtdLitros = qtdLitros;
        }else{
            throw new Error("Informe a quantidade de litros");
        }
    }
    set Nome(nome){
        if(nome===undefined){
            this.nome=null;
        }else{
            this.nome=nome;
        }
    }
}

export default Abastecimento;