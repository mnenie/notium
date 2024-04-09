type UserType = {
  id?: string;
  email: string;
  photoUrl?: string;
};

type Note = {
  id: string;
  title: string;
  content: string;
  date?: string;
  favorite: boolean;
  prioritet: string;
};
