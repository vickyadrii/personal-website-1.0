// Import Data
import { dataExperience } from "../../data";

const Experience: React.FC = () => {
  const { datas } = dataExperience;
  return (
    <section className="bg-white dark:bg-slate-700 shadow-md rounded-[10px] p-5 md:w-[888px] md:h-[470px] h-[450px] text-primaryBlack dark:text-white">
      <h2 className="md:text-4xl text-2xl md:text-left text-center font-bold text-primaryBlue dark:text-primaryPurple">
        Experience
      </h2>
      <div className="flex flex-col md:items-end md:gap-3 gap-7 md:mr-16 my-5">
        {datas.map(({ id, company, date, title, desc }) => (
          <div key={id} className="flex md:flex-row flex-col md:gap-5 gap-1">
            <div className="flex md:flex-col md:items-end items-center md:gap-1 gap-5  md:max-w-xs">
              <h3 className="md:text-xl text-sm font-bold">{company}</h3>
              <p className="md:text-sm text-xs">{date}</p>
            </div>
            <div className="md:flex hidden flex-col items-center">
              <div className="w-5 h-5 bg-primaryPurple rounded-full" />
              <div className="md:h-24 h-16 bg-primaryGreen w-1 rounded-b-full" />
            </div>
            <div className="flex flex-col gap-1 md:max-w-[400px]">
              <h3 className="md:text-xl text-sm  font-bold text-primaryGreen">
                {title}
              </h3>
              <p className="md:text-sm md:flex hidden text-xs md:max-w-sm font-medium">
                {desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
