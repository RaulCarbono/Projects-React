import styled from "styled-components";

// interface NabvarProps {
//   color?: string;
//   backgroundColor?: string;
// }

export const NavbarStyle = styled.nav<any>`
  h2 {
    color: #000;
    font-weight: 400;
    margin-left: 1rem;
    span {
      font-weight: bold;
    }
  }
  cursor: pointer;
  padding: 4px;
  display: flex;
  align-items: center;
  border-bottom: solid 0.4px #0c91;
  height: 7vh;
  justify-content: space-around;
  background: linear-gradient();

  a {
    color: #000;
    text-decoration: none;
    margin-right: 1rem;
  }

  input {
    border: none;
    width: 20rem;
    height: 2rem;
    outline: none;
    border-radius: 10px;
    writing-mode: horizontal-tb;
  }
`;
