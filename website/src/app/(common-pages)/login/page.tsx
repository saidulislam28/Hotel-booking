"use client";
import { useAuth } from "@/providers/useAuth";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";

type Data = { email: string; password: string };

export default function Login() {
  const { handleSubmit, register } = useForm<Data>();
  const { signIn, loading } = useAuth();
  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = async (formData: Data) => {
    if (formData.email && formData.password) {
      await signIn(formData.email, formData.password);
    }
  };

  return (
    <div className="bg-gray-50">
      <div className="min-h-[60%] flex flex-col items-center justify-start py-6 px-4">
        <div className="max-w-md w-full">
          <div className="p-8 rounded-2xl bg-white shadow">
            <h2 className="text-slate-900 text-center text-3xl font-semibold">
              Sign in
            </h2>
            <form onSubmit={handleSubmit(onSubmit)} className="mt-12 space-y-6">
              <div>
                <label className="text-slate-800 text-sm font-medium mb-2 block">
                  User Email
                </label>
                <div className="relative flex items-center">
                  <input
                    type="text"
                    required
                    {...register("email")}
                    className="w-full text-slate-800 text-sm border border-slate-300 px-4 py-3 rounded-md outline-blue-600"
                    placeholder="Enter user name"
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

              <div>
                <label className="text-slate-800 text-sm font-medium mb-2 block">
                  Password
                </label>
                <div className="relative flex items-center">
                  <input
                    {...register("password")}
                    type={showPassword ? "text" : "password"}
                    required
                    className="w-full text-slate-800 text-sm border border-slate-300 px-4 py-3 rounded-md outline-blue-600"
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
              </div>

              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 shrink-0 text-blue-600 focus:ring-blue-500 border-slate-300 rounded"
                  />
                  <label className="ml-3 block text-sm text-slate-800">
                    Remember me
                  </label>
                </div>
                <div className="text-sm">
                  <Link
                    href="/register"
                    className="text-blue-600 hover:underline font-semibold"
                  >
                    Forgot your password?
                  </Link>
                </div>
              </div>

              <div className="!mt-12">
                <button
                  type="submit"
                  className="w-full py-2 px-4 text-[15px] font-medium tracking-wide rounded-md text-white bg-amber-400 hover:bg-amber-600 focus:outline-none cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
                  disabled={loading}
                >
                  {loading ? "Sign in..." : "Sign in"}
                </button>
              </div>
              <p className="text-slate-800 text-sm !mt-6 text-center">
                Don{"'"}t have an account?{" "}
                <a
                  href="/register"
                  className="text-blue-600 hover:underline ml-1 whitespace-nowrap font-semibold"
                >
                  Register here
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
