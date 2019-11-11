import React from "react";
import App from "./gerente/App";
import "./user.css";

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
                        <h1>meuPosto</h1>
                    </div>
                    <div>
                        <div className="btn" onClick={()=>{this.setState({main : <App dono={true}/>})}}>Sou Dono</div>
                        <div className="btn" onClick={()=>{this.setState({main : <App dono={false}/>})}}>Sou Gerente</div>
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