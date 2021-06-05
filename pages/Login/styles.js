import React from "react";
import styled from "styled-components/native";


export const Display = styled.View`
    width: 100%;
    height: 100%;
    flex: 1;
    align-items:center;
`;

export const InputLogin = styled.TextInput`
  color: #111;
  font-size: 18px;
  border: 1px solid #ccc;
  height: 65px;
  border-radius: 5px;
  padding: 0px 20px;
  margin-top: 5px;
  width: 100%;
`;

export const InputSenha = styled.TextInput`
  color: #111;
  font-size: 18px;
  border: 1px solid #ccc;
  height: 65px;
  border-radius: 5px;
  padding: 0px 20px;
  margin-top: 5px;
  width: 100%
`;


export const LoginForm = styled.View`
    height: 100%;
    width: 80%;
    flex: 1;
    align-items:center;
    justifyContent: space-evenly;
`;

export const LoginField = styled.View`
    width: 100%
    align-items:center;
`;

export const Logo = styled.Text`
    fontSize: 42px;
`;

export const Icons = styled.View`
  width: 100%;
  flex-direction:row;
  align-items:center;
  justify-content: space-around;
  marginTop: 30px;
  marginBottom: 30px;
`;

export const Button = styled.TouchableOpacity`
  align-items:center;
  justify-content:center;
  height:60px;
  width:49%;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin: 0px 5px;
`;

export const ButtonText = styled.Text`
    fontSize: 10px;
`;

export const Buttons = styled.View`
    width = 100%;
    flexDirection: row;
    justifyContent: space-between;

`;

export const LoginRemember = styled.Text`
    fontSize: 16px;
    border-bottom-width:1px;
      border-bottom-color: #ccc;
`;