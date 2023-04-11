
import { useUser } from "@/hooks/useUser";
import { CreateUser, User } from "@/services/interface";
import { Button } from "@mui/material";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

const Registration = ({
  setOpenCreateUser,
}: {
    setOpenCreateUser: Dispatch<SetStateAction<boolean>>;
}) => {
  const {registerUser} = useUser();
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };
  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors },
  } = useForm<CreateUser>();
  const onSubmit: SubmitHandler<CreateUser> = (data) => onHandleSubmit(data);

  const onHandleSubmit = async (data: CreateUser) => {
    data.role = "passenger";
    registerUser.mutate(data);
    console.log("TESTT users data", registerUser)
    registerUser?.status === "success";
  };

  useEffect(() => {
    registerUser.isSuccess && setOpenCreateUser(false);
  }, [registerUser.isSuccess]);

  return (
    <form method="post" onSubmit={handleSubmit(onSubmit)}>
      <div className="flex justify-center">
        <div className="md:flex md:flex-col md:align-center">
          <div className=" overflow-visible">
            <div className="px-6 pb-6">
              <h2 className="text-2xl leading-6 font-semibold text-black">
                Registration Form
              </h2>
              <div className="pt-4">
                <label
                  placeholder="contact_number"
                  className="dialog-text-font-1"
                >
                  Contact number:
                </label>
                <input
                  type="text"
                  id={User.CONTACT_NUMBER}
                  {...register(User.CONTACT_NUMBER)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                  placeholder="0"
                  required
                />
              </div>
              <div className="pt-4">
                <label
                  placeholder="user_name"
                  className="dialog-text-font-1"
                >
                  UserName:
                </label>
                <input
                  type="text"
                  id={User.USER_NAME}
                  {...register(User.USER_NAME)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                  placeholder="0"
                  required
                />
              </div>
              <div className="pt-4">
                <label
                  placeholder="password"
                  className="dialog-text-font-1"
                >
                  Password
                </label>
                <input
                  type="text"
                  id={User.PASSWORD}
                  {...register(User.PASSWORD)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                  placeholder="0"
                  required
                />
              </div>
              <Button
                type="submit"
                onClick={() => undefined}
                className="mt-8 block w-full rounded-md py-2 text-md button-blue"
              >
                Submit
              </Button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Registration;
