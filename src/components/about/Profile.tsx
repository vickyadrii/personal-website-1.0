// Import Images
import profilePhoto from "../../assets/profilePhoto.png";

const Profile = () => {
  return (
    <section className="bg-white dark:bg-slate-700 shadow-md rounded-[10px] p-5 md:w-[888px] md:h-[470px] h-[450px]">
      <div className="flex flex-col md:text-left text-center md:gap-5 gap-3">
        <h2 className="md:text-4xl text-2xl font-bold text-primaryBlue dark:text-primaryPurple">
          Profile
        </h2>
        <p className="font-medium md:text-lg text-xs md:leading-normal leading-5 text-primaryBlack dark:text-white">
          An information technology student who focuses on frontend development.
          Had internship experience as a frontend web developer in a software
          house. I am also a graduate of Bangkit in 2022, a cloud computing
          learning path. And next, learn about TypeScript and implement it with
          React
        </p>
      </div>
      <img
        src={profilePhoto}
        alt="profile photo"
        className="md:w-56 w-32 m-auto mt-8 rounded-full shadow-lg drop-shadow-lg"
      />
    </section>
  );
};

export default Profile;
