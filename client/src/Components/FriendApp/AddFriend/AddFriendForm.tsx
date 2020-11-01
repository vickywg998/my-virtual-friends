import React, { useState, useRef } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const AddFriendButton = styled.button`
  background: #ff9900;
  color: #fff;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  cursor: pointer;
  border: none;
  margin-top: 1em;

  &:hover {
    text-decoration: none;
    background-color: white;
    color: #ff9900;
    border: 2px solid #ff9900;
  }
`;

type Props = {
  saveFriend: (formData: FormData) => void;
};

const AddFriendForm: React.FC<Props> = ({ saveFriend }) => {
  const [formData, setFormData] = useState<IAddFriend>({});
  const [added, setAdded] = useState<boolean>(false);
  const friendImage = useRef<HTMLInputElement>(null);

  const handleFormOnChange = (
    e: React.FormEvent<HTMLInputElement | HTMLSelectElement>
  ): void => {
    setFormData({
      ...formData,
      [e.currentTarget.id]: e.currentTarget.value,
    });
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    let image;
    if (friendImage.current?.files) {
      image = friendImage.current?.files[0];
    }

    // todo: get formData from <form> element on submit
    // ex. const data = new FormData(e.???)
    const fd = new FormData();
    fd.append("image", image as Blob);
    fd.append("name", formData.name || "");
    fd.append("gender", formData.gender || "");
    fd.append("age", "" + formData.age);
    fd.append("hobbies", formData.hobbies || "");
    fd.append("music_genre", formData.music_genre || "");
    fd.append("pets", formData.pets || "");

    saveFriend(fd);
    console.log(fd)
  };

  return (
    <>
      <form className="Form" onSubmit={onSubmit} encType="multipart/form-data">
        <input
          type="file"
          id="image"
          ref={friendImage}
          onChange={handleFormOnChange}
        />
        <div>
          <div>
            <label htmlFor="name">Name</label>
            <input onChange={handleFormOnChange} type="text" id="name" />
          </div>

          <div>
            <label htmlFor="gender">Gender</label>

            <select onChange={handleFormOnChange} id="gender">
              <option disabled defaultValue="true" value="">
                -- select an option --
              </option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="prefernottosay">Prefer not to say</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div>
            <label htmlFor="age">Age</label>
            <input
              onChange={handleFormOnChange}
              type="number"
              id="age"
              min="0"
              max="130"
            />
          </div>
          <div>
            <label htmlFor="hobbies">Hobbies</label>
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
          </div>
          <div>
            <label htmlFor="music_genre">Music Genre</label>
            <input onChange={handleFormOnChange} type="text" id="music_genre" />
          </div>
          <div>
            <label htmlFor="pets">Pets</label>
            <input onChange={handleFormOnChange} type="text" id="pets" />
          </div>
        </div>
        <AddFriendButton onClick={() => setAdded(true)}>
          Add Friend
        </AddFriendButton>
      </form>
      {added && (
        <div>
          <h4 className="added-notif"> Your friend is added!</h4>
          <FontAwesomeIcon
            icon={faTimes}
            onClick={() => setAdded(false)}
            size="lg"
          />
        </div>
      )}
    </>
  );
};

export default AddFriendForm;
