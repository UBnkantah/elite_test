import { getInfo } from "../../store-service/store"

const UserGreetings = () => {
  let user = getInfo()
  return (
    <div>
        <h1 className='display-6'>Welcome, {user.fullname}</h1>
    </div>
  )
}

export default UserGreetings