import {createSelector} from 'reselect'

const selectUser =  state => state.user;



export const selectAddUser = createSelector(
    [selectUser],
    (user) => user.User
)
