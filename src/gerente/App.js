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
import { Link } from 'react-router-dom'
import './App.css';
import './mainComponents/main.css';
import AbastecimentoBomba from './mainComponents/abastecerbombatela/abastecimentobomba';


class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      mainState : undefined
    }
    this.alertBombas = React.createRef();
  }
  componentDidMount(){
    this.listComponents = {
      inicio : <Inicio/>,
      abastecer : <NovoAbastecimento onAbastecimento={()=>{this.alertBombas.current.clearBombasInterval()}}/>,
      abastecerBomba : <AbastecerBomba onInsertAbastecimentoBomba={()=>{this.alertBombas.current.clearBombasInterval()}}/>,
      bombasTabela : <BombasTabela/>,
      abastecimentoDia : <AbastecimentoDia/>,
      qtdAbastecimento : <AbastecimentoDia/>,
      abastecimentoBombaMes : <AbastecimentosBombaMes/>,
      inicioDono : <Inicio/>,
      clienteAssiduos : <ClienteAssiduo/>,
      telaFaturamento : <FaturamentoTela/>,
      novoPosto : <NovoPosto/>
    }
    this.setState({mainState : this.listComponents[this.props.component]})
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
            <Link className="routerLink" to="/gerente/" onClick={()=>this.setState({mainState : this.listComponents.inicio})}>
              <AsideBtn text="Início"/>
            </Link>
            <Link className="routerLink" to="/gerente/abastecer" onClick={()=>this.setState({mainState : this.listComponents.abastecer})}>
              <AsideBtn text="Abastecer"/>
            </Link>
            <Link className="routerLink" to="/gerente/abastecerbomba" onClick={()=>this.setState({mainState : this.listComponents.abastecerBomba})}>
              <AsideBtn text="Abastecer Bomba"/>
            </Link>
            <Link className="routerLink" to="/gerente/abastecimentosdia" onClick={()=>this.setState({mainState : this.listComponents.abastecimentoDia})}>
              <AsideBtn text="Abastecimentos do Dia"/>
            </Link>
            <Link className="routerLink" to="/gerente/bombascombustivel" onClick={()=>this.setState({mainState : this.listComponents.bombasTabela})}>
              <AsideBtn text="Bombas de combustível"/>
            </Link>
            <Link className="routerLink" to="/gerente/abastecimentos" onClick={()=>this.setState({mainState : this.listComponents.qtdAbastecimento})}>
              <AsideBtn text="Abastecimentos"/>
            </Link>
            <Link className="routerLink" to="/gerente/abastecimentosbomba" onClick={()=>this.setState({mainState : this.listComponents.abastecimentoBombaMes})} >
              <AsideBtn text="Abastecimentos de Bomba"/>
            </Link>
        </div>
      );
    }else{
      return(
        <div>
            <Link className="routerLink" to="/dono/" onClick={()=>this.setState({mainState : this.listComponents.inicioDono})}>
              <AsideBtn text="Início"/>
            </Link>
            <Link className="routerLink" to="/dono/clientesassiduos" onClick={()=>this.setState({mainState : this.listComponents.clienteAssiduos})}>
              <AsideBtn text="Clientes mais assíduos"/>
            </Link>
            <Link className="routerLink" to="/dono/faturamento" onClick={()=>this.setState({mainState : this.listComponents.telaFaturamento})}>
              <AsideBtn text="Faturamento"/>
            </Link>
            <Link className="routerLink" to="/dono/novoposto" onClick={()=>this.setState({mainState : this.listComponents.novoPosto})}>
              <AsideBtn text="Cadastrar Posto"/>
            </Link>
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
