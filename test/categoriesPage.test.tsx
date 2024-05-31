import Categories from '../src/pages/Categories'
import { render, screen, cleanup, fireEvent } from '@testing-library/react'
import React from 'react'
import { describe, it, expect, afterEach } from 'vitest'

describe('Categories', () => {
    afterEach(cleanup)
    it('should render', () => {
        render(<Categories/>)
    })
})