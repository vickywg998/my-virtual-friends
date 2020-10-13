import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";

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
  color: #ca0000;
`;

const UpdateFriendButton = styled.button`
  border: 1px solid #00aa69;
  color: #00aa69;
  margin-right: 1rem;
`;

const Friend: React.FC<Props> = ({ friend, updateFriend, deleteFriend }) => {
  return (
    <CurrentFriendCard>
      <div className="Card--text">
        <h1>
          name: {friend.name}{" "}
          <button>
            <FontAwesomeIcon icon={faEdit} />
          </button>
        </h1>
        <h1>
          gender: {friend.gender}{" "}
          <button>
            <FontAwesomeIcon icon={faEdit} />
          </button>
        </h1>
        <h1>
          age: {friend.age}{" "}
          <button>
            <FontAwesomeIcon icon={faEdit} />
          </button>
        </h1>
        <h1>
          hobbies: {friend.hobbies}{" "}
          <button>
            <FontAwesomeIcon icon={faEdit} />
          </button>
        </h1>
        <h1>
          genre: {friend.music_genre}{" "}
          <button>
            <FontAwesomeIcon icon={faEdit} />
          </button>
        </h1>
        <h1>
          pets: {friend.pets}
          <button>
            <FontAwesomeIcon icon={faEdit} />
          </button>
        </h1>
      </div>
      <div className="Card--button">
        <UpdateFriendButton
          onClick={() => updateFriend(friend)}
          className="Card--button__done"
        >
          Update
        </UpdateFriendButton>
        <DeLeteFriendButton
          onClick={() => deleteFriend(friend._id)}
          className="Card--button__delete"
        >
          X
        </DeLeteFriendButton>
      </div>
    </CurrentFriendCard>
  );
};

export default Friend;
