import styled from "styled-components";
import Logo from "./Logo";
import MainNav from "./MainNav";

const StyleSidebar = styled.aside`
  background-color: blue;
  padding: 3.2rem 2.4rem;
  border-right: 1px solid var(--color-grey-0);
  background-color: solid var(--color-grey-0);
  grid-row: -1/1;
  flex-direction: column;
  display: flex;
  gap: 3.2rem;
`;
function SideBar() {
  return (
    <StyleSidebar>
      <Logo />
      <MainNav />
    </StyleSidebar>
  );
}

export default SideBar;
