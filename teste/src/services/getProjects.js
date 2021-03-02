import { http } from './config'

export default {
    getProject:(name,page) => {
        const token = 'cf62d71c20170ed675c2af50941eeafa83a346ed'
        return http.get('users/'+name+"/repos?per_page="+page,{ headers: {"Authorization" : `Bearer ${token}`} })
    }
}