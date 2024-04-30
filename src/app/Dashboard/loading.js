// app/Dashboard/loading.js
import Loader from "../../../components/Loader/Loading";

const Loading = () => {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <Loader color="#0067FF" />
    </div>
  );
};

export default Loading;
