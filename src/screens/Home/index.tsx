import React, { useEffect } from 'react';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { fetchTypesData, listGames } from '@store/game-actions';
import { gameActions } from '@store/game-slice';

import { TypeButton, Bet } from '@components/index';

import { TypeProps } from '@models/GameProps';
import {
  Container,
  Title,
  List,
  Text,
  FiltersContainer,
  EmptyGames
} from './styles';

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
  const typesLoaded = useSelector(
    (state: RootStateOrAny) => state.game.typesLoaded
  );
  const savedGames = useSelector(
    (state: RootStateOrAny) => state.game.savedGames
  );

  useEffect(() => {
    dispatch(fetchTypesData());
    dispatch(gameActions.resetFilters());
  }, []);

  useEffect(() => {
    if (savedGames) {
      dispatch(listGames({ types: filtersActive, typesGame }));
    }
  }, [savedGames]);

  useEffect(() => {
    if (
      filtersActive !== undefined &&
      typesLoaded === true &&
      typesGame !== undefined
    ) {
      dispatch(listGames({ types: filtersActive, typesGame }));
    }
  }, [filtersActive, typesGame, typesLoaded]);

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
      <FiltersContainer>
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
      {filteredGames.length === 0 ? (
        <EmptyGames>Nenhum jogo encontrado.</EmptyGames>
      ) : (
        <List
          data={filteredGames}
          renderItem={renderItem}
          keyExtractor={(item: any) => item.id}
        />
      )}
    </Container>
  );
}
