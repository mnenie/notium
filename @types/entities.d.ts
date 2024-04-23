interface DateParams {
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
}

interface UserType extends DateParams {
  _id?: string;
  email: string;
  photoUrl?: string;
}

interface UserAuth extends UserType {
  token: string;
}

type Note = {
  id: string;
  title: string;
  content: string;
  date?: string;
  favorite: boolean;
  prioritet: string;
  createdAt?: Date;
  updateAt?: Date;
  deleteAt?: Date;
};

type ChatCompletionRequestMessage = {
  role: 'user' | 'assistant';
  text: string;
};
