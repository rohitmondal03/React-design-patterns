export const printProps = (Component) => {
  return (props) => {
    console.log(props);

    /* Common properties that I want in returned component */
    const styles = {
      backgroundColor: "red",
      color: "white",
      padding: "10px",
      margin: "10px",
      borderRadius: "10px",
    }

    return (
      <Component
        style={styles}
        name={props.name}
        age={props.age}
        email={props.email}
      />
    )
  }
}