import { auth } from '@/services/firebase';

export const registerUser = (email, password) => {
  return async dispatch => {
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password,
      );
      dispatch({ type: 'AUTH_REGISTER_SUCCESS', payload: user.email });
    } catch (error) {
      dispatch({ type: 'AUTH_REGISTER_FAILURE', payload: error.message });
    }
  };
};
