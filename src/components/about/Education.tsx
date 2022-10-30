// Import Images
import untadLogo from "../../assets/untadlogo.png";
import EducationImage from "../../assets/EducationImage.png";

const Education = () => {
  return (
    <section className="bg-white dark:bg-slate-700 shadow-md rounded-[10px] p-5 md:h-[470px] text-primaryBlack dark:text-white">
      <h2 className="md:text-4xl font-bold text-primaryBlue dark:text-primaryPurple">
        Education
      </h2>
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-5">
          <img
            src={untadLogo}
            alt="Untad Logo"
            className=" m-auto my-5 rounded-full shadow-lg drop-shadow-lg"
          />
          <div>
            <h3 className="md:text-3xl font-bold">Tadulako University</h3>
            <p className="font-medium">Bachelor of Computer Science</p>
          </div>
        </div>
        <div className="font-medium text-right text-sm">
          <p>Palu, Indonesia</p>
          <p>Excepted 05/2023</p>
        </div>
      </div>
      <hr className="border-primaryBlack" />
      <div className="my-5 flex flex-col gap-5 font-medium">
        <p>
          Majoring in Information Technology who learns about Algorithms, Data
          Structures, Calculus, Web Fundamentals, Machine Learning, Robotics,
          Cloud Computing, Micro Services, and Application Programming
          Interfaces (APIs).
        </p>
        <p>
          Here I have community experience as a Public Relations in the
          Programming Community, namely Tadulako Programming. We created a
          design on Instagram for the new post.
        </p>
      </div>
      <div className="flex justify-end">
        <img src={EducationImage} alt="Education Image" className="w-28" />
      </div>
    </section>
  );
};

export default Education;
