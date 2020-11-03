import { shallow } from 'enzyme';
import React from 'react';
import { GifGridItem } from '../../components/GifGridItem';


describe('Pruebas para el componente >GifGridItem', () => {
    
    const title = 'titulo'
    const url = 'https://localhost/algo.jpg'
    const wrapper = shallow(<GifGridItem title = {title} url = {url}/>);

    test('debe mostrar el wrapper', () => { 

        expect(wrapper).toMatchSnapshot();

    });

    test('debe tener un parrafo con el title', () => {
        const p = wrapper.find('p');

        expect(p.text().trim()).toBe(title)
        
    })

    test('debe tener una imagen los los atributos src el url y alt con el title', () => {
        const img = wrapper.find('img');
        
        expect(img.prop('src')).toBe( url );
        expect(img.prop('alt')).toBe( title );
    })

    test('debe de tener un div con la clase animate__fadeIn', () => {
        const div = wrapper.find('div');
        console.log(div.hasClass('animate__fadeIn'));
        expect(div.hasClass('animate__fadeIn')).toBe(true)
    })
    
    
    
    
})
