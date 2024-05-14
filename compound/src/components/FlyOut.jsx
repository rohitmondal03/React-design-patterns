import React from 'react'


export const FlyOutContext = React.createContext();

export function FlyOut({ children }) {
  const [value, setValue] = React.useState("");
  const [open, setOpen] = React.useState(false);

  const toggleInputState = () => setOpen(prev => !prev);

  return (
    <FlyOutContext.Provider value={{ open, toggleInputState, value, setValue }}>
      {children}
    </FlyOutContext.Provider>
  )
}


function Input({ props }) {
  const { toggleInputState, value } = React.useContext(FlyOutContext);

  return (
    <input
      onFocus={toggleInputState}
      onBlur={toggleInputState}
      value={value}
      {...props}
    />
  )
}

function List({ children }) {
  const { open } = React.useContext(FlyOutContext);

  return open && <ul>{children}</ul>
}

function ListItem({ children }) {
  const { setValue, toggleInputState } = React.useContext(FlyOutContext);

  return (
    <li
      onMouseOver={() => setValue(children)}
      onClick={() => {
        setValue(children)
        toggleInputState()
      }}
    >
      {children}
    </li>
  )
}


FlyOut.Input = Input;
FlyOut.List = List;
FlyOut.ListItem = ListItem;