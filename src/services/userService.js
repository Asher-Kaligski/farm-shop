import http from "./httpService";

export function register(user) {
  return http.post(process.env.REACT_APP_API_URL, {
    email: user.username,
    password: user.password,
    name: user.name
  });
}
