import * as request from "./lib/request.js"

const baseUrl = 'http://localhost:3030/jsonstore/catalog'

export const getAll = async () => Object.values(await request.get(baseUrl))  //brief info
export const getOne = async (projectId) => await request.get(`${baseUrl}/${projectId}`)  //detailed info
export const create = async (projectData) => await request.post(baseUrl, projectData)

