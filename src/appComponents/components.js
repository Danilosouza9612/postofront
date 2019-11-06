import React from "react";
import "./components.css";

export class AlertaPostosQtdInferior extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            bombasQtdInferior : true,
            qtdInferior : 0,
            visibleContainer : null
        }
    }
    bombaQtdInferiorContainer = function(data){
        if(data==0){
            this.setState(
                {
                    bombasQtdInferior : false,
                    visibleContainer : null
                }
            );
        }else{
            console.log(data);
            this.setState(
                {
                    bombasQtdInferior : true,
                    qtdInferior : data,
                    visibleContainer : this.renderContainer()
                }
            );
        }
    }
    verificarBombas = function(){
        fetch("http://localhost:8080/bomba/query06?id=1", {method : "GET"})
        .then((response)=>response.text())
        .then((num)=>{this.bombaQtdInferiorContainer(num)})
        .catch((e)=>{window.alert(e)});
    }   
    componentDidMount(){
        this.verificarBombas();
        setInterval(()=>{
            this.verificarBombas()
        }, 5000);
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