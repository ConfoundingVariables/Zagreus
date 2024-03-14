import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { Link } from "react-router-dom";
import { useFormik } from "formik";

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Button,
} from "@material-tailwind/react";

export default function SignUpCard() {
  return (
    <Card className="w-96 ">
      <CardHeader
        variant="gradient"
        color="gray"
        className="mb-4 grid h-28 place-items-center"
      >
        <Typography variant="h3" color="white">
          Sign Up
        </Typography>
      </CardHeader>
      <CardBody className="flex flex-col gap-4">
        <Input label="Email" size="lg" />
        <Input label="Full Name" size="lg" />
        <Input label="Username" size="lg" />
        <Input label="Password" size="lg" />
        <div className="-ml-2.5"></div>
      </CardBody>
      <CardFooter className="pt-0">
        <Button variant="gradient" fullWidth>
          Sign In
        </Button>
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
