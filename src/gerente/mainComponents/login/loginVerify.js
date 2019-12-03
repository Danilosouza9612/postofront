import React from 'react';
import { bake_cookie, read_cookie, delete_cookie } from 'sfcookies';
import { Redirect } from 'react-router-dom'

const cookieName = 'loginToken';

export function readToken(){
    return read_cookie(cookieName);
}
export function IsItNoLogged(){
    if(readToken()==''){
        return <Redirect to="/gerente/login"/>
    }
}
export function isItLogged(){
    if(readToken()!=''){
        return <Redirect to="/gerente/"/>
    }
}
export function deleteToken(){
    delete_cookie(cookieName);
    return <Redirect to="/gerente/login"/>
}
export function insertToken(token){
    bake_cookie(cookieName, token);
}