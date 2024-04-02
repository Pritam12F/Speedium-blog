export interface cardProps {
  author: {
    name: string;
  };
  authorId: string;
  content: string;
  id: string;
  published: boolean;
  title: string;
}

export type InputLabelType = {
  label: string;
  onClick: (arg: React.MouseEvent<HTMLButtonElement>) => void;
};

type MyFunctionType = (arg: React.ChangeEvent<HTMLInputElement>) => void;

export type InputLabelType2 = {
  label: "Username" | "Email" | "Password";
  id: string;
  onChange: MyFunctionType;
};

export interface MyObject {
  id: string;
  title: string;
  content: string;
  published: boolean;
  authorId: string;
  author: string;
}
