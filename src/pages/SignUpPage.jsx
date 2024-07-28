import axios from "axios";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const SignUpPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post("http://localhost:3000/signup", data);
      if (response.status === 200) {
        navigate("/");
      }
    } catch (error) {
      console.error("Signup failed:", error);
    }
  };

  const roles = ["Volunteer", "Student"];
  const inputs = [
    { label: "Name", type: "text", placeholder: "Name", name: "name" },
    {
      label: "Phone Number",
      type: "number",
      placeholder: "Eg: 3475122943",
      name: "phone",
    },
    {
      label: "Email",
      type: "email",
      placeholder: "Email Address",
      name: "email",
    },
    {
      label: "Password",
      type: "password",
      placeholder: "Password",
      name: "password",
    },
  ];

  return (
    <div className="grid place-items-center min-h-screen py-7 bg-gradient-to-br from-black via-purple-900 to-indigo-900">
      <div className="rounded-md w-[500px] border border-gray-700 bg-gray-900 p-10 shadow-xl">
        <div className="flex justify-center items-center relative w-full mb-10">
          <button
            className="absolute left-0 top-1 text-white text-2xl hover:text-gray-300 transition-colors"
            onClick={() => {
              navigate("/");
            }}
          >
            &larr;
          </button>
          <h1 className="text-3xl text-white font-bold">Sign Up</h1>
        </div>
        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
          <div className="flex justify-between">
            {roles.map((role) => (
              <label
                key={role}
                className="text-semibold text-gray-300 mb-2 flex items-center"
              >
                <input
                  className="mr-2"
                  type="radio"
                  {...register("role", { required: true })}
                  value={role}
                />
                {role}
              </label>
            ))}
          </div>
          {errors.role && (
            <span className="text-red-400 text-sm">Role is required</span>
          )}

          {inputs.map(({ label, type, placeholder, name }) => (
            <div key={name} className="flex flex-col">
              <label className="text-semibold text-gray-300 mb-2">
                {label}
              </label>
              <input
                className={`px-3 py-2 rounded-md bg-gray-800 border border-gray-700 outline-none w-full text-white placeholder-gray-500 focus:border-white transition-colors ${
                  errors[name] ? "border-red-500" : ""
                }`}
                type={type}
                placeholder={placeholder}
                {...register(name, { required: true })}
              />
              {errors[name] && (
                <span className="text-red-400 text-sm">
                  {label} is required
                </span>
              )}
            </div>
          ))}
          <div className="flex justify-center gap-7 w-full text-white font-bold">
            <button
              onClick={() => {
                navigate("/login");
              }}
              type="button"
              className="px-4 py-2 rounded-md bg-gray-700 hover:bg-gray-600 transition-colors"
            >
              Login
            </button>
            <button
              type="submit"
              className="px-5 py-2 rounded-md bg-white text-black hover:bg-gray-200 transition-colors"
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUpPage;
