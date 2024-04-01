export type InputLabelType = {
  label: string;
  onClick: (arg: React.MouseEvent<HTMLButtonElement>) => void;
};

export const Button = (props: InputLabelType) => {
  return (
    <button
      className={
        props.label != "Logout"
          ? "bg-black text-white inline-block px-5 py-2 rounded-lg lg:px-32"
          : "bg-black text-white inline-block text-sm px-2 mr-2 rounded-lg"
      }
      onClick={props.onClick}
    >
      {props.label}
    </button>
  );
};
