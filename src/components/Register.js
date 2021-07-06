import React, { useState} from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { userSchema } from "../validations/RegisterValidation";
import AuthService from "../services/Auth.service";

const Register = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(userSchema),
    mode: "onChange"
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const sleep = (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };

  const handleRegister = async (form,e) => {
    e.preventDefault();

    let username = e.target[0].value;
    let fullName = e.target[1].value;
    let email = e.target[2].value;
    let phoneNumber = e.target[3].value;
    let password = e.target[4].value;

    setMessage("");
    setLoading(true);
    await sleep(2000);

    AuthService.register(username, email, password, fullName, phoneNumber).then(
      () => {
        AuthService.login(username, password).then(
          () => {
            props.history.push("/");
            window.location.reload();
          },
          (error) => {
            const resMessage =
              (error.response &&
                error.response.data &&
                error.response.data.message) ||
              error.message ||
              error.toString();
            console.log(error);

            setLoading(false);
            setMessage(resMessage);
          }
        );
      },
      (error) => {
        const resMessage =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
        console.log(error);

        setLoading(false);
        setMessage(resMessage);
      }
    );
  };

  return (
    <div className="col-md-12">
      <div className="card card-container">
        <img
          src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
          alt="profile-img"
          className="profile-img-card"
        />

        <form onSubmit={handleSubmit(handleRegister)}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              className="form-control"
              name="username"
              {...register("username")}
            />
            <p style={{ color: "red", fontSize: "12px", fontWeight: "bold" }}>
              {errors.username?.message}
            </p>
          </div>

          <div className="form-group">
            <label htmlFor="fullName">Full Name</label>
            <input
              type="text"
              className="form-control"
              name="fullName"
              {...register("fullName")}
            />
            <p style={{ color: "red", fontSize: "12px", fontWeight: "bold"}}>
              {errors.fullName?.message}
            </p>
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              className="form-control"
              name="email"
              {...register("email")}
            />
            <p style={{ color: "red", fontSize: "12px", fontWeight: "bold" }}>
              {errors.email?.message}
            </p>
          </div>

          <div className="form-group">
            <label htmlFor="phoneNumber">Phone Number</label>
            <input
              type="text"
              className="form-control"
              name="phoneNumber"
              {...register("phoneNumber")}
            />
            <p style={{ color: "red", fontSize: "12px", fontWeight: "bold" }}>
              {errors.phoneNumber?.message}
            </p>
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="form-control"
              name="password"
              {...register("password")}
            />
            <p style={{ color: "red", fontSize: "12px", fontWeight: "bold" }}>
              {errors.password?.message}
            </p>
          </div>

          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              className="form-control"
              name="confirmPassword"
              {...register("confirmPassword")}
            />
            <p style={{ color: "red", fontSize: "12px", fontWeight: "bold" }}>
              {errors.confirmPassword && "Passwords should match"}
            </p>
          </div>

          <div className="form-group">
            <button className="btn btn-primary btn-block" disabled={loading}>
              {loading && (
                <span className="spinner-border spinner-border-sm"></span>
              )}
              <span>Sign Up</span>
            </button>
          </div>

          {message && (
            <div className="form-group">
              <div className="alert alert-danger" role="alert">
                {message}
              </div>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default Register;
