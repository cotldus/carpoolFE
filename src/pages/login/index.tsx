import { useFormik } from "formik";
import style from "./login.module.css";

export default function Login() {
  const formik = useFormik({
    initialValues: {
      email: "",
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
              className={style.input}
              id="Email"
              name="Email"
              type="Email"
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
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}
