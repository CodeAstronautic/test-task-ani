export const UPDATE_EMAIL = 'UPDATE_EMAIL';
export const UPDATE_PASSWORD = 'UPDATE_PASSWORD';
export const USER_NAME = 'USER_NAME';
export const USER_EMAIL = 'USER_EMAIL';

export const updateEmail = (email) => ({
  type: UPDATE_EMAIL,
  payload: email,
});

export const updatePassword = (password) => ({
  type: UPDATE_PASSWORD,
  payload: password,
});

export const updateName = (name) => ({
  type: USER_NAME,
  payload: name,
});

export const updateUserEmail = (useremail) => ({
  type: USER_EMAIL,
  payload: useremail,
});

