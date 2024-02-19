import { ReactNode } from 'react';
import { Text } from 'react-native';

import { Container } from './styles';

interface MainContainerProps {
  children: ReactNode;
}

export function MainContainer({ children }: MainContainerProps) {
  return (
    <Container>
      <Text>MainContainer</Text>
      {children}
    </Container>
  );
}
