import React, { useState } from "react";
import AddFriend from "./AddFriend/AddFriend";
import { addFriend } from "../../API";

const FriendApp: React.FC = () => {
  const [friends, setFriends] = useState<IFriend[]>([]);

  const handleSaveFriend = (e: React.FormEvent, formData: IFriend): void => {
    e.preventDefault();
    addFriend(formData)
      .then(({ status, data }) => {
        if (status !== 201) {
          throw new Error("Error! Friend not saved");
        }
        setFriends(data.friends);
      })
      .catch((err) => console.log(err));
  };

  return (
    <main className="App">
      <h1>My Friends</h1>
      <AddFriend saveFriend={handleSaveFriend} />
    </main>
  );
};

export default FriendApp;
