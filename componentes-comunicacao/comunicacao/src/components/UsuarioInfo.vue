<template>
    <div class="componente">
        <h2>As Informações de Usuário</h2>
        <p>Componente filho</p>
        <p>Nome de Usuário: <strong>{{ nome }}</strong></p>
        <p>Idade do Usuário <strong> {{ idade }}</strong></p>
        <button @click="reiniciarNome">Restaurar Nome</button>
    </div>
</template>

<script>
import barramento from '@/barramento'
export default {
    props: {
        nome: String,
        idade: Number
    },
    methods: {
        reiniciarNome() {
            this.nome = "Pedro"
            this.$emit('nomeMudou', this.nome)
        }
        
    },
    created(){
        barramento.quadoIdadeMudar(idade => {
         this.idade = idade   
        })
    }
}
</script>

<style scoped>
    .componente {
        flex: 1;
        background-color: #ec485f;
        color: #fff;
    }
</style>
