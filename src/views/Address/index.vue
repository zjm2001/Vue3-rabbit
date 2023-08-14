<script setup>
import { getAddressAPI, delAddressAPI } from '@/apis/address.js'
import { ElMessage } from 'element-plus'
import AddressEdit from '@/views/Address/components/AddressEdit.vue';
import { onMounted, ref } from 'vue';
const addressList = ref({})
const getList = async () => {
    const res = await getAddressAPI()
    addressList.value = res.result
}
onMounted(() => getList())

//删除操作
const del = async (id) => {
    await delAddressAPI(id)
    getList()
    ElMessage.success('删除成功')

}
const lod = ref()  //子组件
//添加 或者修改
const deit = async (val) => {
    lod.value.open(val)
}
//
// 更新父组件
const fn = () => {
    getList()
}

</script>
<template>
    <div class="container">
        <div class="box">
            <el-row class="row-add" justify="end">
                <el-col :span="2"> <el-button size="large" @click="deit({})">添加地址</el-button></el-col>
            </el-row>
            <div class="box-body">
                <div class="address" v-for="item in addressList" :key="item.id">
                    <div class="text">
                        <ul>
                            <li><span>收<i />货<i />人：</span>{{ item.receiver }}</li>
                            <li><span>联系方式：</span>{{ item.contact }}</li>
                            <li><span>收货地址：</span>{{ item.fullLocation }} {{ item.address }}</li>
                        </ul>
                    </div>
                    <div class="action">
                        <el-button size="large" @click="deit(item)">修改</el-button>
                        <el-popconfirm title="确认删除吗?" confirm-button-text="确认" cancel-button-text="取消"
                            @confirm="del(item.id)">
                            <template #reference>
                                <el-button size="large">删除</el-button>
                            </template>
                        </el-popconfirm>

                    </div>
                </div>
            </div>
        </div>

    </div>
    <AddressEdit ref="lod" @getDate="fn"></AddressEdit>
</template> 
<style lang="scss" scoped>
.box {
    margin-top: 20px;
    background: #fff;
    padding: 50px 20px;

}

.row-add {
    margin-bottom: 20px;
}

.box-body {
    border-bottom: 1px solid #f5f5f5;
}

.address {
    border: 1px solid #f5f5f5;
    display: flex;
    align-items: center;

    .text {
        flex: 1;
        min-height: 90px;
        display: flex;
        align-items: center;

        .none {
            line-height: 90px;
            color: #999;
            text-align: center;
            width: 100%;
        }

        >ul {
            flex: 1;
            padding: 20px;

            li {
                line-height: 30px;

                span {
                    color: #999;
                    margin-right: 5px;

                    >i {
                        width: 0.5em;
                        display: inline-block;
                    }
                }
            }
        }

        >a {
            color: $xtxColor;
            width: 160px;
            text-align: center;
            height: 90px;
            line-height: 90px;
            border-right: 1px solid #f5f5f5;
        }
    }

    .action {
        width: 420px;
        text-align: center;

        .btn {
            width: 140px;
            height: 46px;
            line-height: 44px;
            font-size: 14px;

            &:first-child {
                margin-right: 10px;
            }
        }
    }
}
</style>