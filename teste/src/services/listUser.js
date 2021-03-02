import { http } from './config'

export default {
    listUser:() => {
        return http.get('users')
    },
    listPerPage:(page)=>{
        const token = '9aeb94853d6beda0f0feed61fcc783f9fca36b57'
        return http.get('users?per_page='+page,{ headers: {"Authorization" : `Bearer ${token}`} })
    }
}