<template>
    <div id="view view-index">
        Hello World
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';

    @Component( {
        name: "ViewIndex",
    } )
    export default class ViewIndex extends Vue {

    }
</script>

<style lang="scss">
    @import '~@/variables';

</style>