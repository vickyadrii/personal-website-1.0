// Import Icon
import loading from "../assets/loading.svg";

const Loading: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <img src={loading} alt="" className="animate-spin md:w-40 w-24" />
    </div>
  );
};

export default Loading;
