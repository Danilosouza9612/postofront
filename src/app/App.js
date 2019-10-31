import React from 'react';
import AsideBtn from './asideBtn';
import NovoAbastecimento from './mainComponents/abastecertela/abastecer';
import Inicio from './mainComponents/iniciotela/inicio';
import AbastecerBomba from "./mainComponents/abastecerbombatela/abastecerbomba";
import BombasTabela from "./mainComponents/bombastela/bombastabela";
import QtdAbastecimento from "./mainComponents/qtdabastecimentotela/qtdabastecimento";
import ClienteAssiduo from "./mainComponents/clienteassiduotela/clienteassiduo";
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
        </header>
        <aside>
          <div>
            <AsideBtn text="Início" onClick={()=>this.setState({mainState : <Inicio/>})}/>
            <AsideBtn text="Abastecer" onClick={()=>this.setState({mainState : <NovoAbastecimento/>})}/>
            <AsideBtn text="Abastecer Bomba" onClick={()=>this.setState({mainState : <AbastecerBomba/>})} />
            <AsideBtn text="Levantar Faturamento"/>
            <AsideBtn text="Bombas de combustível" onClick={()=>this.setState({mainState : <BombasTabela/>})}/>
            <AsideBtn text="Abastecimentos" onClick={()=>this.setState({mainState: <QtdAbastecimento/>})}/>
            <AsideBtn text="Clientes mais assíduos" onClick={()=>this.setState({mainState : <ClienteAssiduo/>})}/>
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
