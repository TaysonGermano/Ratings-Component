import styled from "styled-components";
import image from "../Images/illustration-thank-you.svg";
import { useContext } from "react";
import Card from "./Card";
import { AddRatings } from "../Context/Ratings";

const Centered = styled.div`
  text-align: center;
`;
const ImageWrapper = styled.div`
  text-align: center;
  margin-bottom: 30px;
`;

const Message = styled.span`
  display: inline-block;
  color: var(--Orange);
  background-color: var(--primary);
  text-align: center;
  padding: 10px 15px;
  border-radius: 50px;
  margin-bottom: 30px;
`;

const Heading = styled.h1`
  margin-bottom: 15px;
`;

const Paragraph = styled.p`
  color: var(--Light-Grey);
  margin-bottom: 15px;
  font-size: 15px;
  line-height: 25px;
  width: 340px;
  margin: 0 auto;
`;

const ThankYou = (props) => {
  const { ratings } = useContext(AddRatings);

  return (
    <Card>
      <Centered>
        <ImageWrapper>
          <img src={image} alt="thank you" />
        </ImageWrapper>
        <Message>You selected out {ratings} of 5</Message>
        <Heading>Thanks You</Heading>
        <Paragraph>
          We appreciate you taking the time to give a rating. If you ever need
          more support, don’t hesitate to get in touch
        </Paragraph>
      </Centered>
    </Card>
  );
};

export default ThankYou;
