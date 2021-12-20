import React from 'react';
import { ListGame } from '@components/ListGame';
import { Container, Title, List, Text, FiltersContainer } from './styles';
import { GameButton } from '@components/GameButton';

const DATA = [
  {
    id: Math.random().toString(),
    date: '30/11/2021',
    price: 'R$2,50',
    title: 'Megasena',
    numbers: '01, 02, 03, 04, 05, 06, 07, 08, 09, 10, 11, 12, 13, 14, 15, 16',
    color: '#35A45E'
  },
  {
    id: Math.random().toString(),
    date: '30/11/2021',
    price: 'R$2,50',
    title: 'Lotofácil',
    numbers: '01, 02, 03, 04, 05, 06, 07, 08, 09, 10, 11, 12, 13, 14, 15, 16',
    color: '#35A45E'
  },
  {
    id: Math.random().toString(),
    date: '30/11/2021',
    price: 'R$2,50',
    title: 'Lotofácil',
    numbers: '01, 02, 03, 04, 05, 06, 07, 08, 09, 10, 11, 12, 13, 14, 15, 16',
    color: '#35A45E'
  },
  {
    id: Math.random().toString(),
    date: '30/11/2021',
    price: 'R$2,50',
    title: 'Lotofácil',
    numbers: '01, 02, 03, 04, 05, 06, 07, 08, 09, 10, 11, 12, 13, 14, 15, 16',
    color: '#35A45E'
  },
  {
    id: Math.random().toString(),
    date: '30/11/2021',
    price: 'R$2,50',
    title: 'Lotofácil',
    numbers: '01, 02, 03, 04, 05, 06, 07, 08, 09, 10, 11, 12, 13, 14, 15, 16',
    color: '#35A45E'
  },
  {
    id: Math.random().toString(),
    date: '30/11/2021',
    price: 'R$2,50',
    title: 'Lotofácil',
    numbers: '01, 02, 03, 04, 05, 06, 07, 08, 09, 10, 11, 12, 13, 14, 15, 16',
    color: '#4D32F5'
  },
  {
    id: Math.random().toString(),
    date: '30/11/2021',
    price: 'R$2,50',
    title: 'Lotofácil',
    numbers: '01, 02, 03, 04, 05, 06, 07, 08, 09, 10, 11, 12, 13, 14, 15, 16',
    color: '#41123C'
  }
];

export function Home() {
  const renderItem = ({ item }: any) => (
    <ListGame
      numbers={item.numbers}
      date={item.date}
      price={item.price}
      title={item.title}
      color={item.color}
    />
  );

  return (
    <Container>
      <Title>RECENT GAMES</Title>
      <Text>Filters</Text>
      <FiltersContainer>
        <GameButton title="Lotofácil" color="#7F3992" onPress={() => {}} />
        <GameButton title="Mega-Sena" color="#01AC66" onPress={() => {}} />
        <GameButton title="Quina" color="#F79C31" onPress={() => {}} />
      </FiltersContainer>
      <List
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </Container>
  );
}