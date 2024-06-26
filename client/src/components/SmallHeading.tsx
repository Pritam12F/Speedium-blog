function SmallH(props: { content: string }) {
  return (
    <div className="text-xl font-bold py-4 px-2 inline-block md:text-2xl lg:text-3xl">
      {props.content}
    </div>
  );
}

export default SmallH;
