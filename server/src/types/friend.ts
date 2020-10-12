import { Document } from "mongoose"

export interface IFriend extends Document {
  name: string
  gender: string
  age: number
  hobbies: string
  music_genre: string
  pets: string
  status: boolean
}
