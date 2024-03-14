import { useNavigate } from "react-router-dom";

export type GrayTextInput = {
  content?: string;
  link?: string;
  to: string;
};

export const GrayText = (props: GrayTextInput) => {
  const navigate = useNavigate();

  function onClickHandler() {
    navigate(props.to);
  }
  return (
    <div className="text-slate-500 px-4 py-2 text-base inline-block">
      <span className="mx-4">{props.content}</span>
      <button className="underline" onClick={onClickHandler}>
        {props.link}
      </button>
    </div>
  );
};
