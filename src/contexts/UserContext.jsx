import React, { useContext, useState, useEffect } from 'react';
import { auth } from "../firebase/config";
import { onAuthStateChanged } from "../firebase/functions";

const UserContext = React.createContext();

export const useUser = () => {
  return useContext(UserContext);
};

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    onAuthStateChanged(auth, user => {
      setUser(user);
      setLoading(false);
    })
  }, []);

  return (
    <UserContext.Provider value={user}>
      {!loading && children}
    </UserContext.Provider>
  )
}


