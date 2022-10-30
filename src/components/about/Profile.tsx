import { useState } from "react";

// Import Images
import profilePhoto from "../../assets/profilePhoto.png";

const Profile = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  setTimeout(() => {
    setIsLoading(false);
  }, 1000);

  return (
    <section className="bg-white dark:bg-slate-700 shadow-md rounded-[10px] p-5 md:h-[470px]">
      <div className="flex flex-col gap-5">
        <h2 className="md:text-4xl font-bold text-primaryBlue dark:text-primaryPurple">
          Profile
        </h2>
        <p className="font-medium text-lg text-primaryBlack dark:text-white">
          An information technology student focused on frontend developer like
          react.js and next.js. I had an intern experience as a frontend web
          developer at a software house. I'm also a Bangkit graduated 2022,
          cloud computing learning path. And the next, learn about Typescript
          and implement it with React
        </p>
      </div>
      {isLoading ? (
        <div className="animate-pulse flex justify-center my-8">
          <div className="rounded-full bg-slate-200 w-56 h-56"></div>
        </div>
      ) : (
        <img
          src={profilePhoto}
          alt="profile photo"
          className="w-56 m-auto mt-8 rounded-full shadow-lg drop-shadow-lg"
        />
      )}
    </section>
  );
};

export default Profile;
