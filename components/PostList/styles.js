import glamorous from 'glamorous'

export const Container = glamorous.section({
  paddingBottom: '20px'
})

export const List = glamorous.ul({
  margin: 0,
  padding: 0
})

export const ListItem = glamorous.li({
  display: 'block',
  marginBottom: '10px'
})

export const ListItemContainer = glamorous.div({
  alignItems: 'center',
  display: 'flex'
})

export const Num = glamorous.span({
  fontSize: '14px',
  marginRight: '5px'
})

export const A = glamorous.a({
  fontSize: '14px',
  marginRight: '10px',
  textDecoration: 'none',
  paddingBottom: 0,
  border: 0
})

export const Button = glamorous.button({
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
})
