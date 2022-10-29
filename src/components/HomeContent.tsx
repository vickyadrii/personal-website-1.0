// Import Component
import SocialMedia from "./SocialMedia";

// Import File CV and Images
import HomeImages from "../assets/HomeImages.png";

const HomeContent: React.FC = () => {
  return (
    <section className="max-w-5xl m-auto p-5">
      <div className="flex lg:flex-row flex-col items-center md:justify-between md:gap-14 lg:gap-0 gap-12">
        <div className="flex flex-col lg:items-start items-center md:gap-9 gap-8 md:my-5">
          <div className="font-montserratAlternate lg:text-left text-center text-primaryBlack flex flex-col gap-5">
            <h2 className="sm:text-5xl text-3xl font-bold">Hi everyone!</h2>
            <h3 className="sm:text-3xl text-xl font-bold">
              I’m{" "}
              <span className="text-primaryGreen font-black">
                Vicky Herdiansyah Adri
              </span>
            </h3>
            <div className="max-w-md">
              <p className="sm:text-lg font-montserrat font-medium md:leading-8 leading-7">
                An undergraduate information technology student who experience
                in frontend web developer.
              </p>
            </div>
          </div>
          <SocialMedia />
        </div>

        <img
          src={HomeImages}
          alt="Images Frame"
          className="md:w-[80%] lg:w-[50%] w-56"
        />
      </div>
    </section>
  );
};

export default HomeContent;
