import { Button } from 'antd'

import './styles/BodyOne.scss'

const BodyOne = () => {
  return (
    <div className='bodyOneContainer'>
      <div>
        <h1 className='bodyOneTitle'>FinWiz</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea officia optio voluptate dolores quos illum velit.
        Ea officia optio voluptate dolores quos illum velit aut minus ad.</p>
      </div>
    <div className='bodyOneButtons'>
        <Button>Signup</Button>
        <Button>Login</Button>
      </div>
    </div>
  )
}

export default BodyOne