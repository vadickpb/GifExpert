import React from 'react';
import { useFetchGif } from '../../hooks/useFetchGif';
const { shallow } = require("enzyme")
const { GifGrid } = require("../../components/GifGrid")
jest.mock('../../hooks/useFetchGif');

describe('Pruebas en <GifGrid.js />', () => {
    
    const category = 'One Punch';

    test('Debe mostrarse correctamente', () => {

        useFetchGif.mockReturnValue({
            data: [], 
            loading: true
        })

        const wrapper = shallow(<GifGrid category =  {category} />);
        expect(wrapper).toMatchSnapshot();

    })

    test('deben mostrarse los items cuando se cargan las imagenes en UseFetchGifs ', () => {

        const gifs = [{
            id: 'ABC',
            url: 'http://cualquiercosa.com',
            title: 'Cualquier cosa'
        }]

        useFetchGif.mockReturnValue({
            data: gifs, 
            loading: false
        })
        const wrapper = shallow(<GifGrid category =  {category} />);
        
        expect(wrapper).toMatchSnapshot()
        expect(wrapper.find('p').exists()).toBe(false);
        expect(wrapper.find('GifGridItem').length).toBe(gifs.length)
        
    })
    


    
})
