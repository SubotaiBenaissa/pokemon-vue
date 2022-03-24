<template>
    <div>
        <h1>¿Quién es este pokemón?</h1>
        <PokemonFoto :pokemonId="151" :showPokemon="true"/>
        <PokemonOpciones />
    </div>
</template>

<script>

import PokemonOpciones from '@/components/PokemonOpciones.vue'
import PokemonFoto from '@/components/PokemonFoto.vue'

import getPokemonOptions from '@/helpers/getPokemonOptions'

console.log(getPokemonOptions())

export default {
    components: {PokemonOpciones, PokemonFoto}
}
</script>
