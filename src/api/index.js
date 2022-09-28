import axios from 'axios'
import { usersDataSerializer } from './mock'
import { petsMockData } from './mock/pet'

const instance = axios.create({
    baseURL: 'https://someapi.com/api/v1/',
    headers: {
        'Content-Type': 'application/json'
    }
})

export const petApi = {
    async createNewPet(data) {
        try {
            const res = await instance.post('pet', data)
            return usersDataSerializer(res.data)
        } catch(err) {
            return petsMockData
        }
    },
    updatePet(id, data) {
        return instance.put(`pet/${id}`, data)
            .catch(e => {
                return Promise.resolve(petsMockData)
            })
    }
}

export const storeApi = {
    
}