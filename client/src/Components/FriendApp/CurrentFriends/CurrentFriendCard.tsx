import React, { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTimes } from "@fortawesome/free-solid-svg-icons";

type Props = FriendProps & {
  updateFriend: (friend: IFriend) => void;
  deleteFriend: (_id: string) => void;
};

const CurrentFriendCard = styled.div`
  display: flex;
  justify-content: space-between;
  // align-items: center;
  flex-flow: row wrap;
  background: rgb(218, 223, 224);
  margin: 2em;
  padding: 0.5rem 1rem;
  border-bottom: 3px solid #ffffff;
`;

const DeLeteFriendButton = styled.button`
  border: 1px solid #ca0000;
  padding: 0.2rem 0.3rem;
  border-radius: 20px;
  cursor: pointer;
`;

const UpdateFriendButton = styled.button`
  border: 1px solid #00aa69;
  color: #00aa69;
  margin-right: 1rem;
`;

const Friend: React.FC<Props> = ({ friend, updateFriend, deleteFriend }) => {
  const [editData, setEditData] = useState<IFriend>({ ...friend });
  const [editing, setEditing] = useState(false);

  const handleFormOnChange = (
    e: React.FormEvent<HTMLInputElement | HTMLSelectElement>
  ): void => {
    setEditData({
      ...editData,
      [e.currentTarget.id]: e.currentTarget.value,
    });
  };

  const onCancelEdit = () => {
    setEditing(false);
    setEditData({ ...friend });
  };

  return (
    <CurrentFriendCard>
      {!editing ? (
        <div className="Card--text">
          <h1>name: {friend.name}</h1>
          <h1>gender: {friend.gender}</h1>
          <h1>age: {friend.age}</h1>
          <h1>hobbies: {friend.hobbies}</h1>
          <h1>genre: {friend.music_genre}</h1>
          <h1>pets: {friend.pets}</h1>
        </div>
      ) : (
        <form onSubmit={(e) => updateFriend(editData)}>
          <input
            onChange={handleFormOnChange}
            type="text"
            id="name"
            value={editData.name}
          />
          <select onChange={handleFormOnChange} id="gender">
            <option disabled defaultValue="true" value="">
              -- select an option --
            </option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="prefernottosay">Prefer not to say</option>
            <option value="other">Other</option>
          </select>
          <input
            onChange={handleFormOnChange}
            type="number"
            id="age"
            value={editData.age}
          />
          <select onChange={handleFormOnChange} id="hobbies">
            <option disabled defaultValue="true" value="">
              -- select an option --
            </option>
            <optgroup label="Active & Outdoor Hobbies">
              <option value="hiking">hiking</option>
              <option value="basketball">basketball</option>
              <option value="bodybuilding">bodybuilding</option>
              <option value="gardening">gardening</option>
              <option value="cyclin">cycling</option>
              <option value="dancing">dancing</option>
              <option value="camping">camping</option>
              <option value="mountain biking">mountain biking</option>
            </optgroup>
            <optgroup label="Creative Hobbies">
              <option value="painting">painting</option>
              <option value="knitting">knitting</option>
              <option value="writing">writing</option>

              <option value="nail art">nail art</option>
              <option value="colouring books">colouring books</option>
              <option value="photography">photography</option>
              <option value="blogging">blogging</option>
            </optgroup>
            <optgroup label="Nerdy Hobbies">
              <option value="arcade games">arcade games</option>
              <option value="video games">video games</option>
              <option value="cosplaing">cosplaing</option>
              <option value="trivia">trivia</option>
              <option value="laser tag">laser tag</option>
              <option value="book clubs">book clubs</option>
              <option value="ocoding">coding</option>
              <option value="learning new languages">
                learning new languages
              </option>
            </optgroup>
          </select>
          <input
            onChange={handleFormOnChange}
            type="text"
            id="music_genre"
            value={editData.music_genre}
          />
          <input
            onChange={handleFormOnChange}
            type="text"
            id="pets"
            value={editData.pets}
          />
          <div>
            <DeLeteFriendButton type="button" onClick={onCancelEdit}>
              cancel
            </DeLeteFriendButton>
            <UpdateFriendButton type="submit">Save</UpdateFriendButton>
          </div>
        </form>
      )}
      <div>
        <button className="currentfriend-button">
          <FontAwesomeIcon
            icon={faEdit}
            onClick={() => setEditing(true)}
            size="lg"
          />
        </button>
        <button className="currentfriend-button">
          <FontAwesomeIcon
            icon={faTimes}
            onClick={() => deleteFriend(friend._id)}
            size="lg"
          />
        </button>
      </div>
    </CurrentFriendCard>
  );
};

export default Friend;
