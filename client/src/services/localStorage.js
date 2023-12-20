export const saveLocalStorage = (email, username) => {
  localStorage.setItem("email", email);
  localStorage.setItem("username", username);
};
