import styled from 'styled-components';

export const ProjectsContainer = styled.div`
  height: 90vh;
  min-height: 800px;
  max-height: 1000px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* align-items: center; */
  /* background: #C5E1DE; */
  background: #030015;

  @media screen and (max-width: 450px) {
    min-height: 700px;
    /* padding-bottom: 0; */
    padding: 10vh 0;
  }
`;

export const ProjectsWrapper = styled.div`
  height: 719px;
  /* height: auto; */
`;

export const ProjectsCardWrapper = styled.div`
  /* margin: 0 auto; */
  display: grid;
  /* grid-template-columns: 1fr 1fr 1fr 1fr; */
  align-items: center;
  margin-left: 7vw;
  margin-right: 7vw;
  touch-action: pan-y;
  --ms-touch-action: pan-y;
  /* grid-gap: 16px; */

  @media screen and (max-width: 1000) {
    margin-left: 0;
    margin-right: 0;
    /* grid-template-columns: 1fr 1fr 1fr; */
  }
  /* 
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 480px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  } */
`;

export const ProjectsCard = styled.div`
  width: 280px;
  height: 425px;
  color: #fff;
  background-color: #fff;
  /* background: linear-gradient(#f8f8f8, #fff); */
  background: #94B9F3;
  box-shadow: 0 8px 16px -8px rgba(0, 0, 0, 0.4);
  border-radius: 6px;
  overflow: hidden;
  position: relative;
  /* margin: 1rem; */
  margin: 40px 0 20px;
  outline: none;

  @media not all and (pointer: coarse) {
    &:hover > * {
      height: 100%;
      border-radius: 0 6px 6px 0;
    }
  }
`;

export const ProjectsIcon = styled.img`
  margin: 5px;
  height: 60px;
  width: 60px;
  filter: invert(99%) sepia(1%) saturate(5%) hue-rotate(14deg) brightness(101%)
    contrast(101%);
`;

export const ProjectsH1 = styled.h1`
  font-size: 2.5rem;
  text-align: center;
  color: #fff;

  margin-bottom: 2.5rem;
  position: relative;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
    margin-bottom: 1rem;
  }
`;

export const ProjectsP = styled.p`
  /* font-size: 1.5rem; */
  /* text-align: center; */
  /* color: #000; */
  color: #fff;
  margin: 0 10px 5px;
  position: relative;

  @media screen and (max-width: 480px) {
    // font-size: 1.2rem;
  }
`;

export const ProjectsCounter = styled.p`
  font-size: 1.5rem;
  text-align: center;
  /* color: #000; */
  color: #fff;
  margin: 10px 0 10px;
  position: relative;

  @media screen and (max-width: 480px) {
    font-size: 1.2rem;
    margin-bottom: 20px;
  }
`;

export const ProjectLangWrapper = styled.ul`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  justify-content: center;
  margin-top: 5px;
  margin-bottom: 5px;

  /* &::after {
    content: '';
    width: 100%;
    margin: 5px;
    border: 1px solid #fff;
  } */
`;

export const ProjectType = styled.li`
  border-radius: 9px;
  border-color: none;
  padding: 1px 7px;
  margin: 5px;
  background: #00223d;
  color: #fff;
  font-size: 1.1rem;
`;

export const ProjectLang = styled.li`
  border-radius: 8px;
  border-color: none;
  padding: 1px 7px;
  margin: 5px;
  background: #f58905;
  color: #fff;
  font-size: 0.8rem;
`;

export const ProjectTech = styled.li`
  border-radius: 8px;
  border-color: none;
  padding: 1px 7px;
  margin: 5px;
  background: #ffc107;
  color: #fff;
  font-size: 0.8rem;
`;

export const ProjectMenuWrapper = styled.div`
  display: flex;
  margin: 20px;
  justify-content: center;
  align-items: center;
`;

export const ProjectsAdditional = styled.div`
  position: absolute;
  width: 100%;
  height: 80px;
  align-items: center;
  background: #00223d;
  transition: height 0.4s;
  overflow: hidden;
  z-index: 2;

  @media screen and (max-width: 480px) {
    &:hover {
      height: 100%;
      border-radius: 0 6px 6px 0;
    }
  }
`;

export const ProjectTitle = styled.div`
  width: 100%;
  height: 50px;
  padding-top: 1.5rem;
  font-size: 1.5rem;
  font-weight: bold;
  text-align: center;
  color: #fff;
`;

export const ProjectsMoreInfo = styled.div`
  width: 100%;
  position: absolute;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  padding: 1rem;
  height: 70%;
  margin-top: 16%;
`;

export const ProjectCoords = styled.div`
  margin: 0 1rem;
  color: #fff;
  font-size: 1rem;
`;

export const ProjectStats = styled.div`
  font-size: 2rem;
  display: flex;
  justify-content: space-evenly;
  bottom: 1rem;
  left: 1rem;
  right: 1rem;
  top: auto;

  color: #fff;
`;

export const ProjectsLink = styled.a`
  font-size: 0.9em;
  margin-left: 2rem;
  margin-right: 2rem;
  color: #fff;

  &:hover {
    transform: scale(1.2);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`;

export const ProjectsGeneral = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  flex-direction: column;
  bottom: 0;
  right: 0;
  z-index: 1;
  box-sizing: border-box;
  padding: 2rem;
  padding-top: 40%;
  justify-content: space-between;
  align-items: center;
`;

export const ProjectsDetails = styled.p`
  font-size: 1rem;
  line-height: 1.4;
  margin-top: 5px;
  margin-bottom: 5px;
`;

export const ProjectsMore = styled.div`
  left: 2rem;
  bottom: 2rem;
  font-size: 0.8em;
`;

export const LangListWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  margin-bottom: 20px;

  &::after {
    content: '';
    width: 100%;
    margin: 5px;
    border: 1px solid #fff;
  }
  /* max-width: 80vw; */

  @media screen and (max-width: 480px) {
    max-width: 100vw;
  }
`;

export const LangList = styled.div`
  /* background: #000; */
  background: #fff;
  /* color: #fff; */
  padding: 5px;
  margin: 7px;
  border-radius: 10px;
  text-align: center;
  /* cursor: pointer; */
  background: ${({ filterLang }) => (filterLang ? '#8ebeef' : '#fff')};
  /* transform: ${({ filterLang }) => (filterLang ? 'scale(1.1)' : '')}; */

  &:hover {
    /* transform: scale(1.2); */
    background: #8ebeef;
    transform: scale(1.2);
    transition: all 0.3s ease-in-out;
    cursor: pointer;
  }
`;

export const ModalCloseButton = styled.div`
  right: 0.5rem;
  top: 0.5rem;
  font-size: 1.5rem;
  position: absolute;
  color: #fff;
  cursor: pointer;
  background: #8c0000;
  /* border: 1px solid #a2a2a2; */
  border-radius: 20px;
  width: 2rem;
  height: 2rem;
  text-align: center;
  align-items: center;
`;

export const LangFilterAll = styled.div`
  /* background: #000; */
  background: #fff;
  /* color: #fff; */
  padding: 5px;
  margin: 20px 7px 7px 7px;
  width: 50px;
  border-radius: 10px;
  text-align: center;
  letter-spacing: 3px;
  text-transform: uppercase;
  /* cursor: pointer; */
  background: ${({ filterLang }) => (filterLang ? '#8ebeef' : '#fff')};
  transform: ${({ filterLang }) => (filterLang ? 'scale(1.2)' : '')};

  &:hover {
    transform: scale(1.2);
    background: #8ebeef;
    transition: all 0.3s ease-in-out;
    cursor: pointer;
  }
`;
