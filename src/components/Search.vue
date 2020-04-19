<template>
    <div class="search">
        <form v-on:submit.prevent="doRequest()"></form>
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
            doRequest() {
                this.numberOfImages = 33
            }
        }

    }
</script>