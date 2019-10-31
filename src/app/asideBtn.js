import React from 'react';

export const AsideBtn = function(props){
    return(
        <div className="asideBtn" onClick={props.onClick}>
        {props.text}
        </div>
    );
}

export default AsideBtn;