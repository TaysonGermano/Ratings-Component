import { useContext } from "react";
import styled from "styled-components";
import Card from "./Card";
import icon from "../Images/icon-star.svg";
import RattingsButtons from "./RatingsButtons";
import { AddRatings } from "../Context/Ratings";

const Heading = styled.h1`
  margin-bottom: 15px;
`;

const Paragraph = styled.p`
  color: var(--Light-Grey);
  margin-bottom: 15px;
  font-size: 15px;
  line-height: 25px;
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
  const { SetRate, active } = useContext(AddRatings);

  function SubmitChange(num) {
    SetRate(num);
  }

  return (
    <Card>
      <StyledIcon>
        <img src={icon} alt="star" />
      </StyledIcon>
      <Heading>How did we do?</Heading>
      <Paragraph>
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </Paragraph>

      <RattingsButtons HandleChange={SubmitChange} btnState={active} />
    </Card>
  );
}

export default RatingsCard;
