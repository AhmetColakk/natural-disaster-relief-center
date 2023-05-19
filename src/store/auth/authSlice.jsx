import { createSlice } from '@reduxjs/toolkit';
import {
  auth,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  signInWithRedirect,
  createUserWithEmailAndPassword,
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
    setStatus: (state, action) => {
      state.status = action.payload;
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

export const { setUser, removeUser, setError, clearError, setStatus } =
  authSlice.actions;

export const handleSignin = (email, password) => async dispatch => {
  try {
    console.log('signin user');
    dispatch(setError(null));
    dispatch(clearError());
    dispatch(setStatus('loading'));
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
    console.log(error.message);

    switch (error.code) {
      case 'auth/user-not-found':
      case 'auth/invalid-email':
      case 'auth/wrong-password':
        dispatch(setError('Invalid email or password'));
        break;

      case 'auth/network-request-failed':
        dispatch(setError('No internet connection available'));
        break;

      default:
        dispatch(setError('An error occurred. Please try again.'));
        break;
    }
  }
};

export const signOutUser = () => async dispatch => {
  try {
    await signOut(auth);
    dispatch(removeUser());
    console.log('user logout');
  } catch (error) {
    console.log(error);
    switch (error.code) {
      case 'auth/network-request-failed':
        dispatch(setError('No internet connection available'));
        break;

      default:
        dispatch(setError(error.message));
        break;
    }
  }
};
// Async thunk to register a user with email and password
export const registerUserWithEmailAndPassword =
  (email, password) => async dispatch => {
    console.log('register user');
    try {
      dispatch(clearError());
      dispatch(setStatus('loading'));

      const userCredential = await createUserWithEmailAndPassword(
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
      console.log(error.message);
      switch (error.code) {
        case 'auth/email-already-in-use':
          dispatch(setError('Email address is already in use'));
          break;

        case 'auth/invalid-email':
          dispatch(setError('Invalid email address'));
          break;

        case 'auth/weak-password':
          dispatch(setError('Password is too weak'));
          break;

        case 'auth/network-request-failed':
          dispatch(setError('No internet connection available'));
          break;

        default:
          dispatch(setError('An error occurred. Please try again.'));
          break;
      }
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
    switch (error.code) {
      case 'auth/popup-closed-by-user':
        dispatch(setError('Google sign-in popup closed by the user'));
        break;

      case 'auth/network-request-failed':
        dispatch(setError('No internet connection available'));
        break;

      default:
        dispatch(setError('An error occurred. Please try again.'));
        break;
    }
  }
};
export const signinWithGoogle = () => async dispatch => {
  console.log('signin user with google ');
  dispatch(setError(null));
  dispatch(setStatus('loading'));
  dispatch(clearError());
  try {
    console.log('hello');
    const provider = new GoogleAuthProvider();

    const userCredential = await signInWithRedirect(auth, provider);

    if (userCredential) {
      const parsedUser = JSON.parse(JSON.stringify(userCredential.user));
      dispatch(setUser(parsedUser));
    }
  } catch (error) {
    console.log(error);
    switch (error.code) {
      case 'auth/network-request-failed':
        dispatch(setError('No internet connection available'));
        dispatch(setStatus('failed'));

        break;

      default:
        dispatch(setError('An error occurred. Please try again.'));
        dispatch(setStatus('failed'));
        break;
    }
  }
};

export default authSlice.reducer;
