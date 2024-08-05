type prop = {
  img: string[];
};
export const SkillItem = ({ img }: prop) => {
  return (
    <div className="flex flex-wrap  items-center justify-center gap-4">
      {img.map((item, index) => (
        <div
          className="flex items-center justify-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 "
          key={index}
        >
          <img src={item} alt="skill" className="w-20 h-20 object-contain " />
        </div>
      ))}
    </div>
  );
};
