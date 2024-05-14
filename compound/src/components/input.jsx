import { FlyOut } from "./FlyOut"

export function Input() {
  return (
    <FlyOut>
      <FlyOut.Input />
      <FlyOut.List>
        <FlyOut.ListItem>Item 1</FlyOut.ListItem>
        <FlyOut.ListItem>Item 2</FlyOut.ListItem>
        <FlyOut.ListItem>Item 3</FlyOut.ListItem>
        <FlyOut.ListItem>Item 4</FlyOut.ListItem>
      </FlyOut.List>
    </FlyOut>
  )
}
