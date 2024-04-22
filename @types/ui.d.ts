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
  who: string;
  icon: string;
  url: string;
}
