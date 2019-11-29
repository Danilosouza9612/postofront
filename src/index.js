import React from 'react';
import ReactDOM from 'react-dom';
import User from './user';
import App from './gerente/App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

ReactDOM.render(
<BrowserRouter>
    <Switch>
        <Route path="/" exact={true} component={User} />
        <Route path="/gerente" exact={true} component={()=><App dono={false} component="inicio"/>} />
        <Route path="/gerente/abastecer" component={()=><App dono={false} component="abastecer" />} />
        <Route path="/gerente/abastecerbomba" component={()=><App dono={false} component="abastecerBomba" />} />
        <Route path="/gerente/abastecimentosdia" component={()=><App dono={false} component="abastecimentoDia"/>} />
        <Route path="/gerente/bombascombustivel" component={()=><App dono={false} component="bombasTabela"/>} />
        <Route path="/gerente/abastecimentos" component={()=><App dono={false} component="qtdAbastecimento"/>} />
        <Route path="/gerente/abastecimentosbomba" component={()=><App dono={false} component="abastecimentoBombaMes"/>} />
        <Route path="/dono" exact={true} component={()=><App dono={true} component="inicioDono"/>} />
        <Route path="/dono/clientesassiduos" component={()=><App dono={true} component="clienteAssiduos"/>} />
        <Route path="/dono/faturamento" component={()=><App dono={true} component="telaFaturamento"/>} />
        <Route path="/dono/novoposto" component={()=><App dono={true} component="novoPosto"/>} />
    </Switch>
</BrowserRouter>,
document.getElementById("root"));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
