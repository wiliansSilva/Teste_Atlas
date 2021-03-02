import { http } from './config'

export default {
    getUser:(id) => {
        const token = 'cf62d71c20170ed675c2af50941eeafa83a346ed'
        return http.get('user/'+id,{ headers: {"Authorization" : `Bearer ${token}`} })
    }
}