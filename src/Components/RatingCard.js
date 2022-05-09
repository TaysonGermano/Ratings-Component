import styled from "styled-components";
import icon from "../Images/icon-star.svg";
import RattingsButtons from "./RatingsButtons";
import Ratings from "../Context/Ratings";

const StyledRatings = styled.div`
  width: 350px;
  height: 350px;
  margin: 0 auto;
  border-radius: 30px;
  background-color: var(--Dark-Blue);
  padding: 30px;
  color: var(--White);

  & p {
    color: var(--Light-Grey);
    margin-bottom: 15px;
    font-size: 15px;
    line-height: 25px;
  }

  & h1 {
    margin-bottom: 15px;
  }
`;

const StyledIcon = styled.span`
  display: block;
  text-align: center;
  width: 50px;
  height: 50px;
  box-sizing: border-box;
  padding: 15px 0;
  border-radius: 80px;
  background-color: var(--primary);
  margin-bottom: 30px;
`;

function RatingsCard(props) {
  return (
    <StyledRatings>
      <StyledIcon>
        <img src={icon} alt="star" />
      </StyledIcon>
      <h1>How did we do?</h1>
      <p>
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <Ratings>
        <RattingsButtons />
      </Ratings>
    </StyledRatings>
  );
}

export default RatingsCard;
