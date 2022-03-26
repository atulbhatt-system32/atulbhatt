import PropTypes from "prop-types";
import { Button, Typography } from "@mui/material";
import { LanguageSelection } from "../Components/LanguageSelection";
import { ROOT } from "navigation/CONSTANTS";
import { useNavigate } from "react-router-dom";

const HomeView = (props: any) => {
  const navigate = useNavigate();
  const goTo = (path: String) => {
    navigate(`${path || ROOT}`);
  };
  return (
    <div>
      <Typography variant="h2">HomeView {props.title}</Typography>
      <LanguageSelection />
      <Button
        variant="contained"
        color="primary"
        onClick={() => goTo("DASHBOARD")}
      >
        Dashboard
      </Button>
    </div>
  );
};

HomeView.propTypes = {
  title: PropTypes.string.isRequired,
};

export default HomeView;
