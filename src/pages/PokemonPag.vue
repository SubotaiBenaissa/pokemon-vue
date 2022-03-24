<template>
    <div>
        <h1>¿Quién es este pokemón?</h1>
        <PokemonFoto :pokemonId="4"/>
        <PokemonOpciones />
    </div>
</template>

<script>

import PokemonOpciones from '@/components/PokemonOpciones.vue'
import PokemonFoto from '@/components/PokemonFoto.vue'

export default {
    components: {PokemonOpciones, PokemonFoto}
}
</script>
