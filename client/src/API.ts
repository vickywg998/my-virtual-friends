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
    formData: FormData,
  ): Promise<AxiosResponse<ApiDataType>> => {
    try {
      const saveFriend: AxiosResponse<ApiDataType> = await axios.post(
        baseUrl + '/add',
        formData
      )
      return saveFriend
    } catch (error) {
      throw new Error(error)
    }
  }

  export const uploadFile = async (files: File[]) : Promise<AxiosResponse<ApiDataType>> => {
    try {
      const fd = new FormData();

      files.forEach((file) => {
        fd.append('File[]', file);
      });
      const saveFile: AxiosResponse<ApiDataType> = await axios.post(
        baseUrl + '/upload',
      fd,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
       
      )
      return saveFile
    } catch (error) {
      throw new Error(error)
    }
  }







export const updateFriend = async (formData:IFriend): Promise<AxiosResponse<ApiDataType>> => {
  try {
    const friendUpdate: Pick<IFriend,  "name" | "gender"| "age" | "hobbies" | "music_genre" | "pets" |  "status"> = {
      name: formData.name,
      gender: formData.gender,
      age: formData.age,
      hobbies: formData.hobbies,
      music_genre: formData.music_genre,
      pets: formData.pets,
      status: true,
    };
    const updatedFriend: AxiosResponse<ApiDataType> = await axios.put(
      `${baseUrl}/edit/${formData._id}`,
      friendUpdate
  
    );
    console.log(`${baseUrl}/edit/${formData._id}`)
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

