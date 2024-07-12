interface ISectionTitle {
  title: string;
}

const SectionTitle = ({ title }: ISectionTitle) => {
  return <h2 className="text-xl md:text-3xl font-bold mb-8">{title}</h2>;
};

export default SectionTitle;
