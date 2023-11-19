// import * as request from "./lib/request.js"
import * as request from "./lib/requester.js"

const baseUrl = 'http://localhost:3030/jsonstore/catalog'
// const baseUrl = 'http://localhost:3030/data'
export const getAll = async () => Object.values(await request.get(baseUrl))   // brief info
export const getOne = async (projectId) => await request.get(`${baseUrl}/${projectId}`)   // full info
// export const create = async (projectData) => await request.post(baseUrl, projectData)
export const create = async (projectData, token) => {
    let response = await fetch(`${baseUrl}/catalog`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'X-Authorization': token,
        },
        body: JSON.stringify({...projectData})
    })

    return await response.json()
}

//
// import * as request from '../services/lib/requester'
// import project from "../components/catalog/project-shown-in-catalog/Project";
// const baseUrl = 'http://localhost:3030/data'
// export const getAll = () => request.get(`${baseUrl}/catalog`);
//
// // //=========================================================================
// // export const getMyProjects = (ownerId) => {
// //     let query = encodeURIComponent(`_ownerId="${ownerId}"`);
// //     return request.get(`${baseUrl}/catalog?where=${query}`);
// // }//========================================================================
//
// export const create = async (projectData, token) => {
//     let response = await fetch(`${baseUrl}/catalog`, {
//         method: 'POST',
//         headers: {
//             'content-type': 'application/json',
//             'X-Authorization': token,
//         },
//         body: JSON.stringify({...projectData})
//     })
//
//     return await response.json()
// };
//
// export const update = (projectId, projectData) => request.put(`${baseUrl}/pets/${projectId}`, projectData);
//
// export const getOne = (projectId, signal) => {
//     return fetch(`${baseUrl}/catalog/${projectId}`, { signal })
//         .then(response => response.json())
// };
//
// export const destroy = (projectId, token) => {
//     return fetch(`${baseUrl}/catalog/${projectId}`, {
//         method: 'DELETE',
//         headers: {
//             'X-Authorization': token
//         }
//     }).then(response => response.json());
// };
//
// // export const like = (petId, pet, token) => {
// //     return fetch(`${baseUrl}/catalog/${projectId}`, {
// //         method: 'PUT',
// //         headers: {
// //             'content-type': 'application/json',
// //             'X-Authorization': token
// //         },
// //         body: JSON.stringify(pet)
// //     }).then(response => response.json());
// // };