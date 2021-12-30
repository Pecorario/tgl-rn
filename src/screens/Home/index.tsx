import React, { useEffect } from 'react';
import { TypeButton, Bet } from '@components/index';

import { Container, Title, List, Text, FiltersContainer } from './styles';
import { fetchTypesData, listGames } from '@store/game-actions';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { gameActions } from '@store/game-slice';
import { TypeProps } from '@models/GameProps';

export function Home() {
  const dispatch = useDispatch();
  const filters = useSelector((state: RootStateOrAny) => state.game.filters);
  const filtersActive = useSelector(
    (state: RootStateOrAny) => state.game.filtersActive
  );
  const typesGame = useSelector((state: RootStateOrAny) => state.game.types);
  const filteredGames = useSelector(
    (state: RootStateOrAny) => state.game.filteredGames
  );
  const { token } = useSelector((state: RootStateOrAny) => state.auth.user);

  useEffect(() => {
    dispatch(fetchTypesData());
    dispatch(gameActions.resetFilters());
  }, []);

  useEffect(() => {
    {
      filtersActive !== undefined &&
        dispatch(listGames({ types: filtersActive, token, typesGame }));
    }
  }, [filtersActive]);

  const selectFilter = (name: string) => {
    dispatch(gameActions.selectFilter({ name }));
  };

  const renderItem = ({ item }: any) => (
    <Bet
      numbers={item.numbers}
      date={item.date}
      price={item.price}
      title={item.name}
      color={item.color}
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
              onPress={() => selectFilter(type.name)}
            />
          );
        })}
      </FiltersContainer>
      <List
        data={filteredGames}
        renderItem={renderItem}
        keyExtractor={(item: any) => item.id}
      />
    </Container>
  );
}
