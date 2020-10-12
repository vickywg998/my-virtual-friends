import axios, { AxiosResponse } from "axios";

const baseUrl: string = "http://localhost:8080";

export const getFriends = async (): Promise<AxiosResponse<ApiDataType>> => {
  try {
    const friends: AxiosResponse<ApiDataType> = await axios.get(
      baseUrl + "/friends"
    );
    return friends;
  } catch (error) {
    throw new Error(error);
  }
};

export const addFriend = async (
    formData: myBuddy
  ): Promise<AxiosResponse<ApiDataType>> => {
    try {
      const friend: Omit<myBuddy, '_id'> = {
        name: formData.name,
        gender: formData.gender,
        age: formData.age,
        hobbies: formData.hobbies,
        music_genre: formData.music_genre,
        pets: formData.pets,
        status: false,
      }
      const saveFriend: AxiosResponse<ApiDataType> = await axios.post(
        baseUrl + '/add',
       friend
      )
      return saveFriend
    } catch (error) {
      throw new Error(error)
    }
  }


export const updateFriend = async (friend:myBuddy): Promise<AxiosResponse<ApiDataType>> => {
  try {
    const friendUpdate: Pick<myBuddy, "status"> = { status: true };
    const updatedFriend: AxiosResponse<ApiDataType> = await axios.put(
      `${baseUrl}/edit/${friend._id}`,
      friendUpdate
    );

    return updatedFriend;
  } catch (error) {
    throw new Error(error);
  }
};

export const deleteFriend = async (
    _id: string
  ): Promise<AxiosResponse<ApiDataType>> => {
    try {
      const deletedFriend: AxiosResponse<ApiDataType> = await axios.delete(
        `${baseUrl}/delete/${_id}`
      )
      return deletedFriend
    } catch (error) {
      throw new Error(error)
    }
  }