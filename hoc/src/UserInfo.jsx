export function UserInfo({name, age, email, style}) {
  return (
    <div style={style}>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>E-Mail: {email}</p>
    </div>
  )
}
