<template>

    <h1 v-if="!pokemon">Cargando...</h1>

    <div v-else>
        <h1>¿Quién es este pokemón?</h1>
        <PokemonFoto :pokemonId="pokemon.id" :showPokemon="showPokemon"/>
        <PokemonOpciones :pokemons="pokemonArr" @selection="checkAnswer"/>
        <div v-if="!showAnswer" >
            <h2 class="fade-in">{{message}}</h2>
            <button @click="newGame">
                Nuevo juego
            </button>
        </div>
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

        checkAnswer(selectedId) {
            this.showPokemon = true
            if(selectedId === this.pokemon.id) {
                this.message = `Correcto, es ${this.pokemon.name} :D`
            }
            else {
                this.message = `No, es ${this.pokemon.name} :C`
            }
        },

        newGame() {
            this.showPokemon = false
            this.showAnswer = false
            this.pokemonArr = []
            this.pokemon = null
            this.mixPokemonArray()
        }

    },

    mounted() {

        this.mixPokemonArray()

    }
}
</script>
