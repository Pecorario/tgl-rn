import { Button } from '@components/Button';
import { InputProfile } from '@components/InputProfile';
import React, { useState } from 'react';
import { Container, Box, ContainerButtons } from './styles';

export function Profile() {
  const [isEdit, setIsEdit] = useState(false);
  const [name, setName] = useState('Taynara Pecorario');
  const [email, setEmail] = useState('taynara@gmail.com');
  const [password, setPassword] = useState('12345678');

  const saveEditHandler = () => {
    alert('Saved');
    setIsEdit(false);
  };

  const cancelEditHandler = () => {
    alert('Canceled');
    setIsEdit(false);
  };

  const editHandler = () => {
    alert('Edit');
    setIsEdit(true);
  };

  return (
    <Container>
      {isEdit ? (
        <>
          <Box>
            <InputProfile
              label="Name"
              value={name}
              onChangeText={setName}
              editable={true}
            />
            <InputProfile
              label="Email"
              value={email}
              onChangeText={setEmail}
              editable={true}
            />
            <InputProfile
              label="Password"
              value={password}
              onChangeText={setPassword}
              secureTextEntry={true}
              editable={true}
            />
          </Box>
          <ContainerButtons>
            <Button
              type="default"
              title="Cancel"
              onPress={cancelEditHandler}
              color="#707070"
            />
            <Button
              type="save"
              title="Save"
              onPress={saveEditHandler}
              color="#B5C401"
            />
          </ContainerButtons>
        </>
      ) : (
        <>
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
              onPress={editHandler}
              color="#B5C401"
            />
          </ContainerButtons>
        </>
      )}
    </Container>
  );
}
