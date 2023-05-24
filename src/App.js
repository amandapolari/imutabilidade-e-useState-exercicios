import React, { useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import PokemonCard from './Components/PokemonCard/PokemonCard';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;
const FlexContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
`;
function App() {
    // Para fazer seus próximos pokemons, crie novos estados ultilizando como referência o objeto abaixo:
    // const informacoes = {
    //   name: "Pichu",
    //   type: "Electric",
    //   evolved: false,
    //   weight: 2,
    //   color: 'yellow',
    //   image: 'https://archives.bulbagarden.net/media/upload/archive/f/f3/20130810070434%210172Pichu.png',
    //   id: 0
    // }

    const pokemons = [
        {
            name: 'Pikachu',
            type: 'Electric',
            evolved: false,
            weight: 6.0,
            color: 'Yellow',
            image: 'https://archives.bulbagarden.net/media/upload/archive/f/f3/20130810070434%210172Pichu.png',
            id: 0,
        },
        {
            name: 'Charizard',
            type: 'Fire/Flying',
            evolved: true,
            weight: 90.5,
            color: 'Red',
            image: 'https://archives.bulbagarden.net/media/upload/3/38/0006Charizard.png',
            id: 1,
        },
        {
            name: 'Bulbasaur',
            type: 'Grass/Poison',
            evolved: false,
            weight: 6.9,
            color: 'Green',
            image: 'https://archives.bulbagarden.net/media/upload/f/fb/0001Bulbasaur.png',
            id: 2,
        },
        {
            name: 'Squirtle',
            type: 'Water',
            evolved: false,
            weight: 9.0,
            color: 'Blue',
            image: 'https://archives.bulbagarden.net/media/upload/5/54/0007Squirtle.png',
            id: 3,
        },
        {
            name: 'Jigglypuff',
            type: 'Normal/Fairy',
            evolved: false,
            weight: 5.5,
            color: 'Pink',
            image: 'https://archives.bulbagarden.net/media/upload/3/3a/0039Jigglypuff.png',
            id: 4,
        },
    ];

    return (
        <>
            <GlobalStyles />
            <FlexContainer>
                {/* Aqui neste componente, passe as props. Lembre-se que também é possivel passar a função de setState via props! */}
                {/* <PokemonCard pokemons={pokemons}/> */}
                {pokemons.map((item) => {
                    // console.log(item)
                    return <PokemonCard infos={item} />;
                })}
                {/* Crie aqui seus próximos pokemons! */}
            </FlexContainer>
        </>
    );
}

export default App;
