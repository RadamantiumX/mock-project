import Auth from '../src/pages/Auth'
import { render, cleanup } from '@testing-library/react'
import React from 'react'
import { describe, it, afterEach } from 'vitest'

describe('Auth', () => {
    afterEach(cleanup) // Clean RENDER
    it('should render', () => {
        render(<Auth/>)
    })
})