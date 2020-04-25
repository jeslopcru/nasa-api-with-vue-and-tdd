<template>
    <div class="search">
        <form v-on:submit.prevent="doRequest(query)">
            <label>
                <input v-model="query"/>
            </label>
        </form>
        <section>Found Images ({{numberOfImages}})</section>
        <Gallery :results="results"/>
    </div>

</template>

<script>
    import axios from "axios";
    import Gallery from "@/components/Gallery";

    export default {
        name: "Search",
        components: {
            Gallery
        },
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