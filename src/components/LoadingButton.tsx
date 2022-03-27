import PropTypes from "prop-types";
// MUI Stuff
import { Typography, Button, CircularProgress } from "@mui/material";

function LoadingButton(props: any) {
  const { children, isLoading, ...rest } = props;
  return (
    <>
      <Button
        {...rest}
        variant={props.variant || "contained"}
        color={props.color || "primary"}
        disabled={isLoading || props.disabled}
      >
        {isLoading && <CircularProgress size={20} />}
        {/* You can add your required styling to the button text/children */}
        <Typography component="span">{children}</Typography>
        {/* {children} */}
      </Button>
    </>
  );
}

LoadingButton.propTypes = {
  children: PropTypes.string.isRequired,
  isLoading: PropTypes.bool.isRequired,
  btnVariant: PropTypes.string,
  btnClass: PropTypes.string,
  btnColor: PropTypes.string,
  btnType: PropTypes.string,
  onClickHandle: PropTypes.func,
  onclick: PropTypes.func,
};

export default LoadingButton;
