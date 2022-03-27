import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "./ProvideAuth";
import { LinkRoute } from "components/LinkRoute";
import { ROOT } from "navigation/CONSTANTS";
import { Typography } from "@mui/material";
import LoadingButton from "components/LoadingButton";

export default function Login() {
  let navigate = useNavigate();
  let location = useLocation();
  let auth = useAuth();
  const [isLoading, setIsLoading] = useState(false);

  let { from }: any = location.state || { from: { pathname: "/" } };

  return (
    <>
      <LinkRoute to={ROOT}>Home</LinkRoute>
      <Typography variant="h2">Login Page</Typography>
      <br />
      <p>You must log in to view the page: {from.pathname}</p>
      <LoadingButton isLoading={isLoading}>Log in</LoadingButton>
    </>
  );
}
