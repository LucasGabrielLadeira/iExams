import React, { useState, useContext } from "react";
import { StyleSheet, ScrollView, StatusBar, Image, View, TouchableOpacity} from "react-native";
import {
    Logo,
    Display,
    Homescreen,
    ExamsList,
    ExamBox,
    ExamLab,
    ExamInfos,
    ExamDate,
    ExamHour,
    ExamType,
    Texto,
    } from "./styles";
import firebase from 'firebase'
import 'firebase/firestore'

export default function Exams() {
const [Exams, setExams] = React.useState([]);

  React.useEffect(() => {
    const fetchData = async () => {
      const db = firebase.firestore();
      const data = await db.collection("Exames").get();
      setExams(data.docs.map(doc => ({ ...doc.data(), id: doc.id})));
    };
    fetchData();
  }, []);

return (
      <Display>
        <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = "#FFF" translucent = {false}/>
            <Homescreen>
                <Logo>iExams</Logo>
                <Texto>Exames Marcados:</Texto>
                <ScrollView>
                    <ExamsList>
                        {Exams.map(Exams => (
                            <ExamBox Key = {Exams.id} >
                                    <ExamLab>
                                        {Exams.Laboratório}
                                    </ExamLab>
                                    <ExamInfos>
                                        <ExamType>
                                            {Exams.Tipo}
                                        </ExamType>
                                        <ExamDate>
                                            {Exams.Data}
                                        </ExamDate>
                                        <ExamHour>
                                            {Exams.Hora}
                                        </ExamHour>
                                    </ExamInfos>
                            </ExamBox>
                        ))}
                    </ExamsList>
                </ScrollView>
            </Homescreen>
      </Display>
  );
}
