import { Menu, Dropdown } from 'antd';

import './Navbar.scss';


const Navbar = () => {


  const onClick = ({key}: any) => {
    console.log(key, 'clicked!')
  };

  const menuStyle = {
    backgroundColor: '#09111A',
    border: 'solid 1px lightgray'
  }

  const menu = (
    <Menu
      theme='dark'
      style={menuStyle}    
      onClick={onClick}
      items={[
        {
          label: 'Stocks',
          key: 'stock',
        },
        {
          label: 'Crypto',
          key: 'crypto',
        },
        {
          label: 'NFT',
          key: 'nft',
        },
      ]}
    />
  );

  return (
    <header className="header">
      <nav className="topNavbar">
        <a href="/">
          <h1 className="logo">FinWiz</h1>
        </a>

        <ul className="navLinks">
          <li className="navLink">
          <a href="/">Profile</a>          
          </li>
          <Dropdown overlay={menu}>
          <li className="navLink">
            <a className='drop' onClick={e => e.preventDefault()}>
              Investments
            </a>
            </li>
          </Dropdown>   
          <Dropdown overlay={menu}>
          <li className="navLink">
            <a className='drop' onClick={e => e.preventDefault()}>
              Browse
            </a>
            </li>
          </Dropdown>          
          <li className="navLink">
            <a href="/">Logout</a>            
          </li>
          
        </ul>
      </nav>    
    </header>
  )
}

export default Navbar;