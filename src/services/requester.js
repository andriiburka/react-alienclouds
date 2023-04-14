const request = async (method, url) => {
    const response = await fetch(url, {
        method,
    })

    try {
        return await response.json()
    } catch (err) {
        return {}
    }
}


// PARTIAL APPLICATION
export const get = request.bind(null,'GET')
export const post = request.bind(null,'POST')
export const put = request.bind(null,'PUT')
export const patch = request.bind(null,'PATCH')
export const del = request.bind(null,'DELETE')