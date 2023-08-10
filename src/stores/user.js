import { defineStore } from 'pinia'
import { ref } from 'vue'
import {loginAPI} from '@/apis/user.js'
export const useUserStore = defineStore('user', () => {
    const userInfo = ref({})
    const getUserInfo = async ({password,account}) => {
     const res=   await loginAPI({password,account})
        userInfo.value = res.result
    }
    return{userInfo,getUserInfo}
},
{ persist: true} 
)