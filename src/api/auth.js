import api from '@/api/api'

export default {
    login(email, password) {
        return api
            .post('users/login', {
                user: {email, password}
            })
    },
    register(username, email, password) {
        return api
            .post('users', {
                user: {
                    username,
                    email,
                    password
                }
            })
    },
    
}