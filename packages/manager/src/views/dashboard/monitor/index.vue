<script lang="ts" setup>
import Pagination from '/@/components/pagination/index.vue'

const change = () => {
    console.log(1)
}
</script>

<template>
    <div>
        <Pagination :current="1" :size="10" :total="100" @change="change" />
    </div>
</template>

<style lang="scss" scoped>

</style>
