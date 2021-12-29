import React, { useEffect } from 'react';
import { TypeButton, Bet } from '@components/index';

import { Container, Title, List, Text, FiltersContainer } from './styles';
import { fetchTypesData } from '@store/game-actions';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { gameActions } from '@store/game-slice';
import { TypeProps } from '@models/GameProps';

export function Home() {
  const dispatch = useDispatch();
  const filters = useSelector((state: RootStateOrAny) => state.game.filters);

  useEffect(() => {
    dispatch(fetchTypesData());
    dispatch(gameActions.resetFilters());
  }, []);

  // const renderItem = ({ item }: any) => (
  //   <Bet
  //     numbers={item.numbers}
  //     date={item.date}
  //     price={item.price}
  //     title={item.title}
  //     color={item.color}
  //   />
  // );

  const renderFilter = ({ item }: any) => (
    <TypeButton
      active={item.selected}
      title={item.name}
      color={item.color}
      onPress={() => {}}
    />
  );

  return (
    <Container>
      <Title>RECENT GAMES</Title>
      <Text>Filters</Text>
      <FiltersContainer
      // data={filters}
      // renderItem={renderFilter}
      // keyExtractor={(item: any) => item.id}
      // contentContainerStyle={{
      //   flexDirection: 'row',
      //   justifyContent: 'space-around'
      // }}
      >
        {filters.map((type: TypeProps) => {
          return (
            <TypeButton
              key={type.id}
              active={type.selected}
              title={type.name}
              color={type.color}
              onPress={() => console.log(type.name)}
            />
          );
        })}
      </FiltersContainer>
      {/* <List
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item: any) => item.id}
      /> */}
    </Container>
  );
}
