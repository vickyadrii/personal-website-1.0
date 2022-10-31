// Import Data
import { projectCards } from "../../data";

const Cards: React.FC = () => {
  const { datas } = projectCards;
  return (
    <section className="max-w-5xl m-auto p-5">
      <div className="flex justify-between gap-5 items-center">
        {datas.map(({ id, image_url, project_name, desc }) => (
          <div
            key={id}
            className="flex flex-col bg-white dark:bg-slate-700 shadow-md rounded-t-[6px] w-[320px] h-[370px] hover:-translate-y-2 hover:drop-shadow-xl transition-all duration-200 ease-out"
          >
            <img
              src={image_url}
              alt="project card"
              className="w-[320px] rounded-t-[6px]"
            />
            <div className="flex flex-col justify-between px-2 py-3 h-full">
              <div className="flex flex-col gap-2">
                <h3 className="font-bold text-primaryBlue dark:text-primaryPurple">{project_name}</h3>
                <p className="max-w-xs text-sm leading-6 text-primaryBlack dark:text-white">
                  {desc}
                </p>
              </div>
              <a
                href=""
                className="text-[#0043B2] dark:text-white underline underline-offset-4 text-sm pb-2"
              >
                See the project
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Cards;
