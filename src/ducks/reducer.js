const initialState = {
  username: '',
  id:'',
  profilepic:''

}
const USER_DATA = 'USER_DATA'
const USER_ID = 'USER_ID'
const PROFILE_PIC = 'PROFILE_PIC'

export function getUserData(user) {
  return {
    type: USER_DATA,
    payload: user
  }
}


export default function reducer(state = initialState, action) {
  switch (action.type) {
    case USER_DATA:
      return Object.assign({}, state, { user: action.payload })

    case USER_ID:
      return Object.assign({}, state, {id: action.payload})

    case PROFILE_PIC:
      return Object.assign({}, state, {profilepic: action.payload})

    default:
      return state
  }
}

export function updateUsername(username){
  return {
    type: USER_DATA,
    payload: username
  }
}

export function updateUserId(id){
  return {
    type: USER_ID,
    payload: id
  }
}

export function updateProfilePic(profilepic){
  return{
    type: PROFILE_PIC,
    payload: profilepic
  }
}
