import React, { createContext, useEffect, useMemo, useState, useContext } from 'react';
import Cookie from 'js-cookie';
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
        const { data: response } = await axios.get(`${process.env.REACT_APP_NODE_API}/api/auth/get-me`);

        setMe(response.user);
      } catch (error) {
        console.log('error get me', error);
      }
    };
    // if cookie's name is `me` === `true` run getMe function
    Cookie.get('me') === 'true' && getMe();
  }, []);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export default UserContextProvider;
