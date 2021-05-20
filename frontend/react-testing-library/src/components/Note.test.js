import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { prettyDOM } from '@testing-library/dom'
import { fireEvent, render } from '@testing-library/react'
import Note from './Note'

test('renders content', () => {
	const note = {
      content: 'Esto es una prueba',
      important: true
    }

    const component = render(<Note note={note} />)

    component.getByText('Esto es una prueba')
    component.getByText('make not important')
    //expect(component.container).toHaveTextContent(note.content)
    //const el = component.getByText('Esto es una prueba')
    //expect(el).toBeDefined()
    //component.debug()
    //const li = component.container.querySelector('li')
    //console.log(li)
    //console.log(prettyDOM(li))
})

test('clicking the button calls event handler once', () => {
  const note = {
      content: 'Esto es una prueba',
      important: true
  }

  const mockHandler = jest.fn()

  const component = render(<Note note={note} toggleImportance={mockHandler} />)

  const button = component.getByText('make not important')
  fireEvent.click(button)

  //expect(mockHandler.mock.calls).toHaveLength(1)
  expect(mockHandler).toHaveBeenCalledTimes(1)
})