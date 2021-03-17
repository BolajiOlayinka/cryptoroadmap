import styled from "styled-components";

const Progress = styled.div`
  position: absolute;
  //   left:685px;
  left: 50%;
  top: 165px;
  background: linear-gradient(
    to right,
    rgba(85, 205, 255, 1) ${(props) => props.scroll},
    transparent 0
  );
  width: 2px;
  height: 100%;
  z-index: 1;
`;

export default Progress;
