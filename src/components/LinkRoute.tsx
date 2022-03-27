/**
 * LinkRoute is just any name for all the Link tags you will use throughout the app.
 * It is recommended to keep the styling and other stuff consistant.
 * All Link tags that are pointing to routes within this app should be imported from react-router-dom.
 * All Link tags that are pointing to an external public address should be imported from material-ui.
 */
import { ReactNode, FC } from "react";
import { Link } from "react-router-dom";

interface Props {
  to: string;
  children: ReactNode;
}

export const LinkRoute: FC<Props> = ({ children, ...props }) => {
  return <Link {...props}>{children}</Link>;
};
