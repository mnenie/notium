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
  color?: string;
  active: boolean;
  route: string;
};
