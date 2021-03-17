import {createSelector} from 'reselect';

const selectUser = state => state.user;

export const selectCurrentUser = createSelector(
    [selectUser],                   //array of input selector or it can be of output selector
    (user) => user.currentUser        //return of the above array
)