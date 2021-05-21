import Vue from 'vue'
export default new Vue({
    methods: {
        alterarIdade(idade){
            this.$emit('idadeMudou', idade)
        },
        quadoIdadeMudar(callback){
            this.$on('idadeMudou', callback)
        }
    }
})

