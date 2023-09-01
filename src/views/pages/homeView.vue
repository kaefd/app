<script setup>
import api from '../../service/api';
import functions from '../../service/functions';
import tableVue from '../../components/table/tableVue.vue';
</script>
<script>
export default {
    components: {
        tableVue,
    },
    data () {
        return {
            headers: [
                {title: 'Symbol', key: 'symbol'},
                {title: 'Name', key: 'name'},
                {title: 'Price', key: 'price'},
                {title: 'btc Price', key: 'btcPrice'},
                {title: 'Change', key: 'change'},
                {title: 'Rank', key: 'rank'},
                {title: 'Icon', key: 'iconUrl'},
            ],
            items: '',
            search: '',
        }
    },
    methods: {
        async fetchData() {
            let coin = await api.getCoins()
            this.items = functions.modelCoin(coin.data.coins)
        }
    },
    mounted() {
        this.fetchData()
    }
}
</script>

<template>
    <v-container class="w-100 border rounded-xl">
        <tableVue
        :items="items"
        :headers="headers"
        :search="search"
        />
    </v-container>
</template>

<style>
</style>