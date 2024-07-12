interface ISecondaryTitle {
  title: string;
}

const SecondaryTitle = ({ title }: ISecondaryTitle) => {
  return (
    <p className="font-semibold relative inline-block">
      {title}
      <span className="block w-0 h-[1px] bg-black transition-all duration-300 group-hover:w-full"></span>
    </p>
  );
};

export default SecondaryTitle;
