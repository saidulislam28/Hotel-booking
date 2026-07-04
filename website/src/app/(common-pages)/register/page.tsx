"use client";
import { useAuth } from "@/providers/useAuth";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";

type Data = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export default function Register() {
  const {
    handleSubmit,
    register,
    watch,
    formState: { errors },
  } = useForm<Data>();

  const { signup, loading } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const password = watch("password");

  const onSubmit = async (formData: Data) => {
    const { name, email, password } = formData;
    await signup({ name, email, phone: "", password });
  };

  return (
    <div className="bg-gray-50">
      <div className="min-h-[60%] flex flex-col items-center justify-start py-6 px-4">
        <div className="max-w-md w-full">
          <div className="p-8 rounded-2xl bg-white shadow">
            <h2 className="text-slate-900 text-center text-3xl font-semibold">
              Sign Up
            </h2>
            <form onSubmit={handleSubmit(onSubmit)} className="mt-12 space-y-6">
              {/* Name */}
              <div>
                <label className="text-slate-800 text-sm font-medium mb-2 block">
                  Full Name
                </label>
                <div className="relative flex items-center">
                  <input
                    type="text"
                    required
                    {...register("name")}
                    className="w-full text-slate-800 text-sm border border-slate-300 px-4 py-3 rounded-md outline-blue-600"
                    placeholder="Enter your full name"
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#bbb"
                    stroke="#bbb"
                    className="w-4 h-4 absolute right-4"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      cx="10"
                      cy="7"
                      r="6"
                      data-original="#000000"
                    ></circle>
                    <path
                      d="M14 15H6a5 5 0 0 0-5 5 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 5 5 0 0 0-5-5zm8-4h-2.59l.3-.29a1 1 0 0 0-1.42-1.42l-2 2a1 1 0 0 0 0 1.42l2 2a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-.3-.29H22a1 1 0 0 0 0-2z"
                      data-original="#000000"
                    ></path>
                  </svg>
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="text-slate-800 text-sm font-medium mb-2 block">
                  Email
                </label>
                <div className="relative flex items-center">
                  <input
                    type="email"
                    required
                    {...register("email")}
                    className="w-full text-slate-800 text-sm border border-slate-300 px-4 py-3 rounded-md outline-blue-600"
                    placeholder="Enter your email"
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#bbb"
                    stroke="#bbb"
                    className="w-4 h-4 absolute right-4"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"
                      data-original="#000000"
                    ></path>
                  </svg>
                </div>
              </div>

              {/* Password */}
              <div>
                <label className="text-slate-800 text-sm font-medium mb-2 block">
                  Password
                </label>
                <div className="relative flex items-center">
                  <input
                    {...register("password", {
                      required: "Password is required",
                      minLength: {
                        value: 6,
                        message: "Password must be at least 6 characters",
                      },
                    })}
                    type={showPassword ? "text" : "password"}
                    required
                    className={`w-full text-slate-800 text-sm border px-4 py-3 rounded-md outline-blue-600 ${
                      errors.password ? "border-red-400" : "border-slate-300"
                    }`}
                    placeholder="Enter password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 cursor-pointer"
                    aria-label={showPassword ? "Hide password" : "Show password"}
                  >
                    {showPassword ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="#bbb"
                        stroke="#bbb"
                        className="w-4 h-4"
                        viewBox="0 0 128 128"
                      >
                        <path
                          d="M64 104C22.127 104 1.367 67.496.504 65.943a4 4 0 0 1 0-3.887C1.367 60.504 22.127 24 64 24s62.633 36.504 63.496 38.057a4 4 0 0 1 0 3.887C126.633 67.496 105.873 104 64 104zM8.707 63.994C13.465 71.205 32.146 96 64 96c31.955 0 50.553-24.775 55.293-31.994C114.535 56.795 95.854 32 64 32 32.045 32 13.447 56.775 8.707 63.994zM64 88c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm0-40c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16z"
                          data-original="#000000"
                        ></path>
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="#bbb"
                        stroke="#bbb"
                        className="w-4 h-4"
                        viewBox="0 0 128 128"
                      >
                        <path
                          d="M109.457 24.543a4 4 0 0 0-5.656 0l-16.97 16.97C79.291 37.357 71.636 35 64 35 22.127 35 1.367 71.504.504 73.057a4 4 0 0 0 0 3.887c.55 1.005 9.97 17.256 27.14 28.6L14.8 118.387a4 4 0 1 0 5.656 5.656l88.999-89a4 4 0 0 0 .002-5.5zM32 76c0-17.645 14.355-32 32-32 5.34 0 10.38 1.315 14.81 3.633L70.6 55.843A15.876 15.876 0 0 0 64 54.333c-11.946 0-21.667 9.72-21.667 21.667 0 2.304.37 4.523 1.044 6.6l-10.21 10.21A60.67 60.67 0 0 1 12.707 75.994C17.465 68.795 36.146 44 64 44c4.255 0 8.353.673 12.244 1.856l-6.472 6.472A31.716 31.716 0 0 0 64 51c-13.785 0-25 11.215-25 25 0 1.893.225 3.732.627 5.504L32.14 89.99A70.13 70.13 0 0 1 8.707 75.994C13.465 68.795 32.146 44 64 44"
                          data-original="#000000"
                        ></path>
                        <path
                          d="M127.496 73.057C126.633 71.504 105.873 35 64 35c-1.945 0-3.87.098-5.77.274l-7.08 7.08A59.84 59.84 0 0 1 64 40c31.854 0 50.535 24.795 55.293 31.994a70.476 70.476 0 0 1-23.07 22.98l5.696 5.696c16.63-11.088 25.748-26.665 26.077-27.226a4 4 0 0 0-.5-3.387zM64 100c-13.785 0-25-11.215-25-25 0-1.893.225-3.732.627-5.504l-7.516 7.516C32.037 77.34 32 77.667 32 78c0 17.645 14.355 32 32 32 .333 0 .66-.037.988-.11z"
                          data-original="#000000"
                        ></path>
                      </svg>
                    )}
                  </button>
                </div>
                {errors.password && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.password.message}
                  </p>
                )}
              </div>

              {/* Confirm Password */}
              <div>
                <label className="text-slate-800 text-sm font-medium mb-2 block">
                  Confirm Password
                </label>
                <div className="relative flex items-center">
                  <input
                    {...register("confirmPassword", {
                      required: "Please confirm your password",
                      validate: (value) =>
                        value === password || "Passwords do not match",
                    })}
                    type={showConfirmPassword ? "text" : "password"}
                    required
                    className={`w-full text-slate-800 text-sm border px-4 py-3 rounded-md outline-blue-600 ${
                      errors.confirmPassword
                        ? "border-red-400"
                        : "border-slate-300"
                    }`}
                    placeholder="Re-enter password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-4 cursor-pointer"
                    aria-label={
                      showConfirmPassword ? "Hide password" : "Show password"
                    }
                  >
                    {showConfirmPassword ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="#bbb"
                        stroke="#bbb"
                        className="w-4 h-4"
                        viewBox="0 0 128 128"
                      >
                        <path
                          d="M64 104C22.127 104 1.367 67.496.504 65.943a4 4 0 0 1 0-3.887C1.367 60.504 22.127 24 64 24s62.633 36.504 63.496 38.057a4 4 0 0 1 0 3.887C126.633 67.496 105.873 104 64 104zM8.707 63.994C13.465 71.205 32.146 96 64 96c31.955 0 50.553-24.775 55.293-31.994C114.535 56.795 95.854 32 64 32 32.045 32 13.447 56.775 8.707 63.994zM64 88c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm0-40c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16z"
                          data-original="#000000"
                        ></path>
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="#bbb"
                        stroke="#bbb"
                        className="w-4 h-4"
                        viewBox="0 0 128 128"
                      >
                        <path
                          d="M109.457 24.543a4 4 0 0 0-5.656 0l-16.97 16.97C79.291 37.357 71.636 35 64 35 22.127 35 1.367 71.504.504 73.057a4 4 0 0 0 0 3.887c.55 1.005 9.97 17.256 27.14 28.6L14.8 118.387a4 4 0 1 0 5.656 5.656l88.999-89a4 4 0 0 0 .002-5.5zM32 76c0-17.645 14.355-32 32-32 5.34 0 10.38 1.315 14.81 3.633L70.6 55.843A15.876 15.876 0 0 0 64 54.333c-11.946 0-21.667 9.72-21.667 21.667 0 2.304.37 4.523 1.044 6.6l-10.21 10.21A60.67 60.67 0 0 1 12.707 75.994C17.465 68.795 36.146 44 64 44c4.255 0 8.353.673 12.244 1.856l-6.472 6.472A31.716 31.716 0 0 0 64 51c-13.785 0-25 11.215-25 25 0 1.893.225 3.732.627 5.504L32.14 89.99A70.13 70.13 0 0 1 8.707 75.994C13.465 68.795 32.146 44 64 44"
                          data-original="#000000"
                        ></path>
                        <path
                          d="M127.496 73.057C126.633 71.504 105.873 35 64 35c-1.945 0-3.87.098-5.77.274l-7.08 7.08A59.84 59.84 0 0 1 64 40c31.854 0 50.535 24.795 55.293 31.994a70.476 70.476 0 0 1-23.07 22.98l5.696 5.696c16.63-11.088 25.748-26.665 26.077-27.226a4 4 0 0 0-.5-3.387zM64 100c-13.785 0-25-11.215-25-25 0-1.893.225-3.732.627-5.504l-7.516 7.516C32.037 77.34 32 77.667 32 78c0 17.645 14.355 32 32 32 .333 0 .66-.037.988-.11z"
                          data-original="#000000"
                        ></path>
                      </svg>
                    )}
                  </button>
                </div>
                {errors.confirmPassword && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.confirmPassword.message}
                  </p>
                )}
              </div>

              <div className="!mt-12">
                <button
                  type="submit"
                  className="w-full py-2 px-4 text-[15px] font-medium tracking-wide rounded-md text-white bg-amber-400 hover:bg-amber-600 focus:outline-none cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
                  disabled={loading}
                >
                  {loading ? "Signing up..." : "Sign Up"}
                </button>
              </div>
              <p className="text-slate-800 text-sm !mt-6 text-center">
                Already have an account?{" "}
                <Link
                  href="/login"
                  className="text-blue-600 hover:underline ml-1 whitespace-nowrap font-semibold"
                >
                  Sign in here
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
