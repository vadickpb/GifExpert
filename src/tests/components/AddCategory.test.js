import React from 'react';
import '@testing-library/jest-dom'

const { shallow } = require("enzyme")
const { AddCategory } = require("../../components/AddCategory")

describe('Pruebas en el componente AddCategory', () => {
    
    const setCategories = jest.fn();
    let wrapper = shallow(<AddCategory setCategories = {setCategories} />);

    beforeEach( () => {
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories = {setCategories} />);
    })

    test('Debe mostrar el wrapper', () => {
        expect(wrapper).toMatchSnapshot();
    })

    test('debe mostrar la caja de texto', () => {
        const input = wrapper.find('input');
        let value = 'hola mundo';

        input.simulate('change', {target : {value}});

        expect(wrapper.find('p').text().trim()).toBe(value)

    })
    
    test('NO debe postear la información con el submit', () => {
        wrapper.find('form').simulate('submit', { preventDefault(){} });

        expect(setCategories).not.toHaveBeenCalled();
    })

    test('Debe de llamar el setCategories y limpiar la caja de texto', () => {
        const value = 'hola mundo';
        
        // 1. Simular el inputChange
        wrapper.find('input').simulate('change', {target: {value}});
        // 2. Simular el Submit
        wrapper.find('form').simulate('submit', {preventDefault(){}});
        // 3. setCategories se debe haber llamado
        expect(setCategories).toHaveBeenCalled();
        // 4. El valor del input debe estar ''
        expect(wrapper.find('input').prop('value')).toBe('');
    })
    
    
    
})
