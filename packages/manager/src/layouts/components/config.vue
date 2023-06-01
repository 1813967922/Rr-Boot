<script lang="ts" setup>
import { configStore } from "/@/store/modules/config";

const config = configStore();

const close = () => {
  config.setConfig("isOpen", false)
}

</script>

<template>
  <div class="config">

    <el-drawer v-model="config.state.isOpen" title="系统配置" :before-close="close">
      <el-scrollbar>
        <el-form>
          <!-- 布局 -->
          <el-divider border-style="dashed">布局方式</el-divider>

          <!-- 菜单切换动画 -->
          <el-divider border-style="dashed">全局</el-divider>
          <el-form-item label="菜单切换动画">
            <el-select v-model="config.state.mainAnimation">
              <el-option label="slide-left" value="slide-left" />
              <el-option label="slide-right" value="slide-right" />
            </el-select>
          </el-form-item>
          <!-- 菜单展开宽度 -->
          <el-divider border-style="dashed">侧边栏</el-divider>
          <el-form-item label="侧边菜单宽度(展开时)">
            <el-input-number v-model="config.state.menuwidth" :min="200" :max="260"></el-input-number>
          </el-form-item>
        </el-form>
      </el-scrollbar>
    </el-drawer>
  </div>
</template>

<style lang="scss" scoped>
.config{
  
}
</style>
