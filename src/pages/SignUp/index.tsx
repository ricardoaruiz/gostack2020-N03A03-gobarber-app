import React from 'react';
import {
  Image,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Input from '../../components/Input';
import Button from '../../components/Button';
import logoImg from '../../assets/logo.png';

import * as S from './styles';

const SignUp: React.FC = () => {
  const navigation = useNavigation();
  return (
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
            <S.Title>Crie a sua conta</S.Title>

            <Input name="name" icon="user" placeholder="Nome" />
            <Input name="email" icon="mail" placeholder="E-mail" />
            <Input name="password" icon="lock" placeholder="Senha" />

            <Button onPress={() => console.log('clicado')}>Entrar</Button>
          </S.Container>
        </ScrollView>
      </KeyboardAvoidingView>

      <S.BackToSigninButton onPress={() => navigation.goBack()}>
        <S.CreateAccountIcon name="arrow-left" size={20} />
        <S.BackToSigninText>Voltar para logon</S.BackToSigninText>
      </S.BackToSigninButton>
    </>
  );
};

export default SignUp;
