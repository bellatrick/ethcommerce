import { ethers } from 'ethers';

const Navigation = ({ account, setAccount }) => {
  const connectHandler = async () => {
    try {
      const accounts = await window.ethereum.request({
        method: 'eth_requestAccounts'
      });
      const account = ethers.getAddress(accounts[0]);
      setAccount(account);
     
    } catch (error) {
      if (error.code === 4001) {
        console.error('User denied connection.');
      }
    }
  };

  return (
    <nav>
      <div className='nav__brand'>
        <h1>Ethcommerce</h1>
      </div>

      <input type='text' className='nav__search' />

      {account ? (
        <button type='button' className='nav__connect'>
          {account.slice(0, 6) + '...' + account.slice(38, 42)}
        </button>
      ) : (
        <button type='button' className='nav__connect' onClick={connectHandler}>
          Connect
        </button>
      )}

      <ul className='nav__links'>
        <li>
          <a href='#Clothing & Jewelry'>Clothing & Jewelry</a>
        </li>
        <li>
          <a href='#Electronics & Gadgets'>Electronics & Gadgets</a>
        </li>
        <li>
          <a href='#Toys & Gaming'>Toys & Gaming</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
