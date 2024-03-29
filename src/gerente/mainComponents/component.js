import React from 'react'

export const InputComponent = function(props){
    return (
        <div>
            <label for={props.name}>{props.text}</label>
            <input type={props.type} name={props.name} id={props.name} value={props.value} onChange={props.onChange}></input>
        </div>
    );
}
export const OptionComponent = function(props){
    const items = props.options;
    const opcoes = items.map((op) => 
    {
        return <option value={op.id}>{op.nome}</option>
    });

    return (
        <div>
            <label for={props.name}>{props.text}</label>
            <select name={props.name} id={props.name} onChange={props.onChange}>
                <option value="undefined">Selecione um Valor</option>
                {opcoes}
            </select>
        </div>
    );
}

export default InputComponent;