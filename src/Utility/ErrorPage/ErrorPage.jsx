import { Link } from "react-router-dom";
import errorImg from '../../assets/Error.png'
const ErrorPage = () => {
  return (
    <div className="manrope min-w-5xl text-center min-h-96 justify-center items-center flex-col gap-8">
      <h2 className="text-5xl font-bold p-8">Opps!</h2>
      <img className="mx-auto w-[600px]" src={errorImg} alt="" />
      <Link to={"/"}>
        <button className="btn bg-red-400 text-white text-3xl px-7">Home</button>
      </Link>
    </div>
  );
};

export default ErrorPage;
