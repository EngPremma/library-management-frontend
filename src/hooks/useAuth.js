import Cookie from 'js-cookie';

const useAuth = () => {
  const auth = () => {
    return {
      isAuth: Cookie.get('me'),
      role: Cookie.get('userRole'),
    };
  };

  return { auth };
};

export default useAuth;

// import jwt from 'jsonwebtoken';

// function useAuth() {
//   const token = localStorage.getItem('token');
//   const decodedToken = jwt.decode(token);
//   const dateNow = Date.now() / 1000;

//   const isAuth = () => {
//     let isAuth = false;
//     if (token) {
//       if (decodedToken?.exp > dateNow) {
//         isAuth = true;
//       } else {
//         localStorage.clear();
//         isAuth = false;
//       }
//     }
//     return isAuth;
//   };

//   // console.log('isAuth:', isAuth());
//   // console.log('decodedToken:', decodedToken);

//   return {
//     isAuth,
//     decodedToken,
//   };
// }

// export default useAuth;
