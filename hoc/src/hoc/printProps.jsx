export const printProps = (Component) => {
  return (props) => {
    console.log(props);

    return (
      <Component
        name={props.name}
        age={props.age}
        email={props.email}
      />
    )
  }
}