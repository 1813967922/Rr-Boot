<template>
    <div>
        redirect
    </div>
</template>

<script setup lang="ts">
import {useRoute,useRouter} from "vue-router"
const route = useRoute()
const router = useRouter()
const gotoPath = route.params.path as string;
router.replace(gotoPath)
</script>
