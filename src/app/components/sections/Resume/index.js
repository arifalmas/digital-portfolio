import { RESUME } from "../../../data";
import { ResumeCard, SectionTitle, SkillProgress } from "../../elements";
import { MdCastForEducation, MdWorkOutline } from "react-icons/md";

function Resume() {
  const { title, subtitle, typeWriter, education, experience, skills } = RESUME;

  return (
    <section name="Resume" className="element">
      <div className="container">
        {/* ==== Section Title ==== */}
        <SectionTitle
          center
          title={title}
          subtitle={subtitle}
          typeWriter={typeWriter}
        />
        <div className="mt-10">
          <div className="flex flex-wrap justify-between gap-5">
            {/* ==== Education ==== */}
            <div className="md:w-[45%] Resume__Items">
              {education.map((item, index) => (
                <ResumeCard
                  key={index}
                  title={item.institution}
                  year={item.year}
                  subtitle={item.subject}
                  description={item.description}
                  Icon={MdCastForEducation}
                  education
                />
              ))}
            </div>
            {/* ==== Experience ==== */}
            <div className="md:w-[45%] mt-10 md:mt-0 Resume__Items">
              {experience.map((item, index) => (
                <ResumeCard
                  key={index}
                  title={item.company}
                  year={item.year}
                  subtitle={item.role}
                  description={item.description}
                  Icon={MdWorkOutline}
                  experience
                />
              ))}
            </div>
          </div>
        </div>
        {/* ==== Skills ==== */}
        <div className="mt-14">
          <div className="flex flex-wrap justify-between">
            {skills.map((skill, index) => (
              <SkillProgress key={index} {...skill} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Resume;
