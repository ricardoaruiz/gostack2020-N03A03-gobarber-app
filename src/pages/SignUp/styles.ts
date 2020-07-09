import styled from 'styled-components/native';
import { Platform } from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import { getBottomSpace } from 'react-native-iphone-x-helper';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 0 30px ${Platform.OS === 'ios' ? 40 : 150}px;
`;

export const Title = styled.Text`
  font-size: 24px;
  color: #f4ede8;
  font-family: 'RobotoSlab-Medium';
  margin: 64px 0 24px;
`;

export const BackToSigninButton = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  flex-direction: row;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 16px 0 ${16 + getBottomSpace()}px;
  background: #312e38;
  border-top-width: 1px;
  border-color: #232129;
`;

export const BackToSigninText = styled.Text`
  color: #fff;
  font-family: 'RobotoSlab-Regular';
  font-size: 16px;
`;

export const CreateAccountIcon = styled(FeatherIcon)`
  color: #fff;
  margin-right: 16px;
`;
