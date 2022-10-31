// Import Data
import { dataSkills } from "../../data";

const Skills: React.FC = () => {
  const { datas } = dataSkills;
  return (
    <section className="bg-white dark:bg-slate-700 shadow-md rounded-[10px] p-5 md:w-[888px] md:h-[470px] h-[450px]">
      <h2 className="md:text-4xl text-2xl md:text-left text-center font-bold text-primaryBlue dark:text-primaryPurple">
        Skills
      </h2>
      <div className="flex flex-col gap-5 my-5">
        <div className="grid md:grid-cols-4 grid-cols-3 md:gap-x-16 gap-x-5 md:gap-y-5 gap-y-4 items-center m-auto">
          {datas.map(({ id, image_url, title }) => (
            <div
              key={id}
              className="flex justify-center items-center flex-col gap-2 md:w-[110px] w-[80px] md:h-[110px] h-[80px] p-3 bg-white dark:bg-slate-600 rounded-[10px] shadow-md hover:-translate-y-1 hover:drop-shadow-xl transition-all duration-200 ease-out"
            >
              <img src={image_url} alt="Icon skills" className="md:w-12 w-8" />
              <p className="md:text-sm text-xs font-medium text-primaryBlack dark:text-white">
                {title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
