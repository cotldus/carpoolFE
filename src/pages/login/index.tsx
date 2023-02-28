import { useFormik } from "formik";
import style from "./login.module.css";
import { Button } from "@mui/material";

export default function Login() {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: ""
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    
    <div className={style.login}>
      <form onSubmit={formik.handleSubmit}>
        <div className={style.login_wrapper}>
          <span className={style.login_title}>Login</span>
          <div className={style.input_wrapper}>
            <input
              className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              id="email"
              name="email"
              type="email"
              placeholder="Email"
              onChange={formik.handleChange}
              value={formik.values.email}
            ></input>
          </div>
          <div className={style.input_wrapper}>
            <input
              className={style.input}
              type="password"
              name="password"
              placeholder="Password"
            ></input>
          </div>
          <div className={style.button}>
          <Button variant="outlined" type="submit">Submit</Button>
          </div>
        </div>
      </form>
    </div>
  );
}
