import React, { createContext, useEffect, useMemo, useState, useContext } from 'react';
import axios from 'axios';

export const UserContext = createContext({
  me: null,
  setMe: () => {},
});

export const useUserContext = () => useContext(UserContext);

const UserContextProvider = ({ children }) => {
  const [me, setMe] = useState(null);

  const value = useMemo(() => ({ me, setMe }), [me, setMe]);

  useEffect(() => {
    const getMe = async () => {
      try {
        const { data: response } = await axios.get('/users/auth/me');
        console.log('response :>> ', response);
        setMe({ username: response.username });
      } catch (error) {
        console.log('error get me', error);
      }
    };
    getMe();
    // if cookie's name is `me` === `true` run getMe function
    // Cookie.get('me') === 'true' && getMe();
  }, []);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export default UserContextProvider;
