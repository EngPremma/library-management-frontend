// import Cookie from 'js-cookie';

// const useAuth = () => {
//   const auth = () => {
//     return {
//       isAuth: Cookie.get('me'),
//       role: Cookie.get('userRole'),
//     };
//   };

//   return { auth };
// };

// export default useAuth;

function useAuth() {
  const checkAuth = () => {
    let isAuth = false;
    const token = localStorage.getItem('access_token');

    if (token) isAuth = true;

    return isAuth;
  };

  return { checkAuth };
}

export default useAuth;
