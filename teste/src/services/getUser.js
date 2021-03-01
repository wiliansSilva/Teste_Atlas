import { http } from './config'

export default {
    getUser:(id) => {
        
        return http.get('user/'+id)
    }
}