export default interface User {
  id?: any | null,
  name: string,
  password: string,
  roles?: Array<string>
}