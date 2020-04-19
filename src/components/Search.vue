<template>
    <div class="search">
        <form v-on:submit.prevent="doRequest(query)">
            <label>
                <input v-model="query"/>
            </label>
        </form>
        <section>Found Images ({{numberOfImages}})</section>
    </div>

</template>

<script>
    export default {
        name: "Search",
        data() {
            return {
                numberOfImages: 0,
                query: ''
            }
        },
        methods: {
            doRequest(query) {
                this.numberOfImages = query.length
            }
        }

    }
</script>