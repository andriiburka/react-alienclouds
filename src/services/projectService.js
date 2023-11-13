import * as request from "./lib/request";

const baseUrl = 'http://localhost:3030/jsonstore/catalog'


// BRIEF INFO
export const getAll = async () => {
    return Object.values(await request.get(baseUrl))
}

// FULL INFO
export const getOne = async (projectId) => {
    const result = await request.get(`${baseUrl}/${projectId}`)
    console.log(result)

    return result
}

export const create = async (projectData) => {
    return await request.post(baseUrl, projectData)
}


// export const update = async () => {
//     return
// }


// export const delete = async () => {
//     return
// }