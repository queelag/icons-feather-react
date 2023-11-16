import { render } from '@testing-library/react'
import React from 'react'
import { describe, it } from 'vitest'
import { IconFeatherActivity } from '../src/components/activity'

describe('Activity', () => {
  it('renders', () => {
    render(<IconFeatherActivity />)
  })
})
