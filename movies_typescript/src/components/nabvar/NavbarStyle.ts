import styled from "styled-components";

// interface NabvarProps {
//   color?: string;
//   backgroundColor?: string;
// }

export const NavbarStyle = styled.nav<any>`
  h2 {
    color: #ffffff;
    font-weight: 400;
    margin-left: 1rem;
    span {
      font-weight: bold;
    }
  }
  background: #001154;
  cursor: pointer;
  padding: 4px;
  border-bottom: 1px solid #09f;
  display: flex;
  align-items: center;
  height: 10vh;
  width: 100%;
  justify-content: space-between;
  a {
    color: #fff;
    text-decoration: none;
    margin-right: 1rem;
  }
`;
