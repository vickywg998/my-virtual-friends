import React from "react";
import styled from "styled-components";

type Props = FriendProps & {
  updateFriend: (friend: IFriend) => void;
  deleteFriend: (_id: string) => void;
};

const CurrentFriendCard = styled.div`

display: flex;
justify-content: space-between;
align-items: center;
background: rgb(218, 223, 224);
margin: 3em;
padding: 0.5rem 1rem;
border-bottom: 1px solid #333333;
`

const DeLeteFriendButton = styled.button`

border: 1px solid #ca0000;
color: #ca0000;


`

const Friend: React.FC<Props> = ({ friend, updateFriend, deleteFriend }) => {

  return (
    <CurrentFriendCard>
      <div className="Card--text">
        <h1>name: {friend.name}
        </h1>
        <h1>gender: {friend.gender}</h1>
        <h1>age: {friend.age}</h1>
        <h1>hobbies: {friend.hobbies}</h1>
        <h1>genre: {friend.music_genre}</h1>
        <h1>pets: {friend.pets}</h1>
      </div>
      <div className="Card--button">
        <button
          onClick={() => updateFriend(friend)}
          className="Card--button__done"
        >
          Edit
        </button>
        <DeLeteFriendButton
          onClick={() => deleteFriend(friend._id)}
          className="Card--button__delete"
        >
          Delete
        </DeLeteFriendButton>
      </div>
    </CurrentFriendCard>
  );
};

export default Friend;
