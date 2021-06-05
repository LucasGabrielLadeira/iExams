import React from "react";
import styled from "styled-components/native";


export const Display = styled.View`
    width: 100%;
    height: 100%;
    flex: 1;
    align-items:center;
`;
export const Texto = styled.Text`
    fontSize: 18px;
    margin: 10px 10px 20px 0px;
`;

export const Logo = styled.Text`
    fontSize: 42px;
    justify-content:center;
    align-self:center;
    margin: 25px
`;

export const Homescreen = styled.View`
    flex:1;
`;

export const LabList = styled.View`
    flex:1;
    width: 90%;
    align-self:center;
`;
export const LabBox = styled.View`
    flex:1;
    justify-content:space-between;
    background-color: #59E5F7;
    width: 100%;
    padding: 10px;
    border-radius: 20px;
    margin: 10px 0px 10px 0px;
`;
export const LabName = styled.Text`
    fontSize: 20px;
`;
export const LabInfos = styled.View`
    flex:1
`;
export const LabEnd = styled.Text`
    fontSize: 14px;
`;
export const LabTel = styled.Text`
    fontSize: 14px;
`;