import styled from 'react-emotion'

export const Container = styled('header')({
  marginBottom: '25px'
})

export const LinkText = styled.span(props => ({
  fontSize: '14px',
  marginRight: '15px',
  textDecoration: props.isActive ? 'underline' : 'none'
}))
