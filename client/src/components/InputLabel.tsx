type MyFunctionType = (arg: React.ChangeEvent<HTMLInputElement>) => void;

export type InputLabelType = {
  label: "Username" | "Email" | "Password";
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
        type={props.label === "Password" ? "password" : "text"}
        placeholder={
          props.label === "Password"
            ? "Enter your password"
            : props.label === "Email"
            ? "youremail@gmail.com"
            : "Enter your username"
        }
        className="border-2 px-2 py-1 rounded-lg w-full ml-auto my-auto"
        id={props.id}
        onChange={props.onChange}
      ></input>
    </div>
  );
};
