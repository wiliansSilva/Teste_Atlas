import { http } from './config'

export default {
    getProject:(name) => {
        return http.get('users/'+name+"/repos")
    }
}