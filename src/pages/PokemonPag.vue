<template>
    <div>
        <h1>¿Quién es este pokemón?</h1>
        <PokemonFoto />
        <PokemonOciones />
    </div>
</template>

<script>

import PokemonOpciones from '@/components/PokemonOpciones.vue'
import PokemonFoto from '@/components/PokemonFoto.vue'

export default {
    components: {PokemonOpciones, PokemonFoto}
}
</script>
