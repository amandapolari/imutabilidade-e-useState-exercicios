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

    // card 1
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

    // card 2
    const clefairy = {
        name: 'Clefairy',
        type: 'fairy',
        evolved: true,
        weight: 7.5,
        color: 'pink',
        image: 'https://archives.bulbagarden.net/media/upload/thumb/b/b7/0035Clefairy.png/250px-0035Clefairy.png',
        id: 35,
    };

    const clefable = {
        ...clefairy,
        name: 'Clefable',
        evolved: false,
        weight: 40,
        image: 'https://archives.bulbagarden.net/media/upload/thumb/a/a4/0036Clefable.png/250px-0036Clefable.png',
        id: 36,
    };

    // Criando os estados:
    // card 1
    const [pikachuCard, setPikachuCard] = useState(pikachu);
    // card 2
    const [clefairyCard, setClefairyCard] = useState(clefairy);

    return (
        <>
            <GlobalStyles />
            <FlexContainer>
                <PokemonCard
                    card={pikachuCard}
                    setCard={setPikachuCard}
                    evolution={raichu}
                />
                <PokemonCard
                    card={clefairyCard}
                    setCard={setClefairyCard}
                    evolution={clefable}
                />
            </FlexContainer>
        </>
    );
}

export default App;
