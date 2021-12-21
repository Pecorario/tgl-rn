import React, { useState } from 'react';
import { Keyboard, TouchableWithoutFeedback } from 'react-native';
import { useTheme } from 'styled-components';
import { Button, InputProfile } from '@components/index';

import { Container, Box, ContainerButtons } from './styles';

export function Profile() {
  const [isEdit, setIsEdit] = useState(false);
  const [name, setName] = useState('Taynara Pecorario');
  const [email, setEmail] = useState('taynara@gmail.com');
  const [password, setPassword] = useState('12345678');

  const theme = useTheme();

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
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Container>
        {isEdit ? (
          <>
            <Box>
              <InputProfile
                placeholder="Name"
                value={name}
                onChangeText={setName}
                editable={true}
              />
              <InputProfile
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                editable={true}
              />
              <InputProfile
                placeholder="Password"
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
                color={theme.colors.text_title}
              />
              <Button
                type="save"
                title="Save"
                onPress={saveEditHandler}
                color={theme.colors.primary}
              />
            </ContainerButtons>
          </>
        ) : (
          <>
            <Box>
              <InputProfile placeholder="Name" value={name} editable={false} />
              <InputProfile
                placeholder="Email"
                value={email}
                editable={false}
              />
              <InputProfile
                placeholder="Password"
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
                color={theme.colors.primary}
              />
            </ContainerButtons>
          </>
        )}
      </Container>
    </TouchableWithoutFeedback>
  );
}
