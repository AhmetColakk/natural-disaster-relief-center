import { useState, useEffect } from 'react';
import { onAuthStateChanged, GoogleAuthProvider } from 'firebase/auth';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '@/store/auth/authSlice';
import { auth } from '@/services/firebase';
const useAuth = () => {
  const user = useSelector(state => state.auth.user);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => {
      console.log(user);
      const serializedUser = JSON.parse(JSON.stringify(user));
      dispatch(setUser(serializedUser));
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  return { user, loading, GoogleAuthProvider };
};

export default useAuth;
