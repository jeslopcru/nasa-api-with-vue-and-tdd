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
    import axios from "axios"

    export default {
        name: "Search",
        data() {
            return {
                numberOfImages: 0,
                query: "",
                results: []
            };
        },
        methods: {
            doRequest(query) {
                axios
                    .get("https://images-api.nasa.gov/search?media_type=image&q=" + query)
                    .then(response => {
                        this.results = response.data.collection.items;
                        this.numberOfImages = this.results.length;
                    });
            }
        }
    };
</script>