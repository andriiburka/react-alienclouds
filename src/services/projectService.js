import * as request from "./requester";


const baseUrl = 'http://localhost:3030/jsonstore/projects'


export const getAll = async () => {
    const objectResponse = await request.get(baseUrl)
    const arrayResponse = Object.values(objectResponse)
    return arrayResponse
}