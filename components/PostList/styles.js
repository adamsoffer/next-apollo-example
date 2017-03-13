import { styled } from 'styletron-react'

export const Container = styled('section', (props) => ({
  paddingBottom: '20px'
}))

export const List = styled('ul', (props) => ({
  margin: 0,
  padding: 0
}))

export const ListItem = styled('li', (props) => ({
  display: 'block',
  marginBottom: '10px'
}))

export const ListItemContainer = styled('div', (props) => ({
  alignItems: 'center',
  display: 'flex'
}))

export const Num = styled('span', (props) => ({
  fontSize: '14px',
  marginRight: '5px'
}))

export const A = styled('a', (props) => ({
  fontSize: '14px',
  marginRight: '10px',
  textDecoration: 'none',
  paddingBottom: 0,
  border: 0
}))

export const Button = styled('button', (props) => ({
  ':before': {
    alignSelf: 'center',
    borderColor: '#ffffff transparent transparent transparent',
    borderStyle: 'solid',
    borderWidth: '6px 4px 0 4px',
    content: '""',
    height: 0,
    marginRight: '5px',
    width: 0
  }
}))
