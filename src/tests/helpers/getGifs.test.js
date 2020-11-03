const { getGifs } = require("../../helpers/getGifs")

describe('Pruebas en el helper getGifs', () => {
    test('debe devolver un array de 10 elementos', async() => {
        const gifs = await getGifs('category');
        
        expect(gifs.length).toBe(10);
    })

    test('debe retornar un arreglo vacio en caso no tenga argumento ', async() => {
        const gifs = await getGifs('');
        //console.log(gifs);
        expect(gifs.length).toBe(0);
    })
    
    
})
