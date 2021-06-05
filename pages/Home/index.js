import React, { useState, useContext } from "react";
import { StyleSheet, ScrollView, StatusBar, Image, View, TouchableOpacity} from "react-native";
import {
    Homescreen,
    Logo,
    Display,
    LabList,
    LabBox,
    LabName,
    LabInfos,
    LabEnd,
    LabTel,
    Texto
    } from "./styles";
import firebase from 'firebase'
import 'firebase/firestore'

export default function Home({navigation}) {
const [Labs, setLabs] = React.useState([]);

  React.useEffect(() => {
    const fetchData = async () => {
      const db = firebase.firestore();
      const data = await db.collection("Laboratórios").get();
      setLabs(data.docs.map(doc => ({ ...doc.data(), id: doc.id})));
    };
    fetchData();
  }, []);

return (
      <Display>
        <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = "#FFF" translucent = {false}/>
            <Homescreen>
                <Logo>iExams</Logo>
                <Texto>Laboratórios disponíveis:</Texto>
                <ScrollView>
                    <LabList>
                        {Labs.map(Lab => (
                            <LabBox Key = {Lab.id} >
                                <TouchableOpacity onPress = {() => navigation.push('Schedule', {LabId : Lab.id, Laboratorio: Lab.nome})} >
                                    <LabName>
                                        {Lab.nome}
                                    </LabName>
                                    <LabInfos>
                                        <LabEnd>
                                            {Lab.endereço}
                                        </LabEnd>
                                        <LabTel>
                                            {Lab.telefone}
                                        </LabTel>
                                    </LabInfos>
                                </TouchableOpacity>
                            </LabBox>
                        ))}
                    </LabList>
                </ScrollView>
            </Homescreen>
      </Display>
  );
}
