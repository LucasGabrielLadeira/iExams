import React, { useState, useContext } from "react";
import { StyleSheet, ScrollView, StatusBar, Image, View, Button } from "react-native";
import DateTimePicker from '@react-native-community/datetimepicker';
import DropDownPicker from 'react-native-dropdown-picker';
import {
    LabName,
    Display,
    DataPicker,
    TimePicker,
    PickerText,
    Picker,
    Confirmar,
    ConfirmarText
    } from "./styles";
import firebase from 'firebase'
import 'firebase/firestore'
import Moment from 'moment'

export default function Schedule({ route, navigation }) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'Exame de sangue', value: 'Exame de sangue'},
    {label: 'Teste Covid-19', value: 'Teste Covid-19'},
    {label: 'Teste de gravidez', value: 'Teste de gravidez'},
    {label: 'Exame toxicológico', value: 'Exame toxicológico'}
  ]);
  const [Examtype, setExamtype] = useState();
  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
const{ LabId, Laboratorio } = route.params;
const [Labs, setLabs] = React.useState([]);
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setDate(currentDate);
    setShow(false);
  };
  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };
  const showDatepicker = () => {
    showMode('date');
  };
  const showTimepicker = () => {
    showMode('time');
  };
  const changeType = (currentType) => {
    setExamtype(currentType);
  };
  React.useEffect(() => {
    const fetchData = async () => {
      const db = firebase.firestore();
      const data = await db.collection("Laboratórios").where(firebase.firestore.FieldPath.documentId(), '==', LabId).get();
      setLabs(data.docs.map(doc => ({ ...doc.data(), id: doc.id})));
    };
    fetchData();
  }, []);

  const confirmSchedule = () => {
    Moment.locale('pt-br');
    const db = firebase.firestore();
    db.collection("Exames").add({
        Tipo: value,
        Laboratório: Laboratorio,
        Data: Moment(date.toString()).format('L'),
        Hora: Moment(date.toString()).format('LT'),
    })
    .then((docRef) => {
        console.warn("Exame marcado com sucesso");
    })
    .catch((error) => {
        console.warn("Não foi possível marcar o exame, tente novamente");
    });
  }

return (
      <Display>
        <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = "#FFF" translucent = {false}/>
            {Labs.map(Lab => (
                        Moment.locale('pt-br'),
                        <>
                            <LabName>
                                {Lab.nome}
                            </LabName>
                                <DropDownPicker
                                  open={open}
                                  value={value}
                                  items={items}
                                  setOpen={setOpen}
                                  setValue={setValue}
                                  setItems={setItems}
                                />
                              <DataPicker onPress={showDatepicker}>
                                <PickerText> Selecionar Data: {Moment(date.toString()).format('L') } </PickerText>
                              </DataPicker>
                              <TimePicker onPress={showTimepicker}>
                                <PickerText> Selecionar Hora: {Moment(date.toString()).format('LT')} </PickerText>
                              </TimePicker>
                          {show && (
                            <DateTimePicker
                              testID="dateTimePicker"
                              value={date}
                              mode={mode}
                              is24Hour={true}
                              display="default"
                              onChange={onChange}
                            />
                          )}
                          <Confirmar onPress = {confirmSchedule}>
                            <ConfirmarText>
                                Confirmar
                            </ConfirmarText>
                          </Confirmar>
                        </>
            ))}
      </Display>
  );
}
