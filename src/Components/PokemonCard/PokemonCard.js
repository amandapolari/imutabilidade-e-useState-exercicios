import React from 'react';
import { Card, PokemonName, PokemonType, EvolveButton, Img } from './styles';

const PokemonCard = ({ pokemon, evoluiPokemons }) => {
    const { name, type, weight, color, image } = pokemon;

    const evoluirPokemon = () => {
        console.log('Cliquei no botão de evoluir');
        evoluiPokemons()
    };

    return (
        <Card color={color}>
            <Img src={image} alt={`Pokemon`} />
            <PokemonName>{name}</PokemonName>
            <PokemonType>{type}</PokemonType>
            <p>{weight}kg</p>

            <EvolveButton onClick={() => evoluirPokemon()}>
                Evoluir!
            </EvolveButton>
        </Card>
    );
};

export default PokemonCard;
