type Card = {
  title: string;
  description: string;
  icon: any;
  id: number;
};

type Links = {
  name: string;
  id: number;
  section: string;
};

type Children = {
  id: number;
  title: string;
  route: string;
}

type Menu = {
  id: number;
  title: string;
  icon: Component;
  arrow?: Component;
  isArrowActive?: boolean;
  color?: string;
  route: string;
  notes?: Note[];
  favrites?: Note[];
  iconsFile?: Component;
  children?: Children[];
};

type Priority = {
  label: string;
  value: string;
  color?: string;
  icon?: Component;
};

type ContactCard = {
  id: number;
  title: string;
  description: string;
  descriptionRu?: string;
  who: string;
  icon: string;
  url: string;
}

enum ErrorAuth {
  LOGIN_ERROR = 'Login error, please try again! Notium cannot give you access to use :/',
  REGISTRATION_ERROR = 'Registration error, please try again! Notium cannot give you access to use :/'
}
