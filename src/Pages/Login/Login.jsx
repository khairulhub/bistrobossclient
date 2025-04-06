import { useContext, useEffect, useRef, useState } from "react";

import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  LoadCanvasTemplateNoReload,
  validateCaptcha,
} from "react-simple-captcha";

import { Link, useLocation, useNavigate } from "react-router-dom";

import { Helmet } from "react-helmet-async";

import { AuthContext } from "../../Provider/AuthProvider";

const Login = () => {
  const captureRef = useRef(null);
  const [disabled, setDisabled] = useState(true);
  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();


  const from = location.state?.from?.pathname || "/";

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    signIn(email, password).then((result) => {
      const loggedUser = result.user;
      console.log(loggedUser);
      navigate(from, { replace: true });
    });
  };

  const handleValidateCapture = () => {
    const user_captcha_value = captureRef.current.value;
    if (validateCaptcha(user_captcha_value) == true) {
      setDisabled(false);
    }
  };

  return (
    <section>
      <Helmet>
        <title>Bisto Boss || Login </title>
      </Helmet>
      <div className="min-h-screen hero bg-base-200">
        <div className="flex-col hero-content lg:flex-row-reverse">
          <div className="w-1/2 text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              Please login to your account to access exclusive features and benefits. If you don't have an account, you can create one easily. Join us today and enjoy a seamless experience!{" "}
            </p>
          </div>
          <div className="w-1/2 max-w-sm shadow-2xl card bg-base-100 ">
            <form className="card-body" onSubmit={handleLogin}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>

              <div className="form-control">
                <label className="label">
                  <LoadCanvasTemplate />
                </label>
                <input
                  type="text"
                  ref={captureRef}
                  name="LoadCanvasTemplate"
                  placeholder="Write the text above "
                  className="input input-bordered"
                  required
                />

                <button
                  onClick={handleValidateCapture}
                  className="btn btn-info btn-xs mt-2 w-full"
                >
                  Validated
                </button>
              </div>
              <div className="mt-6 form-control">
                <input
                  disabled={disabled}
                  type="submit"
                  value="Login"
                  className="btn btn-primary w-full"
                />
              </div>
              <div className="mt-6 form-control">
                <label className="label">
                  <Link
                    to="/register"
                    className="label-text-alt link link-hover"
                  >
                    Don't have an account?
                  </Link>
                </label>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
