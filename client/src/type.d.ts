interface myBuddy {
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
    friend: myBuddy
}

type ApiDataType = {
    message: string
    status: string
    friends: myBuddy[]
    friend?: myBuddy
}