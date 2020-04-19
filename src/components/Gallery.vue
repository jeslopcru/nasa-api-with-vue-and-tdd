<template>
    <div v-if="results.length === 0">No items found</div>
    <div v-else>
        <div v-for="(result, key) in results" :key="key">
            {{ result }}
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