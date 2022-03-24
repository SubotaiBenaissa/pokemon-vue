<template>

    <h1 v-if="!pokemon">Cargando...</h1>

    <div v-else>
        <h1>¿Quién es este pokemón?</h1>
        <PokemonFoto :pokemonId="pokemon.id" :showPokemon="showPokemon"/>
        <PokemonOpciones :pokemons="pokemonArr" @selection="checkAnswer"/>
        <h2>{{message}}</h2>
        <button>
            Nuevo juego
        </button>
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
            pokemon: null,
            showPokemon: false,
            showAnswer: false,
            message: '',
        }

    },

    methods: {

        async mixPokemonArray() {
            this.pokemonArr = await getPokemonOptions()
            const randomInt = Math.floor(Math.random() * 4)
            this.pokemon = this.pokemonArr[randomInt]
        },

        checkAnswer(pokemonId) {
            this.showPokemon = true
        }

    },

    mounted() {

        this.mixPokemonArray()

    }
}
</script>
