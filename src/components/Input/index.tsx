import React, { useEffect, useRef } from 'react';
import { TextInputProperties } from 'react-native';
import { useField } from '@unform/core';

import * as S from './style';

interface InputProps extends TextInputProperties {
  name: string;
  icon: string;
}

interface InputValueReference {
  value: string;
}

const Input: React.FC<InputProps> = ({ name, icon, ...rest }: InputProps) => {
  const { fieldName, defaultValue, registerField, error } = useField(name);

  const inputElementRef = useRef<any>(null);
  const inputValueRef = useRef<InputValueReference>({ value: defaultValue });

  useEffect(() => {
    registerField<string>({
      name: fieldName,
      ref: inputValueRef.current,
      path: 'value',
      setValue: (ref: any, value: string) => {
        inputValueRef.current.value = value;
        inputElementRef.current.setNativeProps({ text: value });
      },
      clearValue: () => {
        inputValueRef.current.value = '';
        inputElementRef.current.clear();
      },
    });
  }, [fieldName, registerField]);

  return (
    <S.Container>
      <S.Icon name={icon} size={20} color="#666360" />
      <S.TextInput
        ref={inputElementRef}
        placeholderTextColor="#666360"
        defaultValue={defaultValue}
        onChangeText={value => {
          inputValueRef.current.value = value;
        }}
        {...rest}
      />
    </S.Container>
  );
};

export default Input;
