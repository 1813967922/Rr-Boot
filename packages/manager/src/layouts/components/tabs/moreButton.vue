<template>
	<el-dropdown trigger="click">
		<el-button size="small" type="primary">
			<span>更多</span>
			<el-icon class="el-icon--right"><arrow-down /></el-icon>
		</el-button>
		<template #dropdown>
			<el-dropdown-menu>
				<el-dropdown-item @click="closeCurrentTab">关闭当前</el-dropdown-item>
				<el-dropdown-item @click="closeOtherTab">关闭其他</el-dropdown-item>
				<el-dropdown-item @click="closeAllTab">关闭所有</el-dropdown-item>
			</el-dropdown-menu>
		</template>
	</el-dropdown>
</template>

<script setup lang="ts">
import { permissionStore,HOME_URL  } from "/@/store/modules/permission";
const permission = permissionStore();

// Close Current
const closeCurrentTab = () => {
	if (permission.state.tabsMenuValue === HOME_URL) return;
	permission.removeTabs(permission.state.tabsMenuValue);
};

// Close Other
const closeOtherTab = () => {
	permission.closeMultipleTab(permission.state.tabsMenuValue);
};

// Close All
const closeAllTab = () => {
	permission.closeMultipleTab();
	permission.goHome();
};
</script>

<style scoped lang="scss">
@import "./index.scss";
</style>
