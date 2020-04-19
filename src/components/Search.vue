<template>
    <div class="search">
        <form v-on:submit.prevent="doRequest(query)"></form>
        <section>Found Images ({{numberOfImages}})</section>
    </div>

</template>

<script>
    export default {
        name: "Search",
        data() {
            return {
                numberOfImages: 0
            }
        },
        methods: {
            doRequest(query) {
                this.numberOfImages = query.length
            }
        }

    }
</script>