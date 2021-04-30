import {global} from './global'

//Eventos


export const getEvent = async () => {
    const info = []
    const response = await fetch(global.url+'/eventos/',{
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    })
    info.push(await response.json())
    return info
}



export const deleteEvent = async (id) =>
{
    const response = await fetch(global.url+'/eventos/'+id,{
        method:'DELETE',
        headers:{'Content-Type': 'application/json'}
    })
    return response
}




export const updateEvent = async (id,nombre,fecha,descripcion) =>
{
    const data = {nombre:nombre,fecha:fecha,descripcion:descripcion}
    const response = await fetch(global.url+'/eventos/'+id,{
        method:'PUT',
        body:JSON.stringify(data),
        headers:{'Content-Type': 'application/json'}
    })
    return response
}