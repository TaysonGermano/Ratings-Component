import styled from "styled-components";
import { Link } from "react-router-dom";

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
  color: ${(props) => (props.btnColor ? "#fff" : "var(--Medium-Grey)")};
  font-size: 17px;
  cursor: pointer;
  transition: all 200ms ease-in-out;
  margin-bottom: 20px;

  &:hover {
    background-color: var(--Orange);
    color: var(--White);
  }
`;

const Submmit = styled.div`
  & .btn {
    display: block;
    padding: 15px 0px;
    width: 100%;
    color: #fff;
    text-decoration: none;
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
  }
`;

const RattingsButtons = (props) => {
  const btn = [];

  for (let i = 1; i < 6; i++) {
    btn.push(
      <Button
        onClick={() => props.HandleChange(i)}
        key={`btn-${i}`}
        btnColor={props.btnState[i]}
      >
        {i}
      </Button>
    );
  }

  return (
    <>
      <Flex>{btn}</Flex>
      <Submmit>
        <Link to="/thankyou" className="btn">
          Submit
        </Link>
      </Submmit>
    </>
  );
};

export default RattingsButtons;
