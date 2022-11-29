import {render,screen} from '@testing-library/react'
import React from 'react';
import '@testing-library/jest-dom'
import Login from './Components/Login';
import { BrowserRouter} from 'react-router-dom'


describe('Login', () => {

    test('should login page be rendred', () => { 
        render(
            <BrowserRouter>
                <Login />
            </BrowserRouter>
        )
        const email = screen.getByPlaceholderText(/Email/i)
        const password = screen.getByPlaceholderText(/Password/i)

        expect(email).toBeInTheDocument()
        expect(password).toBeInTheDocument()
    })
})