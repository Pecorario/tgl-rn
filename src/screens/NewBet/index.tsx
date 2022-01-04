import React, { useEffect } from 'react';
import { useTheme } from 'styled-components';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { gameActions } from '@store/game-slice';

import { TypeButton, Button, NumberButton } from '@components/index';

import { TypeProps } from '@models/GameProps';
import {
  Container,
  TitleContainer,
  TitleStrong,
  TitleLight,
  TypesContainer,
  TitleGame,
  TextGame,
  ButtonsContainer,
  List,
  DetailsContainer
} from './styles';

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

  useEffect(() => {
    dispatch(gameActions.resetTypeDefault());
  }, []);

  const selectType = (name: string) => {
    dispatch(gameActions.selectType(name));
  };

  const clearGame = () => {
    dispatch(gameActions.clearGame());
  };

  const completeGame = () => {
    dispatch(gameActions.completeGame());
  };

  const addGameToCart = () => {
    dispatch(gameActions.addGameToCart());
  };

  const renderNumberButton = ({ item }: any) => (
    <NumberButton number={item} color={typeActive.color} />
  );

  return (
    <Container>
      <TitleContainer>
        <TitleStrong>NEW BET </TitleStrong>
        {typeActive !== null && <TitleLight>FOR {titleFormat}</TitleLight>}
      </TitleContainer>

      <TitleGame>Choose a game</TitleGame>
      <TypesContainer>
        {types.map((type: TypeProps) => {
          return (
            <TypeButton
              key={type.id}
              active={type.selected}
              title={type.name}
              color={type.color}
              onPress={() => selectType(type.name)}
            />
          );
        })}
      </TypesContainer>

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
                onPress={completeGame}
              />
              <Button
                type="default"
                title="Clear"
                color={theme.colors.btn_primary}
                onPress={clearGame}
              />
              <Button
                type="cart"
                title="Add"
                color={theme.colors.btn_primary}
                onPress={addGameToCart}
              />
            </ButtonsContainer>
          </DetailsContainer>

          <List
            contentContainerStyle={{
              alignItems: 'center'
            }}
            data={numbers}
            renderItem={renderNumberButton}
            keyExtractor={(item: any) => item}
            numColumns={6}
          />
        </>
      )}
    </Container>
  );
}
