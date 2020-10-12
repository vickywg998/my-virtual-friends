interface IFriend {
_id: string
name: string
gender: string
age: number
hobbies: string
music_genre: string
pets: string
status: boolean
createdAt?:string
updatedAt?: string

}

interface FriendProps {
    friend: IFriend
}

type ApiDataType = {
    message: string
    status: string
    friends:IFriend[]
    friend?: IFriend
}