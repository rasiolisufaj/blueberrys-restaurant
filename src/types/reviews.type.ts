import User from "./user.type";

export default interface Review {
  id?: string,
  rank: number,
  name: string,
  comment: string,
  user?: User,
  date?: Date
}