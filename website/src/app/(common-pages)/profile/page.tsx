"use client";
import { useAuth } from "@/providers/useAuth";
import { Patch } from "@/services/api/api";
/* eslint-disable */
import TitleHelmet from "@/utils/Helmet";
import PageTitle from "@/utils/PageTitle";
import { useMutation } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
interface UserFormData {
  name: string;
  email: string;
  phone: string;
}

const title = "Profile";

const Page = () => {
  const { user, updateUserProfile } = useAuth();
  const [isEditing, setIsEditing] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm<UserFormData>({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
    },
  });

  // Set form values when user data is available
  useEffect(() => {
    if (user) {
      reset({
        name: user.name || "",
        email: user.email || "",
        phone: user.phone || "",
      });
    }
  }, [user, reset]);

  const updateUserMutation = useMutation({
    mutationFn: async (data: any) => await Patch(`/user/${user?._id}`, data),
    onSuccess: async (data) => {
      toast.success("Updated successfully!!!");
      console.log("response from data", data?.data);
      await updateUserProfile(data?.data);
    },
    onError: () => {
      toast.error("Something went wrong!!!");
    },
  });

  const onSubmit = (data: UserFormData) => {
    try {
      setIsEditing(true);

      updateUserMutation.mutate(data);

      setIsEditing(false);
    } catch (error) {
      console.log("error", error);
    }
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleCancelClick = () => {
    // Reset form to original user data
    if (user) {
      reset({
        name: user.name || "",
        email: user.email || "",
        phone: user.phone || "",
      });
    }
    setIsEditing(false);
  };

  // Watch for form changes (optional - for debugging)
  useEffect(() => {
    const subscription = watch((value) => {
      if (isEditing) {
        console.log("Form changed:", value);
      }
    });
    return () => subscription.unsubscribe();
  }, [watch, isEditing]);

  return (
    <>
      <TitleHelmet title={title} />
      <PageTitle
        breadcrumbs={[{ title: "Home", href: "/" }, { title: title }]}
        title={title}
      />
      <div className="max-w-lg mx-auto p-5">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold text-slate-800">User Profile</h2>
          {!isEditing && (
            <button
              type="button"
              onClick={handleEditClick}
              className="py-2 px-4 text-sm font-medium tracking-wide rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none cursor-pointer transition-colors"
            >
              Edit Profile
            </button>
          )}
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="mt-2 space-y-6">
          <div>
            <label className="text-slate-800 text-sm font-medium mb-2 block">
              Name
            </label>
            <div className="relative flex items-center">
              <input
                type="text"
                {...register("name", { required: "Name is required" })}
                disabled={!isEditing}
                className={`w-full text-slate-800 text-sm border border-slate-300 px-4 py-3 rounded-md outline-blue-600 ${
                  !isEditing ? "bg-slate-100 cursor-not-allowed" : ""
                }`}
                placeholder="Enter name"
              />
            </div>
            {errors.name && (
              <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
            )}
          </div>

          <div>
            <label className="text-slate-800 text-sm font-medium mb-2 block">
              Email
            </label>
            <div className="relative flex items-center">
              <input
                type="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address",
                  },
                })}
                disabled={!isEditing}
                className={`w-full text-slate-800 text-sm border border-slate-300 px-4 py-3 rounded-md outline-blue-600 ${
                  !isEditing ? "bg-slate-100 cursor-not-allowed" : ""
                }`}
                placeholder="Enter user email"
              />
            </div>
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          <div>
            <label className="text-slate-800 text-sm font-medium mb-2 block">
              Phone
            </label>
            <div className="relative flex items-center">
              <input
                type="tel"
                {...register("phone", {})}
                disabled={!isEditing}
                className={`w-full text-slate-800 text-sm border border-slate-300 px-4 py-3 rounded-md outline-blue-600 ${
                  !isEditing ? "bg-slate-100 cursor-not-allowed" : ""
                }`}
                placeholder="Enter phone number"
              />
            </div>
            {errors.phone && (
              <p className="text-red-500 text-xs mt-1">
                {errors.phone.message}
              </p>
            )}
          </div>

          {isEditing && (
            <div className="flex gap-4 !mt-12">
              <button
                type="submit"
                className="flex-1 py-2 px-4 text-[15px] font-medium tracking-wide rounded-md text-white bg-amber-400 hover:bg-amber-600 focus:outline-none cursor-pointer transition-colors"
              >
                Save Changes
              </button>
              <button
                type="button"
                onClick={handleCancelClick}
                className="flex-1 py-2 px-4 text-[15px] font-medium tracking-wide rounded-md text-slate-700 bg-slate-200 hover:bg-slate-300 focus:outline-none cursor-pointer transition-colors"
              >
                Cancel
              </button>
            </div>
          )}
        </form>
      </div>
    </>
  );
};

export default Page;
