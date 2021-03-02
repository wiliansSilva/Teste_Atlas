import { http } from './config'

export default {
    listUser:() => {
        return http.get('users')
    },
    listPerPage:(page)=>{
        const token = 'cf62d71c20170ed675c2af50941eeafa83a346ed'
        return http.get('users?per_page='+page,{ headers: {"Authorization" : `Bearer ${token}`} })
    }
}