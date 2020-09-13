import http from "./httpService";
import authService from "./authService";

const apiEndpoint = "/users";


export async function getById() {
  
  const customerId = authService.getCurrentUser()._id;

  const { data: user } = await http.get(apiEndpoint + '/' + customerId);
  
   return user;
}

export function register(user) {
  return http.post(apiEndpoint, {
    email: user.email,
    password: user.password,
    firstName: user.firstName,
    lastName: user.lastName,
    phone: user.phone,
  });
}
export function update(user) {
  const customerId = authService.getCurrentUser()._id;
  return http.put(apiEndpoint + '/' + customerId, {
    email: user.email,
    password: user.password,
    firstName: user.firstName,
    lastName: user.lastName,
    phone: user.phone,
  });
}



export default {
  getById,
  register,
  update
};

// export function register(user) {
//   return http.post(process.env.REACT_APP_API_URL + '/users', {
//     email: user.email,
//     password: user.password,
//     firstName: user.firstName,
//     lastName: user.lastName,
//     phone: user.phone,
//   });
// }
