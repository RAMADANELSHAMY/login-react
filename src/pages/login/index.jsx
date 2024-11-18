import "./index.scss";
import logo from "../../assets/logo-2-light.png";
import google from "../../assets/google.png";
import apple from "../../assets/apple-logo.png";
import { useRef, useState } from "react";

export default function Login() {
  const appleHover = useRef();
  const [toggle, setToggle] = useState(false);
  const appleHoverEnter = () => {
    !toggle && ((appleHover.current.style.opacity = "1"), setToggle(true));
  };
  const appleHoverLeave = () => {
    toggle && ((appleHover.current.style.opacity = "0"), setToggle(false));
  };
  return (
    <div id="login" className="col-12 d-flex flex-wrap ">
      {/* leftSide */}
      <div className="left-side col-12 col-md-4 position-relative">
        <div className="filter d-flex justify-content-center h-100 col-12 top-0 start-0 position-absolute">
          <div className="content col-10 col-md-9 ">
            <a href="login" className="d-flex my-5 ">
              <img className="logo" src={logo} alt="Logo" />
            </a>
            <h1 className="m-0 text-white py-3 fw-lighter">
              <span className="fw-semibold">Welcome</span>, We are glad to see
              you again!
            </h1>
          </div>
        </div>
      </div>
      {/* rightSide */}
      <div className="right-side col-12 col-md-8 position-relative">
        <div className="filter d-flex justify-content-center align-items-center col-12 h-100 top-0 start-0 position-absolute">
          <div className="col-10 col-md-6 content ">
            {/* rightSide-topContent */}
            <div className="top-content col-12 position-relative">
              <p className="text-white col-12">
                Not a member?<a href="#"> Register</a>
              </p>
              <h4 className="mb-4 fw-semibold text-white col-12">
                Log In to Your Account
              </h4>
              <div className="d-flex gap-1 col-12 ">
                <a
                  href="#"
                  className=" btn btn-primary d-flex align-items-center gap-3"
                >
                  <img className="google " src={google} alt="" />
                  Log in with Google
                </a>
                <a
                  href="#"
                  className="btn btn-secondary"
                  onMouseEnter={appleHoverEnter}
                  onMouseLeave={appleHoverLeave}
                >
                  <img className="apple" src={apple} alt="" />
                </a>
              </div>
              <div
                ref={appleHover}
                className="titled position-absolute col-4 bg-black text-white "
              >
                Sign in with apple
              </div>

              <div className="col-12  d-flex  hr-wrapper align-items-center">
                <div className="hr bg-secondary bg-opacity-50 col-1  "></div>
                <span className="col-2  text-center text-white-50  ">OR</span>
                <div className="hr bg-secondary bg-opacity-50 col-9 "></div>
              </div>
            </div>
            {/* rightSide-bottomContent */}
            <form className="col-12 d-flex flex-wrap">
              <label htmlFor="adress" className="text-white ">
                Email Address
              </label>
              <input
                type="text"
                id="adress"
                className=" mt-2  mb-3 col-12 rounded-2 border-0 form-dark"
                placeholder="Enter Your Email"
              />
              <label htmlFor="password" className="col-6 text-white ">
                Password
              </label>
              <a href="#" className="col-6 text-end">
                Forgot Password ?
              </a>
              <input
                type="password"
                id="password"
                className=" mt-2 mb-3  col-12 rounded-2 border-0 form-dark"
                placeholder="Enter Password"
              />
              <button className="btn btn-primary col-3 fw-medium ">
                Log in
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
