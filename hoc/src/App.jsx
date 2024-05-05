import { printProps } from './hoc/printProps'
import { UserInfo } from './UserInfo'
import './App.css'

const UserInfoWithPrintProps = printProps(UserInfo);

function App() {
  return (
    <>
      <UserInfoWithPrintProps
        name="John Doe"
        age={25}
        email="johndoe@gmail.com"
      />
      <hr />
      <UserInfoWithPrintProps
        name="Rohit"
        age={21}
        email="rohit@yahoo.com"
      />
      <hr />
      <UserInfoWithPrintProps
        name="Adrea"
        age={32}
        email="andrea@gmail.com"
      />
    </>
  )
}

export default App
