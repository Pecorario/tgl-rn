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
  List,
  DetailsContainer
} from './styles';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { gameActions } from '@store/game-slice';

export function NewBet() {
  const theme = useTheme();
  const dispatch = useDispatch();
  const types = useSelector((state: RootStateOrAny) => state.game.types);
  const typeActive = useSelector(
    (state: RootStateOrAny) => state.game.typeActive
  );

  const titleFormat = typeActive?.name.toUpperCase();

  let numbers: number[] = [];
  for (let i = 1; i <= typeActive?.range; i++) {
    numbers.push(i);
  }

  const renderItem = ({ item }: any) => <NumberButton number={item} />;

  const selectType = (name: string) => {
    dispatch(gameActions.selectType(name));
  };

  const renderGame = ({ item }: any) => (
    <GameButton
      active={item.selected}
      title={item.name}
      color={item.color}
      onPress={() => selectType(item.name)}
    />
  );

  return (
    <Container>
      <TitleContainer>
        <TitleStrong>NEW BET </TitleStrong>
        {typeActive !== null && <TitleLight>FOR {titleFormat}</TitleLight>}
      </TitleContainer>

      <TitleGame>Choose a game</TitleGame>
      <FiltersContainer
        data={types}
        renderItem={renderGame}
        keyExtractor={(item: any) => item.id}
        contentContainerStyle={{
          flexDirection: 'row',
          justifyContent: 'space-around'
        }}
      />

      {typeActive !== null && (
        <>
          <DetailsContainer>
            <TitleGame>Fill your bet</TitleGame>
            <TextGame>{typeActive.description}</TextGame>

            <ButtonsContainer>
              <Button
                type="default"
                title="Complete"
                color={theme.colors.btn_primary}
              />
              <Button
                type="default"
                title="Clear"
                color={theme.colors.btn_primary}
              />
              <Button
                type="cart"
                title="Add"
                color={theme.colors.btn_primary}
              />
            </ButtonsContainer>
          </DetailsContainer>

          <List
            contentContainerStyle={{
              alignItems: 'center'
            }}
            data={numbers}
            renderItem={renderItem}
            keyExtractor={(item: any) => item}
            numColumns={6}
          />
        </>
      )}
    </Container>
  );
}
