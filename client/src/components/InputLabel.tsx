type MyFunctionType = (arg: React.ChangeEvent<HTMLInputElement>) => void;

export type InputLabelType = {
  label: string;
  placeholder: string;
  type: string;
  id: string;
  onChange: MyFunctionType;
};

export const InputBox = (props: InputLabelType) => {
  return (
    <div>
      <label
        htmlFor={props.id}
        className="block text-base font-semibold mx-2 my-2"
      >
        {props.label}
      </label>
      <input
        type={props.type}
        placeholder={props.placeholder}
        id={props.id}
        className="border-2 px-2 py-1 rounded-lg w-full ml-auto my-auto"
        onChange={props.onChange}
      ></input>
    </div>
  );
};
