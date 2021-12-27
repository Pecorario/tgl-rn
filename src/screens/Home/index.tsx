import React, { useEffect } from 'react';
import { GameButton, ListGame } from '@components/index';

import { Container, Title, List, Text, FiltersContainer } from './styles';
import { fetchGamesData } from '@store/game-actions';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';

export function Home() {
  const dispatch = useDispatch();
  const types = useSelector((state: RootStateOrAny) => state.game.types);

  // const renderItem = ({ item }: any) => (
  //   <ListGame
  //     numbers={item.numbers}
  //     date={item.date}
  //     price={item.price}
  //     title={item.title}
  //     color={item.color}
  //   />
  // );

  const renderGame = ({ item }: any) => (
    <GameButton
      active={item.selected}
      title={item.name}
      color={item.color}
      onPress={() => {}}
    />
  );

  useEffect(() => {
    dispatch(fetchGamesData());
  }, []);

  return (
    <Container>
      <Title>RECENT GAMES</Title>
      <Text>Filters</Text>
      <FiltersContainer
        data={types}
        renderItem={renderGame}
        keyExtractor={(item: any) => item.id}
        contentContainerStyle={{
          flexDirection: 'row',
          justifyContent: 'space-around'
        }}
      />
      {/* <GameButton
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
      </FiltersContainer> */}
      {/* <List
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item: any) => item.id}
      /> */}
    </Container>
  );
}
