import { AppBar } from '@mui/material'
import { Button } from '@mui/material'
import { Toolbar } from '@mui/material'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { userLogout } from '../reducers/loginReducer'

const Nav = ({ user }) => {
  const dispatch = useDispatch()
  const style = {
    marginLeft: '3rem',
    display: 'flex',
    gap: '2rem',
    alignItems: 'center',
  }

  return (
    <AppBar position="static">
      <Toolbar style={{ justifyContent: 'space-between' }}>
        {/* <div style={{ display: 'flex', justifyContent: 'space-between' }}> */}
        <div>
          <Button color="inherit" component={Link} to="/">
            Home
          </Button>
          <Button color="inherit" component={Link} to="/blogs">
            Blogs
          </Button>
          <Button color="inherit" component={Link} to="/users">
            Users
          </Button>
        </div>
        <div>
          {user ? (
            <div style={style}>
              <em>{user} is logged in</em>
              <Button
                onClick={() => dispatch(userLogout())}
                color="secondary"
                variant="contained"
              >
                Logout
              </Button>
            </div>
          ) : (
            <Button color="inherit" component={Link} to="/login">
              login
            </Button>
          )}
        </div>
        {/* </div> */}
      </Toolbar>
    </AppBar>
  )
}

export default Nav
