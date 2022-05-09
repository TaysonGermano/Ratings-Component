import styled from "styled-components";
import { useContext, useState } from "react";
import { AddRatings } from "../Context/Ratings";

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Button = styled.span`
  background-color: ${(props) =>
    props.btnColor ? "var(--Orange)" : "var(--primary)"};
  display: block;
  width: 55px;
  height: 55px;
  box-sizing: border-box;
  text-align: center;
  padding: 18px 0;
  border-radius: 100px;
  color: ${(props) =>
    props.btnColor ? "#fff" : "vgit add ,.ar(--Medium-Grey)"};
  font-size: 17px;
  cursor: pointer;
  transition: all 200ms ease-in-out;
  margin-bottom: 20px;

  &:hover {
    background-color: var(--Orange);
    color: var(--White);
  }
`;

const Submmit = styled.a`
  display: block;
  padding: 15px 0px;
  width: 100%;
  text-align: center;
  background-color: var(--Orange);
  text-transform: uppercase;
  transition: all 200ms ease-in-out;
  border-radius: 100px;
  letter-spacing: 5px;
  cursor: pointer;

  &:hover {
    background-color: var(--White);
    color: var(--primary);
  }
`;

const RattingsButtons = (props) => {
  const { SetRate } = useContext(AddRatings);
  const [active, setActive] = useState({});

  const btn = [];

  function SubmitChange(num) {
    SetRate(num);
    setActive({ [num]: true });
  }

  for (let i = 1; i < 6; i++) {
    btn.push(
      <Button
        onClick={() => SubmitChange(i)}
        key={`btn-${i}`}
        btnColor={active[i]}
      >
        {i}
      </Button>
    );
  }

  return (
    <>
      <Flex>{btn}</Flex>
      <Submmit>Submit</Submmit>
    </>
  );
};

export default RattingsButtons;
