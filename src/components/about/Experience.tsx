// Import Data
import { dataExperience } from "../../data";

const Experience = () => {
  const { datas } = dataExperience;
  return (
    <section className="bg-white dark:bg-slate-700 shadow-md rounded-[10px] p-5 md:w-[888px] md:h-[470px] text-primaryBlack dark:text-white">
      <h2 className="md:text-4xl font-bold text-primaryBlue dark:text-primaryPurple">
        Experience
      </h2>
      <div className="flex flex-col items-end gap-3 mr-16 my-5 ">
        {datas.map(({ id, company, date, title, desc }) => (
          <div key={id} className="flex gap-5">
            <div className="flex flex-col gap-1 items-end max-w-xs">
              <h3 className="text-xl font-bold text-right">{company}</h3>
              <p className="text-sm">{date}</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-5 h-5 bg-primaryPurple rounded-full" />
              <div className="h-24 bg-primaryGreen w-1 rounded-b-full" />
            </div>
            <div className="flex flex-col gap-1 max-w-[400px]">
              <h3 className="text-xl font-bold text-primaryGreen">{title}</h3>
              <p className="text-sm max-w-sm leading-6 font-medium">{desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
