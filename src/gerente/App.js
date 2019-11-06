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
import './App.css';
import './mainComponents/main.css';


class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      mainState : <Inicio/>
    }
  }
  render(){
    return (
      <div className="container">
        <header>
          <h1>MeuPosto</h1>
          <p>Gerente</p>
        </header>
        <div className="alert">
          <AlertaPostosQtdInferior/>
        </div>
        <aside>
          <div>
            <AsideBtn text="Início" onClick={()=>this.setState({mainState : <Inicio/>})}/>
            <AsideBtn text="Abastecer" onClick={()=>this.setState({mainState : <NovoAbastecimento/>})}/>
            <AsideBtn text="Abastecer Bomba" onClick={()=>this.setState({mainState : <AbastecerBomba/>})} />
            <AsideBtn text="Abastecimentos do Dia" onClick={()=>this.setState({mainState : <AbastecimentoDia/>})}/>
            <AsideBtn text="Bombas de combustível" onClick={()=>this.setState({mainState : <BombasTabela/>})}/>
            <AsideBtn text="Abastecimentos" onClick={()=>this.setState({mainState: <QtdAbastecimento/>})}/>
            <AsideBtn text="Clientes mais assíduos" onClick={()=>this.setState({mainState : <ClienteAssiduo/>})}/>
            <AsideBtn text="Faturamento" onClick={()=>this.setState({mainState : <FaturamentoTela/>})}/>
            <AsideBtn text="Cadastrar Posto" onClick={()=>this.setState({mainState : <NovoPosto/>})}/>
          </div>
        </aside>
        <main>
          {this.state.mainState}
        </main>
      </div>
    );
  }
}

export default App;
