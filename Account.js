import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Account = () => {
  const [balance, setBalance] = useState(0);

  useEffect(() => {
    const fetchBalance = async () => {
      try {
        const res = await axios.get('/api/account/balance', {
          headers: {
            'x-auth-token': localStorage.getItem('token'),
          },
        });
        setBalance(res.data.balance);
      } catch (err) {
        console.error(err);
      }
    };

    fetchBalance();
  }, []);

  return (
    <div>
      <h1>Account Balance</h1>
      <p>Your balance is ${balance}</p>
    </div>
  );
};

export default Account;
