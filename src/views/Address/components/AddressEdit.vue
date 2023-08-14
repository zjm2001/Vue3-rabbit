<script setup>
import { ref } from 'vue';
import { regionData, codeToText } from 'element-china-area-data'
import { addAddressAPI, editAddressAPI } from '@/apis/address.js'
const emit = defineEmits(['getDate'])
const casc =ref([])
const list = ref({
    receiver: "",    //姓名    有
    contact: "",    //手机号      有
    provinceCode: ' ',   //省份编码  无
    cityCode: ' ',      //城市编码无
    countyCode: ' ',  //地区编码  无
    address: "",      //详细地址  有
    postalCode: "",    //邮政编码  有
    addressTags: "",   //地址标签(家,公司)  有
    isDefault: 1,      //默认不为默认地址 无
    fullLocation: "",     //完整地址  有
})
//  
const rules = {
    receiver: [
        { required: true, message: '不能为空', trigger: 'blur' }
    ],
    contact: [
        { required: true, message: '不能为空', trigger: 'blur' }
    ],
    address: [
        { required: true, message: '不能为空', trigger: 'blur' }
    ],
    postalCode: [
        { required: true, message: '不能为空', trigger: 'blur' }
    ],
    addressTags: [
        { required: true, message: '不能为空', trigger: 'blur' }
    ],
    fullLocation: [
        { required: true, message: '不能为空', trigger: 'blur' }
    ],
}


const options = regionData
// 地区选择器的改变事件
const handleChange = (val) => {
     //转化为文字
    list.value.fullLocation = codeToText[val[0]] + codeToText[val[1]] + codeToText[val[2]]
   //加长字符成为编码
    list.value.provinceCode = val[0] + '0000'
    list.value.cityCode = val[1] + '00'
    list.value.countyCode = val[2]

}

const isDialog = ref(false)
//传给父亲的打开事件知道点的是新增还是修改
const open = (item) => {
    if (item.id) {
        //id存在就是修改
        // console.log(item.provinceCode.substring(0,2), item.cityCode.substring(0,4), item.countyCode);
        list.value = item
        //将编码拼接成地址是的插件转化
        casc.value=[item.provinceCode.substring(0,2), item.cityCode.substring(0,4), item.countyCode]

    } else {
        //新增
        list.value = {
            receiver: "",    //姓名    有
            contact: "",    //手机号      有
            provinceCode: '',   //省份编码  无
            cityCode: '',      //城市编码 无
            countyCode: ' ',  //地区编码  无
            address: "",      //详细地址  有
            postalCode: "",    //邮政编码  有
            addressTags: "",   //地址标签(家,公司)  有
            isDefault: 1,      //默认不为默认地址 无
            fullLocation: "",     //完整地址  有}

        }
    }
    isDialog.value = true
}
const formRef = ref()
//确定按钮事件
const enter = async () => {
    if (list.value.id) {
        //修改
        await formRef.value.validate()   //表单验证通过
        await editAddressAPI(list.value.id, list.value)
    } else {
        //新增
        await formRef.value.validate()   //表单验证通过
        await addAddressAPI(list.value)
    }
    emit('getDate')
    isDialog.value = false


}
//取消按钮事件
const colse = () => {
    formRef.value.resetFields()
    isDialog.value = false
}
defineExpose({
    open
})

</script>
<template>
    <el-dialog v-if="isDialog" v-model="isDialog" title="添加收货地址" @close="colse">
        <el-form label-width="100px" ref="formRef" :model="list" :rules="rules">
            <el-form-item label="收货人:" prop="receiver">
                <el-input placeholder="请输入收货人" width="200px" v-model="list.receiver" />
            </el-form-item>
            <el-form-item label="手机号:" prop="contact">
                <el-input placeholder="请输入手机号" width="200px" v-model="list.contact" />
            </el-form-item>
            <el-form-item label="地区:">
                <el-cascader size="large" :options="options" @change="handleChange" v-model="casc">
                </el-cascader>
            </el-form-item>
            <el-form-item label="详细地址:" prop="address">
                <el-input placeholder="请输入详细地址" width="200px" v-model="list.address" />
            </el-form-item>
            <el-form-item label="邮政编码:" prop="postalCode">
                <el-input placeholder="请输入邮政编码" width="200px" v-model="list.postalCode" />
            </el-form-item>
            <el-form-item label="地址标签:" prop="addressTags">
                <el-input placeholder="请输入地址标签,逗号分隔" width="200px" v-model="list.addressTags" />
            </el-form-item>

        </el-form>
        <template #footer>
            <span class="dialog-footer">
                <el-button @click="colse">取消</el-button>
                <el-button type="primary" @click="enter"> 确定</el-button>
            </span>
        </template>
    </el-dialog>
</template>
<style lang="scss" scoped></style>