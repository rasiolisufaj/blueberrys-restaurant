export default interface User {
  id?: any | null,
  name: string,
  email: string,
  phone: string,
  password: string,
  roles?: Array<string>
}

export  interface FormUser {
  user: User;
}