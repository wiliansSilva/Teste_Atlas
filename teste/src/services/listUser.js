import { http } from './config'

export default {
    listUser:() => {
        return http.get('users')
    },
    listPerPage:(page)=>{
        return http.get('users?per_page='+page)
    }
}