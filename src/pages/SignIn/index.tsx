import React from 'react';
import {
  Image,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';

import Input from '../../components/Input';
import Button from '../../components/Button';
import logoImg from '../../assets/logo.png';

import * as S from './styles';

const SignIn: React.FC = () => (
  <>
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      enabled
    >
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{ flex: 1 }}
      >
        <S.Container>
          <Image source={logoImg} />
          <S.Title>Faça o seu logon</S.Title>

          <Input name="email" icon="mail" placeholder="E-mail" />
          <Input name="password" icon="lock" placeholder="Senha" />

          <Button onPress={() => console.log('clicado')}>Entrar</Button>

          <S.ForgotButton
            onPress={() => {
              console.log('forgot');
            }}
          >
            <S.ForgotText>Esqueci a minha senha</S.ForgotText>
          </S.ForgotButton>
        </S.Container>
      </ScrollView>
    </KeyboardAvoidingView>

    <S.CreateAccountButton>
      <S.CreateAccountIcon name="log-in" size={20} />
      <S.CreateAccountText>Criar uma conta</S.CreateAccountText>
    </S.CreateAccountButton>
  </>
);

export default SignIn;
