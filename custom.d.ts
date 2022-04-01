declare module "*.module.scss";
declare module "*.module.css";
declare module "*.png";
declare module "*.gif";

declare module "*.svg" {
  const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  export default content;
}
