import "../../App.css";
import { Button } from "@material-tailwind/react";
import { ListDefault } from "../ListGroup";

import React, { useEffect, Fragment, Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { connect } from "react-redux";

const SignUpPage = lazy(() => import("../../Pages/SignUpPage/SignUpPage"));

export default function App() {
  return (
    <div>
      <h1 className="text-3xl font-bold underline shadow-2xl text-orange-500">
        Zagreus
      </h1>
      <Routes>
        <Route path="/signup" element={<SignUpPage />} />
      </Routes>
    </div>
  );
}
