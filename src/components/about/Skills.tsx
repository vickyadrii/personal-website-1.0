// Import Data
import { dataSkills } from "../../data";

const Skills = () => {
  const { datas } = dataSkills;
  return (
    <section className="bg-white dark:bg-slate-700 shadow-md rounded-[10px] p-5 md:w-[888px] md:h-[470px]">
      <h2 className="md:text-4xl font-bold text-primaryBlue dark:text-primaryPurple">
        Skills
      </h2>
      <div className="flex flex-col gap-5 my-5">
        <div className="grid grid-cols-4 gap-x-16 gap-y-5 items-center m-auto">
          {datas.map(({ id, image_url, title }) => (
            <div
              key={id}
              className="flex justify-center items-center flex-col gap-2 w-[110px] h-[110px] p-3 bg-white dark:bg-slate-600 rounded-[10px] shadow-md hover:-translate-y-1 hover:drop-shadow-xl transition-all duration-200 ease-out"
            >
              <img src={image_url} alt="Icon skills" className="w-12" />
              <p className="text-sm font-medium text-primaryBlack dark:text-white">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
