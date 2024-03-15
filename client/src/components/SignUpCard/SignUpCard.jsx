import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";

import { signUpStart } from "../../redux/user/userActions";
import { selectError, selectFetching } from "../../redux/user/userSelectors";

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Button,
} from "@material-tailwind/react";

export default function SignUpCard({ signUpStart, error, fetching }) {
  const { values, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: {
      email: "",
      fullname: "",
      username: "",
      password: "",
    },
    onSubmit: (values) => console.log(values),
    // signUpStart(
    //   values.email,
    //   values.fullName,
    //   values.username,
    //   values.password
    // ),
  });
  return (
    <Card className="grid justify-center">
      <CardHeader
        variant="gradient"
        color="gray"
        className="mb-4 grid h-28 place-items-center"
      >
        <Typography variant="h3" color="white">
          Sign Up
        </Typography>
      </CardHeader>
      <form className="form-card__form" onSubmit={handleSubmit}>
        <CardBody className="flex flex-col gap-4">
          <Input
            type="text"
            name="email"
            label="Email"
            value={values.email}
            onBlur={handleBlur}
            onChange={handleChange}
            size="lg"
          />
          <Input
            type="text"
            label="Full Name"
            name="fullname"
            value={values.fullname}
            onBlur={handleBlur}
            onChange={handleChange}
            size="lg"
          />
          <Input
            type="text"
            label="Username"
            name="username"
            value={values.username}
            onBlur={handleBlur}
            onChange={handleChange}
            size="lg"
          />
          <Input
            type="password"
            label="Password"
            name="password"
            value={values.password}
            onBlur={handleBlur}
            onChange={handleChange}
            size="lg"
          />
          <div className="-ml-2.5"></div>
          <Button type="submit" variant="gradient" fullWidth>
            Sign Up
          </Button>
        </CardBody>
      </form>
      <CardFooter className="pt-0">
        <Typography variant="small" className="mt-6 flex justify-center">
          Have an account?
          <Typography
            as="a"
            href="/login"
            variant="small"
            color="blue-gray"
            className="ml-1 font-bold"
          >
            Log In
          </Typography>
        </Typography>
      </CardFooter>
    </Card>
  );
}
