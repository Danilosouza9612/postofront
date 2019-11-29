import React from "react";
import App from "./gerente/App";
import "./user.css";
import { Link } from 'react-router-dom'

class User extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            main : this.renderMain()
        }
    }
    renderMain(){
        return(
            <div id="selectUser">
                <div id="selectContainer">
                    <div>
                        <h1>Meu Posto</h1>
                    </div>
                    <div>
                        <Link className="btn" to="/dono">Sou Dono</Link>
                        <Link className="btn" to="/gerente">Sou Gerente</Link>
                    </div>
                </div>
            </div>
        );
    }
    render(){
        return(this.state.main)
    }
}
export default User;