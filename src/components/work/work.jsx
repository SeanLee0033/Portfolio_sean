import React from 'react';
import Carousel from 'react-elastic-carousel';
import Fade from 'react-reveal/Fade';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import Projects from './projects.json';
import {
  ProjectsContainer,
  ProjectsWrapper,
  ProjectsCard,
  ProjectsAdditional,
  ProjectTitle,
  ProjectsMoreInfo,
  ProjectCoords,
  ProjectStats,
  ProjectsGeneral,
  ProjectsDetails,
  ProjectLangWrapper,
  ProjectLang,
  ProjectTech,
  ProjectType,
  ProjectsMore,
  ProjectsLink,
  ProjectsIcon,
  ProjectsH1,
  ProjectsCardWrapper,
} from './projectsElements';

const Work = () => {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 700, itemsToShow: 2, itemsToScroll: 2 },
    { width: 870, itemsToShow: 3, itemsToScroll: 3 },
    { width: 1200, itemsToShow: 4, itemsToScroll: 4 },
    { width: 1700, itemsToShow: 5, itemsToScroll: 5 },
  ];
  return (
    <>
      <div id="work">
        <ProjectsContainer>
          <ProjectsWrapper>
            <ProjectsH1>Projects</ProjectsH1>
            <ProjectsCardWrapper>
              <Carousel
                breakPoints={breakPoints}
                showArrows={Projects.length > 0}
                pagination={Projects.length > 0}
              >
                {Projects.map((project, key) => (
                  <Fade right cascade key={key}>
                    <div id="projects__card">
                      <ProjectsCard>
                        <ProjectsAdditional>
                          <ProjectTitle>{project.name}</ProjectTitle>
                          <ProjectsMoreInfo>
                            <ProjectsIcon
                              src={
                                require(`../../assets/img/projects/${project.img}`)
                                  ?.default
                              }
                              // style={{ color: '#fff' }}
                              alt={project.name}
                            />
                            <ProjectCoords>
                              <ProjectLangWrapper>
                                {project.languages.map((language, langKey) => (
                                  <ProjectLang key={langKey}>
                                    {language}
                                  </ProjectLang>
                                ))}
                              </ProjectLangWrapper>
                              {project.technologies.length ? (
                                <ProjectLangWrapper>
                                  {project.technologies.map(
                                    (technology, techKey) => (
                                      <ProjectTech key={techKey}>
                                        {technology}
                                      </ProjectTech>
                                    )
                                  )}
                                </ProjectLangWrapper>
                              ) : (
                                ''
                              )}
                            </ProjectCoords>
                            <ProjectStats>
                              <ProjectsLink
                                href={`${project.git}`}
                                rel="noreferrer"
                                target="_blank"
                              >
                                <FontAwesomeIcon color="grey" icon={faGithub} />
                              </ProjectsLink>
                              {project.link ? (
                                <ProjectsLink
                                  href={`${project.link}`}
                                  rel="noreferrer"
                                  target="_blank"
                                >
                                  <FontAwesomeIcon color="grey" icon={faLink} />
                                </ProjectsLink>
                              ) : (
                                ''
                              )}
                            </ProjectStats>
                          </ProjectsMoreInfo>
                        </ProjectsAdditional>
                        <ProjectsGeneral>
                          <ProjectsIcon
                            src={
                              require(`../../assets/img/projects/${project.img}`)
                                ?.default
                            }
                            alt={project.name}
                          />
                          <ProjectLangWrapper>
                            {project.types.map((type, typeKey) => (
                              <ProjectType key={typeKey}>{type}</ProjectType>
                            ))}
                          </ProjectLangWrapper>
                          <div>
                            {project.details.map((detail, detailKey) => (
                              <ProjectsDetails key={detailKey}>
                                {detail}
                              </ProjectsDetails>
                            ))}
                          </div>
                          <br />
                          {window.innerWidth > 480 ? (
                            <ProjectsMore>
                              Mouse over for more info
                            </ProjectsMore>
                          ) : (
                            <ProjectsMore>
                              Touch title for more info
                            </ProjectsMore>
                          )}
                        </ProjectsGeneral>
                      </ProjectsCard>
                    </div>
                  </Fade>
                ))}
              </Carousel>
            </ProjectsCardWrapper>
          </ProjectsWrapper>
        </ProjectsContainer>
      </div>
    </>
  );
};

export default Work;
