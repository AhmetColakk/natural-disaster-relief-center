import { createSlice } from '@reduxjs/toolkit';
import {
  auth,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  signInWithRedirect,
} from './../../services/firebase';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    status: 'idle',
    error: null,
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      state.status = 'succeeded';
    },
    removeUser: state => {
      state.user = null;
      state.status = 'succeeded';
    },
    setError: (state, action) => {
      state.error = action.payload;
      state.status = 'failed';
    },
    clearError: state => {
      state.error = null;
      state.status = 'idle';
    },
  },
});

export const { setUser, removeUser, setError, clearError } = authSlice.actions;

export const handleSignin = (email, password) => async dispatch => {
  try {
    console.log('signin user');
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password,
    );
    const user = userCredential.user;

    if (user) {
      const parsedUser = JSON.parse(JSON.stringify(user));
      dispatch(setUser(parsedUser));
    }
  } catch (error) {
    dispatch(setError(error.message));
  }
};

export const signOutUser = () => async dispatch => {
  try {
    await signOut(auth);
    dispatch(removeUser());
    console.log('user logout');
  } catch (error) {
    console.log(error);
    dispatch(setError(error.message));
  }
};
// Async thunk to register a user with email and password
export const registerUser = (email, password) => async dispatch => {
  console.log('register user');

  try {
    dispatch(clearError());
    dispatch(setStatus('loading'));

    // Create a new user with email and password
    const userCredential = await auth.createUserWithEmailAndPassword(
      email,
      password,
    );
    const user = userCredential.user;
    if (user) {
      const parsedUser = JSON.parse(JSON.stringify(user));
      dispatch(setUser(parsedUser));
    }
  } catch (error) {
    dispatch(setError(error.message));
  }
};
export const registerWithGoogleUser = () => async dispatch => {
  console.log('register user with google ');

  try {
    dispatch(clearError());

    const provider = new GoogleAuthProvider();

    const userCredential = await signInWithPopup(auth, provider);
    if (userCredential) {
      const parsedUser = JSON.parse(JSON.stringify(userCredential.user));
      dispatch(setUser(parsedUser));
    }
  } catch (error) {
    console.log(error);
    dispatch(setError(error.message));
  }
};
export const signinWithGoogle = () => async dispatch => {
  console.log('signin user with google ');

  try {
    dispatch(clearError());

    const provider = new GoogleAuthProvider();

    const userCredential = await signInWithRedirect(auth, provider);
    if (userCredential) {
      const parsedUser = JSON.parse(JSON.stringify(userCredential.user));
      dispatch(setUser(parsedUser));
    }
  } catch (error) {
    console.log(error);
    dispatch(setError(error.message));
  }
};

export default authSlice.reducer;