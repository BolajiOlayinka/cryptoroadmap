import styled from "styled-components";

const Progress = styled.div`
  position: absolute;
  left: 50%;
  top: 180px;
  background: linear-gradient(
    ${(props) => props.lineColor} ${(props) => props.scroll},
    ${(props) => props.lineColor}
  );
  width: 2px;
  height: ${(props) => props.height};
  z-index: 2;
`;

export default Progress;
