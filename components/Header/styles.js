import glamorous from 'glamorous'

export const Container = glamorous.header({
  marginBottom: '25px'
})

export const LinkText = glamorous.span({
  fontSize: '14px',
  marginRight: '15px'
}, (props) => ({
  textDecoration: props.isActive ? 'underline' : 'none'
}))
