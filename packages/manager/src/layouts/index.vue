<template>
    <component :is="config.state.layoutMode"></component>
</template>

<script lang="ts" setup>
import Default from '/@/layouts/container/default.vue'
import { configStore } from '/@/store/modules/config'
const config = configStore()
</script>

<script lang="ts">
export default {
    components: { Default },
}
</script>
