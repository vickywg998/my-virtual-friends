import React, { useEffect, useState } from 'react'
import CurrentFriend from './CurrentFriend'
import AddFriend from './AddFriend'
import { getFriends, addFriend, updateFriend, deleteFriend } from '../../API'

const FriendApp: React.FC = () => {
  const [friends, setFriends] = useState<myBuddy[]>([])

  useEffect(() => {
    fetchFriends()
  }, [])

  const fetchFriends = (): void => {
    getFriends()
    .then(({ data: { friends } }: myBuddy[] | any) => setFriends(friends))
    .catch((err: Error) => console.log(err))
  }

 const handleSaveFriend = (e: React.FormEvent, formData:myBuddy): void => {
   e.preventDefault()
   addFriend(formData)
   .then(({ status, data }) => {
    if (status !== 201) {
      throw new Error('Error! Friend not saved')
    }
    setFriends(data.friends)
  })
  .catch((err) => console.log(err))
}

  const handleUpdateFriend = (friend: myBuddy): void => {
    updateFriend(friend)
    .then(({ status, data }) => {
        if (status !== 200) {
          throw new Error('Error! Friend not updated')
        }
        setFriends(data.friends)
      })
      .catch((err) => console.log(err))
  }

  const handleDeleteFriend = (_id: string): void => {
    deleteFriend(_id)
    .then(({ status, data }) => {
        if (status !== 200) {
          throw new Error('Error! friend not deleted')
        }
        setFriends(data.friends)
      })
      .catch((err) => console.log(err))
  }

  return (
    <main className='App'>
      <h1>My Friends</h1>
      <AddFriend saveFriend={handleSaveFriend} />
      {friends.map((friend: myBuddy) => (
        <CurrentFriend
          key={friend._id}
          updateFriend={handleUpdateFriend}
          deleteFriend={handleDeleteFriend}
          friend={friend}
        />
      ))}
    </main>
  )
}

export default FriendApp;
