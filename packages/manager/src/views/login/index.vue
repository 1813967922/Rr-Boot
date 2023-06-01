<template>
    <div class="signin flex justify-center items-center h-screen">
        <el-form ref="ruleFormRef" :model="form" :rules="rules" class="w-1/6">
            <el-form-item prop="userAcct">
                <el-input v-model="form.userAcct" prefix-icon="user" placeholder="请输入账号" clearable>
                </el-input>
            </el-form-item>
            <el-form-item prop="password">
                <el-input v-model="form.password" prefix-icon="lock" show-password type="password" placeholder="请输入密码" clearable>
                </el-input>
            </el-form-item>
            <el-form-item>
                <el-checkbox v-model="form.remember" label="保持会话" size="small" />
            </el-form-item>
            <el-form-item>
                <el-button style="width: 100%" type="primary" size="default" @click="submitForm(ruleFormRef)"> 登录</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script lang="ts" setup>
import { ElNotification, FormInstance, FormRules } from 'element-plus'
import { onMounted, reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import { userStore } from '/@/store/modules/user'

const user = userStore()
// 路由实例
const router = useRouter()
// 表单实例
const ruleFormRef = ref<FormInstance>()
// 表单效验规则
const rules = reactive<FormRules>({
    userAcct: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
    password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
})
// 登录表单
let form = reactive({
    userAcct: 'admin',
    password: '123456',
    code: '',
    remember: false,
})
// 提交按钮
const submitForm = async (formEl: FormInstance | undefined) => {
    if (!formEl) return
    await formEl.validate(async (valid, fields) => {
        if (valid) {
            // 是否保持会话
            if (form.remember) {
                localStorage.setItem('remember', '1')
            }
            router.push('/dashboard/workplace')
            ElNotification({
                title: '成功',
                message: '登录成功，欢迎回来~',
                type: 'success',
            })
        }
    })
}
// 页面初始化
onMounted(() => {
    // 判断是否保持会话
    let remember = localStorage.getItem('remember')
    form.remember = remember ? true : false
})
</script>

<style lang="scss" scoped>
.signin {
  
}
</style>
