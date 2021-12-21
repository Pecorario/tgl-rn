import React from 'react';
import { FlatList } from 'react-native';
import { useTheme } from 'styled-components';

import { GameButton, Button, NumberButton } from '@components/index';

import {
  Container,
  TitleContainer,
  TitleStrong,
  TitleLight,
  FiltersContainer,
  TitleGame,
  TextGame,
  ButtonsContainer,
  List
} from './styles';

export function NewBet() {
  const theme = useTheme();

  const game = {
    title: 'Mega-Sena',
    description:
      'Fill your bet Mark as many numbers as you want up to a maximum of 50. Win by hitting 15, 16, 17, 18, 19, 20 or none of the 20 numbers drawn.',
    range: 50
  };

  const titleFormat = game.title.toUpperCase();

  let numbers: number[] = [];
  for (let i = 1; i <= game.range; i++) {
    numbers.push(i);
  }

  const renderItem = ({ item }: any) => <NumberButton number={item} />;

  return (
    <Container>
      <TitleContainer>
        <TitleStrong>NEW BET </TitleStrong>
        <TitleLight>FOR {titleFormat}</TitleLight>
      </TitleContainer>

      <TitleGame>Choose a game</TitleGame>
      <FiltersContainer>
        <GameButton
          active={false}
          title="Lotofácil"
          color="#7F3992"
          onPress={() => {}}
        />
        <GameButton
          active={false}
          title="Mega-Sena"
          color="#01AC66"
          onPress={() => {}}
        />
        <GameButton
          active={false}
          title="Quina"
          color="#F79C31"
          onPress={() => {}}
        />
      </FiltersContainer>

      <TitleGame>Fill your bet</TitleGame>
      <TextGame>{game.description}</TextGame>

      <ButtonsContainer>
        <Button
          type="default"
          title="Complete"
          color={theme.colors.btn_primary}
        />
        <Button type="default" title="Clear" color={theme.colors.btn_primary} />
        <Button type="cart" title="Add" color={theme.colors.btn_primary} />
      </ButtonsContainer>

      <List
        contentContainerStyle={{
          alignItems: 'center'
        }}
        data={numbers}
        renderItem={renderItem}
        keyExtractor={(item: any) => item}
        numColumns={6}
      />
    </Container>
  );
}
