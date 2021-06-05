import React from "react";
import styled from "styled-components/native";


export const Display = styled.View`
    width: 95%;
    height: 100%;
    flex: 1;
    align-self:center;
    alignContent: center;
    justify-content: space-between
`;

export const LabName = styled.Text`
    fontSize: 36px;
    align-self:center;
`
export const DataPicker = styled.TouchableOpacity`
    padding: 7px 7px 7px 0px;
    border: 1.5px solid #000;
`

export const TimePicker = styled.TouchableOpacity`
    padding: 7px 7px 7px 0px;
    border: 1.5px solid #000;
`
export const PickerText = styled.Text`
    fontSize: 18px;
`
export const Picker = styled.View`
    height:150px;
    width:100%;
`

export const Confirmar = styled.TouchableOpacity`
    padding: 10px 20px 10px 20px;
    alignContent:center;
    border-radius: 7px;
    max-width: 30%;
    background-color: #3262a8
    align-self: center;
    margin-bottom: 10px;
`

export const ConfirmarText = styled.Text`
    fontSize: 16px;
    color: #fff;
`

