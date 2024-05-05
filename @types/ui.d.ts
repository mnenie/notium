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
  id: string;
  title: string;
  route: string;
}

type Menu = {
  id: string;
  title: string;
  icon: Component;
  arrow?: Component;
  isArrowActive?: boolean;
  color?: string;
  route: string;
  notes?: Note[];
  favrites?: Note[];
  iconsFile?: Component;
  folder?: boolean;
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

