export type InputLabelType = {
  label: string;
  onClick: (arg: React.MouseEvent<HTMLButtonElement>) => void;
};

export const Button = (props: InputLabelType) => {
  return (
    <button
      className="bg-black text-white inline-block px-32 py-2 rounded-lg border-2"
      onClick={props.onClick}
    >
      {props.label}
    </button>
  );
};
