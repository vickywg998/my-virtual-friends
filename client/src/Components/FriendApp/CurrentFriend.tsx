import React from "react";

type Props = FriendProps & {
  updateFriend: (friend: myBuddy) => void;
  deleteFriend: (_id: string) => void;
};

const Friend: React.FC<Props> = ({ friend, updateFriend, deleteFriend }) => {
  return (
    <div className="Card">
      <div className="Card--text">
        <h1>name: {friend.name}</h1>
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
          Update
        </button>
        <button
          onClick={() => deleteFriend(friend._id)}
          className="Card--button__delete"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Friend;
