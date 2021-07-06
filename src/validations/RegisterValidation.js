import * as yup from "yup";

export const userSchema = yup.object().shape({
  username: yup
    .string()
    .min(4, "Username should be at least 4 characters long")
    .required("Username is required"),
  password: yup
    .string()
    .matches(
      /.*[a-z].*/,
      "Your password should contain at least 1 small letter"
    )
    .matches(
      /.*[A-Z].*/,
      "Your password should contain at least 1 capital letter"
    )
    .matches(/.*[0-9].*/, "Your password should contain at least 1 number")
    .min(8,"Password should be at least 8 characters long")
    .required("Password is required"),
  confirmPassword: yup.string().oneOf([yup.ref("password"), null]),
  fullName: yup.string().required("Fullname is required"),
  email: yup
    .string()
    .email("Please enter a valid email")
    .required("Email is required"),
  phoneNumber: yup
    .string()
    .matches(/^[0-9]{10}$/, "Invalid Phone Number")
    .required("Phone Number is required"),
});
