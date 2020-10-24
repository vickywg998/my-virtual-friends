import React, { useState } from "react";
import AddFriendForm from "./AddFriend/AddFriendForm";
import FileUploadContainer from "./AddFriend/FileUploadContainer";
import { addFriend, uploadFile } from "../../API";

const FriendApp: React.FC = () => {
  const [friends, setFriends] = useState<IFriend[]>([]);
  const [files, setFiles] = useState<File[]>([]);

  const handleSaveFriend = (formData: FormData): void => {
    addFriend(formData)
      .then(({ status, data }) => {
        if (status !== 201) {
          throw new Error("Error! Friend not saved");
        }
        setFriends(data.friends);
      })
      .catch((err) => console.log(err));
  };

  const onDrop = (acceptedFiles: File[]) => {
    setFiles(acceptedFiles.map(file => Object.assign(file, {
      preview: URL.createObjectURL(file)
    })));
  }
  
  return (
    <main className="App">
      <h1>My Friends</h1>
      <FileUploadContainer files={files} onDrop={onDrop}/>
      <AddFriendForm saveFriend={handleSaveFriend} />

    </main>
  );
};

export default FriendApp;
