export type InputLabelType = {
  label: string;
  onClick: (arg: React.MouseEvent<HTMLButtonElement>) => void;
};

export const Button = (props: InputLabelType) => {
  return (
    <button
      className={
        props.label != "Logout"
          ? "bg-black text-white inline-block px-12 py-2 rounded-lg border-2 lg:px-32"
          : "bg-black text-white inline-block px-12 py-` rounded-lg border-2 mx-4"
      }
      onClick={props.onClick}
    >
      {props.label}
    </button>
  );
};
