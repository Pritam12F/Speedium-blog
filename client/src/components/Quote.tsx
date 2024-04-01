export const Quote = () => {
  return (
    <div className="flex flex-col border-2 h-screen bg-slate-200">
      <div className="my-auto">
        <div className="text-lg mx-24 my-16 text-center font-semibold border-2 rounded-xl py-2 bg-gradient-to-r from-blue-500 md:from-green-500 sm:text-2xl">
          "The customer support I recieved was exceptional. The support team
          went above and beyond to address my concerns."
        </div>
        <div className="my-10">
          <div className="mx-24 mt-5">Jules Winnfield</div>
          <div className="mx-24 text-slate-500">CEO, Acme Inc</div>
        </div>
      </div>
    </div>
  );
};
