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

    const pikachu = {
        name: 'Pikachu',
        type: 'Electric',
        evolved: true,
        weight: 6,
        color: 'Yellow',
        image: 'https://archives.bulbagarden.net/media/upload/thumb/4/4a/0025Pikachu.png/250px-0025Pikachu.png',
        id: 26,
    };

    const raichu = {
        ...pikachu,
        name: 'Raichu',
        evolved: false,
        weight: 30,
        image: 'https://archives.bulbagarden.net/media/upload/thumb/b/b0/0026Raichu.png/250px-0026Raichu.png',
        id: 26,
    };

    // Criando os estados:
    const [pikachuCard, setPikachuCard] = useState(pikachu);

    return (
        <>
            <GlobalStyles />
            <FlexContainer>
                <PokemonCard
                    card={pikachuCard}
                    setCard={setPikachuCard}
                    evolution={raichu}
                />
            </FlexContainer>
        </>
    );
}

export default App;
