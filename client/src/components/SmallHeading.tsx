export type SingupProps = {
  content: string;
};

function SmallH(props: SingupProps) {
  return (
    <div className="text-3xl font-bold py-4 px-2 inline-block">
      {props.content}
    </div>
  );
}

export default SmallH;
