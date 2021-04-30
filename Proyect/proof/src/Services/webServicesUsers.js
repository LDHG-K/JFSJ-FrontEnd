import {global} from './global'

export const getUser = async () => {

    const info = []
    const response = await fetch(global.url+'/usuarios',{
        method: 'GET',
        headers: {

            'Accept': 'application/json',
            'Content-Type': 'application/json'

        }
    })
    info.push(await response.json())
    return info
}

export const postUser = async (user) => {
    const response = await fetch(global.url+'/usuarios',{

        method: 'POST',
        body:JSON.stringify(user),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'


        }
    })
    return response
}