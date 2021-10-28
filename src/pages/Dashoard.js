import {useAuth, logout} from '../context'

export function Dashoard() {
  
  const { user } = useAuth()

  const handleLogout = () => {
    logout()
  }
  
  return <div>
    <h1>welcome {user.email}</h1>

    <button onClick={handleLogout}>
      Logout
    </button>
  </div>;
}
