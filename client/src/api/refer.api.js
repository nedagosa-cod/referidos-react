import axios from 'axios'

export const createRefer = async (refer) => 
    await axios.post('http://localhost:3006/referir', refer)
