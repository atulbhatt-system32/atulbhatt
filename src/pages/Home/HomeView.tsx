import PropTypes from "prop-types";
import { ROOT } from "navigation/CONSTANTS";
import { useNavigate } from "react-router-dom";
import styles from "./HomeView.module.css";
import { DirectionElement, CTA, Button, Cards, PictureCard } from "components";
import { InstagramLogo } from "assets/svgs";

const IntroSection = () => {
  return (
    <div className={styles.intro_section}>
      <div className={styles.intro_section_title}>
        <span>Hi</span>
        <div className={styles.whoami}>
          <span>I'm</span> <span className={styles.my_name}>Atul</span>
        </div>
        <div className={styles.whoami_detailed}>
          <span className={styles.professional_role}>
            Frontend developer & technical blogger.
          </span>
          <span>
            {" "}
            I’ve always been a lover of tech and that love brought me into the
            software development field. I’ve been into programming since 2016.
          </span>
        </div>
        <div className={styles.social_cta_row}>
          <CTA icon={<InstagramLogo />} variant="circular" filled />
          <CTA icon={<InstagramLogo />} variant="circular" filled />
          <CTA icon={<InstagramLogo />} variant="circular" filled />
        </div>
        <div className={styles.cta_button_row}>
          <Button label="Resume" />
          <Button label="Contact" variant="outlined" />
        </div>
      </div>
      <PictureCard />
    </div>
  );
};

const SkillsSection = () => {
  const skills = [
    { title: "HTML" },
    { title: "CSS" },
    { title: "JS" },
    { title: "React" },
  ];
  return (
    <section className={styles.skills_section}>
      <div className={styles.skills_section_title}>
        <span>Skill</span>
      </div>
      <div className={styles.skills_section_subtitle}>
        <span>Technologies I'm familiar with.</span>
      </div>
      <div className={styles.skills_card_row}>
        {skills.map((skill) => (
          <Cards purpose="skills">
            <div className={styles.skill_name}>{skill.title}</div>
          </Cards>
        ))}
      </div>
    </section>
  );
};

const ProjectsSection = () => {
  const projects = [
    {
      title: "RecruitBae",
      description: "A recruitment platform for developers",
    },
    {
      title: "SourceBae",
      description: "A recruitment platform for developers",
    },
    {
      title: "Side",
      description: "A recruitment platform for developers",
    },
    {
      title: "Compex Analytics",
      description: "A recruitment platform for developers",
    },
    {
      title: "Automyze",
      description: "A recruitment platform for developers",
    },
    {
      title: "Bandhify",
      description: "A recruitment platform for developers",
    },
    {
      title: "Samadhan",
      description: "A recruitment platform for developers",
    },
  ];
  return (
    <div className={styles.projects_section}>
      <div className={styles.projects_section_title}>
        <span>Projects</span>
      </div>
      <div className={styles.projects_section_subtitle}>
        <span>Projects I've done till date.</span>
      </div>
      <div className={styles.projects_card_row}>
        {projects.map((project) => (
          <Cards purpose="project">
            <div className={styles.children_wrapper}>
              <div className={styles.projectcard_title}>{project.title}</div>
              <span className={styles.projectcard_body}>
                {project.description}
              </span>
            </div>
          </Cards>
        ))}
      </div>
    </div>
  );
};

const HomeView = (props: any) => {
  const navigate = useNavigate();
  const goTo = (path: String) => {
    navigate(`${path || ROOT}`);
  };
  return (
    <>
      <div className={styles.homeview_wrapper}>
        <div className={styles.aboutme_section}>
          <DirectionElement />
          <IntroSection />
        </div>
      </div>
      <SkillsSection />
      <ProjectsSection />
    </>
  );
};

HomeView.propTypes = {
  title: PropTypes.string.isRequired,
};

export default HomeView;
