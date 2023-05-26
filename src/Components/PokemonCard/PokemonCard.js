import React from 'react';
import { Card, PokemonName, PokemonType, EvolveButton, Img } from './styles';

const PokemonCard = ({ card, setCard, evolution }) => {
    const { name, type, weight, color, image, evolved } = card;

    const evoluirPokemon = () => {
        evolved ? setCard(evolution) : alert('O pokemon não pode evoluir');
    };

    return (
        <Card color={color}>
            <Img src={image} alt={`Pokemon`} />
            <PokemonName>{name}</PokemonName>
            <PokemonType>{type}</PokemonType>
            <p>{weight}kg</p>

            <EvolveButton onClick={evoluirPokemon}>Evoluir!</EvolveButton>
        </Card>
    );
};

export default PokemonCard;
