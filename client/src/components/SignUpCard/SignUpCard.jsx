import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { Link } from "react-router-dom";
import { useFormik } from "formik";

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
  const formik = useFormik({
    initialValues: {
      email: "",
      fullName: "",
      username: "",
      password: "",
    },
    onSubmit: (values) =>
      signUpStart(
        values.email,
        values.fullName,
        values.username,
        values.password
      ),
  });
  return (
    <Card className="w-32">
      <CardHeader
        variant="gradient"
        color="gray"
        className="mb-4 grid h-28 place-items-center"
      >
        <Typography variant="h3" color="white">
          Sign Up
        </Typography>
      </CardHeader>
      {Object.keys(formik.errors).map((field) => {
        if (formik.touched[field]) {
          return (
            <p
              className="error"
              key={formik.errors[field]}
              style={{ marginTop: "0" }}
            >
              {formik.errors[field]}
            </p>
          );
        }
      })}
      <form className="form-card__form" onSubmit={formik.handleSubmit}>
        <CardBody className="flex flex-col gap-4">
          <Input
            name="email"
            fieldProps={formik.getFieldProps("email")}
            valid={formik.touched.email && !formik.errors.email}
            placeholder="Email address"
            label="Email"
            size="lg"
          />
          <Input
            name="fullName"
            fieldProps={formik.getFieldProps("fullName")}
            valid={formik.touched.fullName && !formik.errors.fullName}
            placeholder="Full Name"
            label="Full Name"
            size="lg"
          />
          <Input
            name="username"
            fieldProps={formik.getFieldProps("username")}
            valid={formik.touched.username && !formik.errors.username}
            placeholder="Username"
            label="Username"
            size="lg"
          />
          <Input
            name="password"
            fieldProps={formik.getFieldProps("password")}
            placeholder="Password"
            valid={formik.touched.password && !formik.errors.password}
            type="password"
            label="Password"
            size="lg"
          />
          <div className="-ml-2.5"></div>
          <Button
            loading={fetching}
            disabled={
              Object.keys(formik.touched).length === 0 ? true : !formik.isValid
            }
            variant="gradient"
            fullWidth
          >
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
