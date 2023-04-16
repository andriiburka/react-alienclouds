import * as request from "./requester";

const baseUrl = 'http://localhost:3030/jsonstore/catalog'

export const getAll = async () => {Object.values(await request.get(baseUrl))}
export const getOne = async (projectId) => {await request.get(`${baseUrl}/${projectId}`)}
export const create = async (projectData) => {await request.post(baseUrl, projectData)}