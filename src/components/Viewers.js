import styled from "styled-components";
import { Link } from "react-router-dom";
const Viewers = (props) => {
  return (
    <Container>
      <Wrap>
        {/* <Link to="/:date?/:month?/:year?/"> */}
        <Link to="/home/:date?/:month?/:year?/">
          <img src="/images/viewers-appoint.png" alt="" />
        </Link>
      </Wrap>
      <Wrap>
        <Link to="/Covid-Tracker">
          <img src="/images/viewers-covid.png" alt="" />
        </Link>
      </Wrap>

      <Wrap>
        <Link to="/Navigate-Hospital">
          <img src="/images/viewers-navg.png" alt="" />
        </Link>
      </Wrap>
    </Container>
  );
};

/* margin between img slider nd  organize of viewers   */
const Container = styled.div`
  margin-top: 30px;
  padding: 30px 0px 26px;
  display: grid;
  margin-bottom: -133px;
  position:relative;
  top:-210px;
  grid-template-columns: repeat(3, minmax(0, 1fr));

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
`;

const Wrap = styled.div`
  padding-top: 50.25%;
  border-radius: 5px;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  border: 3px solid rgba(249, 249, 249, 0.1);
margin:10%;
  img {
    inset: 0px;
    display: block;
    height: 100%;
  
    opacity: 1;
    position: absolute;
    transition: opacity 500ms ease-in-out 0s;
    width: 100%;
    z-index: 1;
    top: 0;
  }

  &:hover {
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
      rgb(0 0 0 / 72%) 0px 30px 22px -10px;

    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);
  }
`;

export default Viewers;
