const baseUrl = process.env.API_BASE
const serviceKey = process.env.SERVICE_KEY

export default async function (count = 5) {

    // Собрать объект запроса
    const requestObject = new FormData()
    requestObject.append('domain', 'lovelegend')
    requestObject.append('count', count)
    requestObject.append('access_token', serviceKey)
    requestObject.append('v', 5.199)

    const response = await fetch(`${baseUrl}/method/wall.get`, {
        method: 'POST',
        body: requestObject
    })

    const result = await response.json()

    return result?.response?.items
}