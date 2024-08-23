export const Tag = (props) => {
  const { text } = props;

  return (
    <div className="  flex bg-[#E5E7EB]  w-fit  justify-center py-1 px-5 rounded-xl h-7 items-center ">
      {text}
    </div>
  );
};
