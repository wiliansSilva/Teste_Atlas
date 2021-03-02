import { http } from './config'

export default {
    getProject:(name,page) => {
        const token = '9aeb94853d6beda0f0feed61fcc783f9fca36b57'
        return http.get('users/'+name+"/repos?per_page="+page,{ headers: {"Authorization" : `Bearer ${token}`} })
    }
}