import React, { useEffect } from 'react';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { fetchTypesData } from '@store/game-actions';

import { TypesDetail } from '@components/TypesDetails';

import { Container, Title, Content } from './styles';

export function EditTypes() {
  const dispatch = useDispatch();
  const typesGame = useSelector((state: RootStateOrAny) => state.game.types);
  const saved = useSelector((state: RootStateOrAny) => state.auth.saved);

  useEffect(() => {
    dispatch(fetchTypesData());
  }, []);

  useEffect(() => {
    if (saved) {
      dispatch(fetchTypesData());
    }
  }, [saved]);

  return (
    <Container>
      <Title>REGISTERED GAMES</Title>
      <Content>
        {typesGame.map((item: any) => {
          return (
            <TypesDetail
              key={Math.random()}
              id={item.id}
              name={item.name}
              description={item.description}
              range={item.range}
              price={item.price}
              maxNumber={item.maxNumber}
              color={item.color}
            />
          );
        })}
      </Content>
    </Container>
  );
}
