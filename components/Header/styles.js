import { styled } from 'styletron-react'

export const Container = styled('header', (props) => ({
  marginBottom: '25px'
}))

export const LinkText = styled('span', (props) => ({
  fontSize: '14px',
  marginRight: '15px',
  textDecoration: props.isActive ? 'underline' : 'none'
}))
