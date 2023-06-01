<script lang="ts" setup>
import { configStore } from '/@/store/modules/config';
import { appStore } from '/@/store/modules/app';

const config = configStore();
const app = appStore();

</script>

<template>
  <div class="logo">
    <img src="~assets/vue.svg" alt="logo" />
    <span v-if="!config.state.menuCollapse" class="name">{{app.state.appName}}</span>
  </div>
</template>

<style lang="scss" scoped>
.logo {
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  .name{
    margin-left: 10px;
    font-size: var(--el-font-size-extra-large);
    font-weight: 600;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
}
</style>
