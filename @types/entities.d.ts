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

type NoteData = {
  content: string;
  type: 'doc';
};

interface Note extends DateParams {
  _id: string;
  user: UserType;
  note_data: NoteData;
  favorite?: boolean;
  priority?: string[];
}

type ChatCompletionRequestMessage = {
  role: 'user' | 'assistant';
  text: string;
};
