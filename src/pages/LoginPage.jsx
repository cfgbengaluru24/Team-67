import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

const LoginPage = () => {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    navigate("/");
  };

  return (
    <div className="grid place-items-center min-h-screen py-7 bg-gradient-to-br from-black via-purple-900 to-indigo-900">
      <div className="rounded-md w-[400px] border border-gray-700 bg-gray-900 p-10 shadow-xl">
        <div className="flex flex-column justify-center items-center relative w-full mb-10">
          <button
            className="absolute left-0 top-1 text-white text-2xl hover:text-gray-300 transition-colors"
            onClick={() => navigate("/")}
          >
            &larr;
          </button>
          <h1 className="text-3xl text-white font-bold">Log in</h1>
        </div>
        <form
          className="space-y-7 grid place-items-center"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex flex-col w-full">
            <label htmlFor="email" className="text-semibold text-gray-300 mb-2">
              Email
            </label>
            <input
              id="email"
              className="px-3 py-2 rounded-md bg-gray-800 border border-gray-700 outline-none w-full text-white placeholder-gray-500 focus:border-white transition-colors"
              type="email"
              placeholder="Email Address"
              {...register("email", { required: true })}
            />
          </div>
          <div className="flex flex-col w-full">
            <label
              htmlFor="password"
              className="text-semibold text-gray-300 mb-2"
            >
              Password
            </label>
            <input
              id="password"
              className="px-3 py-2 rounded-md bg-gray-800 border border-gray-700 outline-none w-full text-white placeholder-gray-500 focus:border-white transition-colors"
              type="password"
              placeholder="Password"
              {...register("password", { required: true })}
            />
          </div>
          <div className="flex flex-row justify-evenly w-full text-white font-bold">
            <button
              type="submit"
              className="px-5 py-2 rounded-md bg-gray-700 hover:bg-gray-600 transition-colors"
            >
              Login
            </button>
            <button
              className="px-5 py-2 rounded-md bg-white text-black hover:bg-gray-200 transition-colors"
              onClick={() => navigate("/signup")}
            >
              Sign Up
            </button>
          </div>

          <div className="flex space-x-4">
            <div
              className="px-1 py-1 rounded-md text-gray-300 hover:text-white transition-colors cursor-pointer"
              onClick={() => navigate("/signup")}
            >
              Not registered?
            </div>
            <div className="px-1 py-1 rounded-md text-gray-300 hover:text-white transition-colors cursor-pointer">
              Forgot Password?
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
