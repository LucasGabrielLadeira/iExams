import React, { useState, useContext } from "react";
import { StyleSheet, ScrollView, StatusBar, Image, View } from "react-native";
import {
    LoginForm,
    Logo,
    InputLogin,
    InputSenha,
    Icons,
    Button,
    ButtonText,
    LoginRemember,
    Display,
    Buttons,
    LoginField
    } from "./styles";

import {UsuarioContext} from "../../context/usuario";

const styles = StyleSheet.create({
  LogoSN: {
    width: 50,
    height: 50,
  },
});

export default function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {SignIn, SignUp} = useContext(UsuarioContext)

  function handleSignIn(){
      try{
        SignIn(email, password)
              setUser(userState)
      }catch(err){

      }
  }

  function handleSignUp(){
      try{
        SignUp(email, password)
              setUser(userState)
      }catch(err){

      }
  }

  return (
      <Display>
        <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = "#FFF" translucent = {false}/>
            <LoginForm>
                <Logo>iExams</Logo>
                <LoginField>
                    <InputLogin
                    placeholder="Digite seu email"
                    onChangeText={text => setEmail(text)}
                    value={email}
                    />
                    <InputSenha
                    placeholder="Digite sua senha"
                    secureTextEntry={true}
                    onChangeText={text => setPassword(text)}
                    value={password}
                    />
                </LoginField>
                <Buttons>
                    <Button>
                        <ButtonText onPress={() => { handleSignIn() }}>
                            Entrar
                        </ButtonText>
                    </Button>
                    <Button>
                        <ButtonText onPress={() => { handleSignUp() }}>
                            Cadastre-se
                        </ButtonText>
                    </Button>
                </Buttons>
                <Icons>
                      <View>
                          <Image
                            style={styles.LogoSN}
                            source={require('../../assets/google.png')}
                          />
                      </View>
                      <View>
                          <Image
                            style={styles.LogoSN}
                            source={require('../../assets/twitter.png')}
                          />
                      </View>
                      <View>
                          <Image
                            style={styles.LogoSN}
                            source={require('../../assets/lfacebook.png')}
                          />
                      </View>
                </Icons>
                <LoginRemember>
                    Esqueci minha senha
                </LoginRemember>

            </LoginForm>
      </Display>
  );
}
