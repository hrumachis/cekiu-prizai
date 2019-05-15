<template>
    <div id="app">
        <!-- * Router view -->
        <router-view/>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';

    @Component( {
        name: "ViewApp",
    } )
    export default class ViewApp extends Vue {

    }
</script>

<style lang="scss">
    @import '~@/variables';

</style>