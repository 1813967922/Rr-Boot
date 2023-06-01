<template>
    <div class="flex" :class="`justify-${align}`">
        <el-pagination
            :current-page="current"
            :page-size="size"
            :page-sizes="sizes"
            :layout="layout"
            :total="total"
            @size-change="onChange"
            @current-change="onChange"
        />
    </div>
</template>

<script setup lang="ts">
type alignEmun = 'left' | 'right' | 'center'

type Props = {
    current: number
    size: number
    total: number
    align?: alignEmun
    sizes?: number[]
    layout?: string
}
withDefaults(defineProps<Props>(), {
    align: 'center',
    sizes: () => [10, 20, 30, 40, 50],
    layout: 'total, sizes, prev, pager, next, jumper',
})
// 当前页、每页显示条数切换时触发emit
const emit = defineEmits<{
    (e: 'change'): void
}>()

const onChange = () => {
    emit('change')
}
</script>

<style scoped lang="scss">
// unocss原子化样式不支持动态切换类名
.justify-left {
    justify-content: start;
}
.justify-right {
    justify-content: end;
}
.justify-center {
    justify-content: center;
}
</style>
