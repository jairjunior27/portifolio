type prop = {
  img: string;
};
export const SkillItem = ({ img }:prop) => {
  return (
    <div className="flex items-center justify-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
      <img src={img} alt="skill" className="w-16 h-16 object-contain" />
    </div>
  );
};
