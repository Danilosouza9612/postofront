import React from 'react';
import AsideBtn from './asideBtn';
import NovoAbastecimento from './mainComponents/abastecertela/abastecer';
import Inicio from './mainComponents/iniciotela/inicio';
import AbastecerBomba from "./mainComponents/abastecerbombatela/abastecerbomba";
import BombasTabela from "./mainComponents/bombastela/bombastabela";
import FaturamentoTela from "./mainComponents/faturamentotela/faturamento";
import QtdAbastecimento from "./mainComponents/qtdabastecimentotela/qtdabastecimento";
import AbastecimentoDia from "./mainComponents/abastecimentosdia/abastecimentosdiatela";
import ClienteAssiduo from "./mainComponents/clienteassiduotela/clienteassiduo";
import NovoPosto from './mainComponents/novopostotela/novoposto';
import AlertaPostosQtdInferior from "../appComponents/components";
import AbastecimentosBombaMes from "./mainComponents/abastecimentosbombames/abastecimentosbombames";
import './App.css';
import './mainComponents/main.css';


class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      mainState : <Inicio/>,
    }
    this.alertBombas = React.createRef();
  }
  renderAlertaPostosQtdInf(){
    if(!this.props.dono){
      return (<AlertaPostosQtdInferior ref={this.alertBombas}/>);
    }
  }
  renderHeadSubTitle(){
    if(this.props.dono){
      return (<p>Dono</p>);
    }else{
      return (<p>Gerente</p>);
    }
  }
  renderMenuItems(){
    if(!this.props.dono){
      return (
        <div>
            <AsideBtn text="Início" onClick={()=>this.setState({mainState : <Inicio/>})}/>
            <AsideBtn text="Abastecer" onClick={()=>this.setState({mainState : <NovoAbastecimento onAbastecimento={()=>{this.alertBombas.current.clearBombasInterval()}}/>})}/>
            <AsideBtn text="Abastecer Bomba" onClick={()=>this.setState({mainState : <AbastecerBomba onInsertAbastecimentoBomba={()=>{this.alertBombas.current.clearBombasInterval()}}/>})} />
            <AsideBtn text="Abastecimentos do Dia" onClick={()=>this.setState({mainState : <AbastecimentoDia/>})}/>
            <AsideBtn text="Bombas de combustível" onClick={()=>this.setState({mainState : <BombasTabela/>})}/>
            <AsideBtn text="Abastecimentos" onClick={()=>this.setState({mainState: <QtdAbastecimento/>})}/>
            <AsideBtn text="Abastecimentos de Bomba" onClick={()=>this.setState({mainState: <AbastecimentosBombaMes/>})}/>
        </div>
      );
    }else{
      return(
        <div>
            <AsideBtn text="Início" onClick={()=>this.setState({mainState : <Inicio/>})}/>
            <AsideBtn text="Clientes mais assíduos" onClick={()=>this.setState({mainState : <ClienteAssiduo/>})}/>
            <AsideBtn text="Faturamento" onClick={()=>this.setState({mainState : <FaturamentoTela/>})}/>
            <AsideBtn text="Cadastrar Posto" onClick={()=>this.setState({mainState : <NovoPosto/>})}/>
        </div>
      );
    }
  }
  render(){
    return (
      <div className="container">
        <header>
          <h1>MeuPosto</h1>
          {this.renderHeadSubTitle()}
        </header>
        <div className="alert">
          {this.renderAlertaPostosQtdInf()}
        </div>
        <aside>
          {this.renderMenuItems()}
        </aside>
        <main>
          {this.state.mainState}
        </main>
      </div>
    );
  }
}

export default App;
