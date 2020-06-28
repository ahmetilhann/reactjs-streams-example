import { SING_IN, SING_OUT } from './types';

export const signIn = (userId) => ({
    type: SING_IN,
    payload: userId,
});

export const signOut = () => ({
    type: SING_OUT,
});
