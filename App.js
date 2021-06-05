import React from 'react';
import { Text , View} from 'react-native';
import UsuarioProvider from './context/usuario';
import Routes from './routes';
import './services/firebase';

export default function App(){
    return(
        <UsuarioProvider>
            <Routes/>
        </UsuarioProvider>
    );
}