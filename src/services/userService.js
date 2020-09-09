import http from "./httpService";

export function register(user) {
  return http.post(process.env.REACT_APP_API_URL + '/users', {
    email: user.email,
    password: user.password,
    firstName: user.firstName,
    lastName: user.lastName,
    phone: user.phone,
  });
}
