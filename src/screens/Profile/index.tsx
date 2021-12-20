import { Button } from '@components/Button';
import { InputProfile } from '@components/InputProfile';
import React from 'react';
import { Container, Box, ContainerButtons } from './styles';

export function Profile() {
  const name = 'Taynara Pecorario';
  const email = 'taynara@gmail.com';
  const password = '12345678';

  return (
    <Container>
      <Box>
        <InputProfile label="Name" value={name} editable={false} />
        <InputProfile label="Email" value={email} editable={false} />
        <InputProfile
          label="Password"
          value={password}
          editable={false}
          secureTextEntry={true}
        />
      </Box>
      <ContainerButtons>
        <Button
          type="edit"
          title="Edit"
          onPress={() => alert('Edit')}
          color="#B5C401"
        />
      </ContainerButtons>
    </Container>
  );
}
