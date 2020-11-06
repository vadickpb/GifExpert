import { shallow } from 'enzyme';
import React from 'react';
import GifExpertApp from '../GifExpertApp';

import '@testing-library/jest-dom'

describe('Pruebas en <GifExpertApp />>', () => {
    
    test('debe mostrar el contenido', () => {
        
        const wrapper = shallow(<GifExpertApp />)
        expect(wrapper).toMatchSnapshot()

    })

    test('Debe mostrar una lista de categorias', () => {
        const defaultCategories = ['One Punch', 'Goku'];
        const wrapper = shallow(<GifExpertApp defaultCategories = {defaultCategories} />)

        expect(wrapper).toMatchSnapshot()
        expect(wrapper.find('GifGrid').length).toBe(defaultCategories.length )
    })
    
    
})
