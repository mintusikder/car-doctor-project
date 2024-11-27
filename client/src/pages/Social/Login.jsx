import { Link,  useLocation, useNavigate } from "react-router-dom";
import loginImg from "../../assets/images/login/login.svg";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";

const Login = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const { siginUser } = useContext(AuthContext);
  const handelLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    siginUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate(location.state ? location.state : "/")

      })
      .catch((err) => {
        console.error(err);
      });
  };
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col md:flex-row gap-10 items-center">
        {/* Image Section */}
        <div className="text-center md:text-left flex-1">
          <img src={loginImg} alt="Login Illustration" />
        </div>

        {/* Form Section */}
        <div className="card bg-base-100 w-full max-w-md shadow-2xl p-8 flex-1">
          <form onSubmit={handelLogin} className="space-y-6">
            <fieldset className="space-y-4">
              <legend className="text-3xl font-bold text-center">Login</legend>

              {/* Email Input */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  className="input input-bordered"
                  required
                />
              </div>

              {/* Password Input */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a
                    href="/forgot-password"
                    className="label-text-alt link link-hover"
                  >
                    Forgot password?
                  </a>
                </label>
              </div>
            </fieldset>

            {/* Submit Button */}
            <div className="form-control mt-6">
              <button type="submit" className="btn btn-primary w-full">
                Login
              </button>
            </div>
            <p>
              New to{" "}
              <Link className="underline" to="/register">
                Register
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
