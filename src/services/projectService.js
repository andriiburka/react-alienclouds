import * as request from "./requester";

const baseUrl = 'http://localhost:3030/jsonstore/all-projects'

export const getAll = async () => {
    const objectResponse = await request.get(baseUrl)
    return Object.values(objectResponse)
}

export const getOne = async () => {

}

export const create = async (projectData) => {
    const result = await request.post(baseUrl, projectData)
    console.log(result)
    return result
}