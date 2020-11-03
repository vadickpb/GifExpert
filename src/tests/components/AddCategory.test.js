const { shallow } = require("enzyme")
const { AddCategory } = require("../../components/AddCategory")
import React from 'react';
describe('Pruebas en el componente AddCategory', () => {
    
    const setCategories = () =>{}
    const wrapper = shallow(<AddCategory setCategories = {setCategories} />)

    test('Debe mostrar el wrapper', () => {
        expect(wrapper).toMatchSnapshot();
    })

    // test('debe cambiar la caja de texto', () => {
    //     const input = wrapper.find('input');
    //     const value = 'hola mundo';
    //     input.simulate('change', {target : { value }})
        
    //     expect(wrapper.find('p').text().trim()).toBe(value);
    // })
    
    
})
