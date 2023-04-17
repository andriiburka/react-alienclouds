import * as request from "./requester";

const baseUrl = 'http://localhost:3030/jsonstore/catalog'


// BRIEF INFO
export const getAll = async () => {
    return Object.values(await request.get(baseUrl))
}


// FULL INFO
export const getOne = async (projectId) => {
    return await request.get(`${baseUrl}/${projectId}`)
}

export const create = async (projectData) => {
    return await request.post(baseUrl, projectData)
}