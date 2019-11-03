import React from "react";
import "./avisoBomba.css";

export const AvisoBomba = function(props){
    return(
        <div className="avisoBomba">
            <span>Há bombas com quantidade inferior a 100 litros!</span>
        </div>
    );
}

export default AvisoBomba;