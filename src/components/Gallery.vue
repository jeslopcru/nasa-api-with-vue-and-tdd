<template>
    <div v-if="results.length === 0">No items found</div>
    <div class="grid" v-else>
        <div class="item" v-for="(result, key) in results" :key="key">
            <img :src="result.links[0].href"
                 alt="space image"/>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'Gallery',
        props: {
            results: {
                type: Array,
                required: true
            }
        }
    }
</script>
<style>
    .grid {
        display: grid;
        grid-template-columns: auto auto auto;
        grid-column-gap: 1rem;
        justify-content: center;
    }

    .item > img {
        width: 15rem;
        height: 15rem;
    }

    .item > img:hover {
        transform: scale(1.5);
    }

</style>