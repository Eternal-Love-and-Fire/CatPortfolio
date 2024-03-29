import { CustomLink } from "../../CustomLink";

export const Nav = ({ sx }: { sx?: string }) => {
  return (
    <nav className={` ${sx}`}>
      <CustomLink text="Works" to="/CatPortfolio/works" />
      <CustomLink text="About" to="/CatPortfolio/about" />
      <CustomLink text="Resume" to="/CatPortfolio/resume" />
    </nav>
  );
};
