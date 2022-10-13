export const getGifs = async(category)=>{
    const url =`https://api.giphy.com/v1/gifs/search?api_key=7iaV563OK2Tw8xRxX4hxB5bxYKhYu5pA&q=${category}&limit=10`
    const respuesta = await fetch(url) 
    const { data } = await respuesta.json()
     
    const gifs = data.map(img =>({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }))
    console.log(gifs)
    return gifs;
}