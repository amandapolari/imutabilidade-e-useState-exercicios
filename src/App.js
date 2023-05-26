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
        image: 'https://archives.bulbagarden.net/media/upload/b/b7/0035Clefairy.png',
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

    // card 3
    const charmander = {
        name: 'Charmander',
        type: 'Fire',
        evolved: true,
        weight: 8.5,
        color: 'Red',
        image: 'https://archives.bulbagarden.net/media/upload/2/27/0004Charmander.png',
        id: 4,
    };
    const charmeleon = {
        ...charmander,
        name: 'Charmeleon',
        evolved: false,
        weight: 19.0,
        image: 'https://archives.bulbagarden.net/media/upload/0/05/0005Charmeleon.png',
        id: 5,
    };

    // card 4
    const bulbasaur = {
        name: 'Bulbasaur',
        type: 'Grass/Poison',
        evolved: true,
        weight: 6.9,
        color: 'Green',
        image: 'https://archives.bulbagarden.net/media/upload/f/fb/0001Bulbasaur.png',
        id: 1,
    };
    const ivysaur = {
        ...bulbasaur,
        name: 'Ivysaur',
        evolved: false,
        weight: 13.0,
        image: 'https://archives.bulbagarden.net/media/upload/8/81/0002Ivysaur.png',
        id: 2,
    };

    // card 5
    const magikarp = {
        name: 'Magikarp',
        evolved: true,
        type: 'Water',
        weight: 10.0,
        color: 'Red',
        image: 'https://archives.bulbagarden.net/media/upload/d/d1/0129Magikarp.png',
        id: 129,
    };
    const gyarados = {
        ...magikarp,
        name: 'Gyarados',
        evolved: false,
        type: 'Water/Flying',
        weight: 235.0,
        color: 'Blue',
        image: 'https://archives.bulbagarden.net/media/upload/b/bc/0130Gyarados.png',
        id: 130,
    };

    // card 6
    const eevee = {
        name: 'Eevee',
        type: 'Normal',
        evolved: true,
        weight: 6.5,
        color: 'Brown',
        image: 'https://archives.bulbagarden.net/media/upload/4/4c/0133Eevee.png',
        id: 133,
    };
    const vaporeon = {
        ...eevee,
        name: 'Vaporeon',
        type: 'Water',
        evolved: false,
        weight: 29.0,
        color: 'Blue',
        image: 'https://archives.bulbagarden.net/media/upload/6/6d/0134Vaporeon.png',
        id: 134,
    };

    // card 7
    const machop = {
        name: 'Machop',
        type: 'Fighting',
        evolved: true,
        weight: 19.5,
        color: 'Gray',
        image: 'https://archives.bulbagarden.net/media/upload/0/02/0066Machop.png',
        id: 66,
    };
    const machoke = {
        ...machop,
        name: 'Machoke',
        evolved: false,
        weight: 70.5,
        image: 'https://archives.bulbagarden.net/media/upload/2/22/0067Machoke.png',
        id: 67,
    };

    // Criando os estados:
    // card 1
    const [pikachuCard, setPikachuCard] = useState(pikachu);
    // card 2
    const [clefairyCard, setClefairyCard] = useState(clefairy);
    // card 3
    const [charmeleonCard, setCharmeleonCard] = useState(charmander);
    // card 4
    const [bulbasaurCard, setBulbasaurCard] = useState(bulbasaur);
    // // card 5
    const [magikarpCard, setMagikarpCard] = useState(magikarp);
    // // card 6
    const [eeveeCard, setEeveeCard] = useState(eevee);
    // // card 7
    const [machopCard, SetMachop] = useState(machop);

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
                <PokemonCard
                    card={charmeleonCard}
                    setCard={setCharmeleonCard}
                    evolution={charmeleon}
                />
                <PokemonCard
                    card={bulbasaurCard}
                    setCard={setBulbasaurCard}
                    evolution={ivysaur}
                />
                <PokemonCard
                    card={magikarpCard}
                    setCard={setMagikarpCard}
                    evolution={gyarados}
                />
                <PokemonCard
                    card={eeveeCard}
                    setCard={setEeveeCard}
                    evolution={vaporeon}
                />
                <PokemonCard
                    card={machopCard}
                    setCard={SetMachop}
                    evolution={machoke}
                />
            </FlexContainer>
        </>
    );
}

export default App;
