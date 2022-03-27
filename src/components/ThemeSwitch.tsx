// import { dark, light } from "@material-ui/core/styles/createPalette";
import { Switch, Button } from "@mui/material";
import { FC } from "react";
interface Props {
  darkState: boolean;
  handleThemeChange: () => void;
}
export const ThemeSwitch: FC<Props> = ({ darkState, handleThemeChange }) => {
  return (
    <div>
      <Switch checked={darkState} onChange={handleThemeChange} />
      <Button
        variant="contained"
        color="primary"
        onClick={() => {
          console.log("Btn clicked!");
        }}
      >
        Theme Test
      </Button>
    </div>
  );
};
