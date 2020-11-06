interface IFriend {
  _id: string;
  name: string;
  imageName : string;
  gender: string;
  age: number;
  hobbies: string;
  music_genre: string;
  pets: string;
  status: boolean;
  createdAt?: string;
  updatedAt?: string;
}

interface IAddFriend {
  name?: string;
  gender?: string;
  age?: number;
  hobbies?: string;
  music_genre?: string;
  pets?: string;
}

interface FriendProps {
  friend: IFriend;
}

type ApiDataType = {
  message: string;
  status: string;
  friends: IFriend[];
  friend?: IFriend;
  // files: File[];
  // file?:IFile;
};

interface IImageUpload {
  files: File[]
  }

  interface ImageProps {
   file: IImageUpload;
  }


// interface Event<T = EventTarget> {
//   target: T;
// }