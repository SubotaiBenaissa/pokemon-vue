<template>

    <h1 v-if="!pokemon">Cargando...</h1>

    <div v-if="pokemon">
        <h1>¿Quién es este pokemón?</h1>
        <PokemonFoto :pokemonId="pokemon.id" :showPokemon="true"/>
        <PokemonOpciones :pokemons="pokemonArr"/>
    </div>
    
</template>

<script>

import PokemonOpciones from '@/components/PokemonOpciones.vue'
import PokemonFoto from '@/components/PokemonFoto.vue'

import getPokemonOptions from '@/helpers/getPokemonOptions'

export default {
    components: {PokemonOpciones, PokemonFoto},

    data() {

        return{
            pokemonArr: [],
            pokemon: null
        }

    },

    methods: {

        async mixPokemonArray() {
            this.pokemonArr = await getPokemonOptions()
            const randomInt = Math.floor(Math.random() * 4)
            this.pokemon = this.pokemonArr[randomInt]
        }

    },

    mounted() {

        this.mixPokemonArray()

    }
}
</script>
