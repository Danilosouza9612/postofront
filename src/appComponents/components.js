import React from "react";
import "./components.css";
import { readToken } from '../gerente/mainComponents/login/loginVerify';


export class AlertaPostosQtdInferior extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            bombasQtdInferior : true,
            visibleContainer : null
        }
    }
    bombaQtdInferiorContainer = function(data){
        let st = this.state;
        if(data==0){
            st.bombasQtdInferior = false;
            st.qtdInferior = data;
            st.visibleContainer = null;
        }else{
            st.bombasQtdInferior = true;
            st.qtdInferior = data;
            st.visibleContainer = this.renderContainer();
        }

        this.setState(st);
    }
    verificarBombas = function(){
        fetch("http://localhost:8080/bomba/query06?token="+readToken(), {method : "GET"})
        .then((response)=>response.text())
        .then((num)=>{this.bombaQtdInferiorContainer(num)})
        .catch((e)=>{window.alert(e)});
    }   
    componentWillMount(){
        this.verificarBombasInterval();
    }
    verificarBombasInterval(){
        let st = this.state;
        this.verificarBombas();
        st.qtdInterval = setInterval(()=>{
            this.verificarBombas()
        }, 5000);
        this.setState(st);
    }
    clearBombasInterval(){
        let st = this.state;
        clearInterval(st.qtdInterval);
        this.setState(st);
        this.verificarBombasInterval();
    }
    renderContainer(){
        return(
            <div className="alert-context" id="bombasQtdInferior">
                <p>Há {this.state.qtdInferior} bombas de combustíveis com quantidade inferior a 100 litros!</p>
            </div>
        );
    }
    render(){
        return(
            <div>
                {this.state.visibleContainer}
            </div>
        );
    }
}

export default AlertaPostosQtdInferior;