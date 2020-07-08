import React from 'react';
import { Image } from 'react-native';

import Input from '../../components/Input';
import Button from '../../components/Button';
import logoImg from '../../assets/logo.png';

import * as S from './styles';

const SignIn: React.FC = () => (
  <S.Container>
    <Image source={logoImg} />
    <S.Title>Faça o seu logon</S.Title>

    <Input name="email" icon="mail" placeholder="E-mail" />
    <Input name="password" icon="lock" placeholder="Senha" />

    <Button onPress={() => console.log('clicado')}>Entrar</Button>
  </S.Container>
);

export default SignIn;
