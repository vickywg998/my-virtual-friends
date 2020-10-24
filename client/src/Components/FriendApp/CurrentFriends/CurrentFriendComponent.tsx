import React, { useEffect, useState } from "react";
import CurrentFriendCard from "./CurrentFriendCard";

import { getFriends, updateFriend, deleteFriend } from "../../../API";

import styled from "styled-components";

const AddFriendButton = styled.a`
  background: #ff9900;
  color: #fff;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  cursor: pointer;
  border: none;

  &:hover {
    text-decoration: none;
    background-color: white;
    color: #ff9900;
    border: 2px solid #ff9900;
  }
`;

const AddFriendTitle = styled.h1`
  text-align: center;
  margin: 1rem 0;
`;

const CurrentFriendComponent: React.FC = () => {
  const [friends, setFriends] = useState<IFriend[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    fetchFriends();
  }, []);

  const fetchFriends = (): void => {
    setIsLoading(true);
    getFriends()
      .then(({ data: { friends } }: IFriend[] | any) => setFriends(friends))
      .then(() => setIsLoading(false))
      .catch((err: Error) => console.log(err));
  };

  const handleUpdateFriend = (formData: IFriend): void => {
    updateFriend(formData)
      .then(({ status, data }) => {
        if (status !== 200) {
          throw new Error("Error! Friend not updated");
        }
        setFriends(data.friends);
      })
      .catch((err) => console.log(err));
  };

  const handleDeleteFriend = (_id: string): void => {
    deleteFriend(_id)
      .then(({ status, data }) => {
        if (status !== 200) {
          throw new Error("Error! friend not deleted");
        }
        setFriends(data.friends);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="App">
      <AddFriendTitle>My Friends</AddFriendTitle>
      <AddFriendButton as="a" href="/add">
        Add More!
      </AddFriendButton>
      {isLoading ? (
        <h4>Loading...Please wait :) </h4>
      ) : (
        <>
          {friends.map((friend: IFriend) => (
            <CurrentFriendCard
              key={friend._id}
              updateFriend={handleUpdateFriend}
              deleteFriend={handleDeleteFriend}
              friend={friend}
            />
          ))}
        </>
      )}
    </div>
  );
};

export default CurrentFriendComponent;
