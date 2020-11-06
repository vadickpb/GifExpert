const { renderHook } = require("@testing-library/react-hooks");
const { useFetchGif } = require("../../hooks/useFetchGif")

describe('Pruebas en el hook useFetchGif', () => {
    
    test('Debe retornar el estado inicial', async () => {
        
        //const {data, loading} = useFetchGif('One Punch');

        const {result, waitForNextUpdate}  = renderHook(() => useFetchGif('One Punch'));
        const {data, loading} =result.current;

        await waitForNextUpdate();

        expect(data).toEqual([]);
        expect(loading).toBe(true);

        
    })

    test('Debe retornar un arreglo de 10 imgs', async() => {
        
        const {result, waitForNextUpdate} = renderHook( () => useFetchGif( 'One Punch' ));

        await waitForNextUpdate();
        const {data, loading} = result.current;


        expect(data.length).toBe(10);
        expect(loading).toBe(false);

    })
    
    
})
