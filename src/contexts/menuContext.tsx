import React from 'react'

export const MenuContext = React.createContext({
  setVisible: (visible: boolean) => {},
  visible: false
})
