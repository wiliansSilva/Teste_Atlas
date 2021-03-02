import { http } from './config'

export default {
    getUser:(id) => {
        const token = '9aeb94853d6beda0f0feed61fcc783f9fca36b57'
        return http.get('user/'+id,{ headers: {"Authorization" : `Bearer ${token}`} })
    }
}