import styled from "styled-components";

import Sidebar from "./components/Sidebar/Sidebar.component";
import Nav from "./components/Nav/Nav.component";

const App = () => {
  return (
    <AppWrapper>
      <Sidebar />
      <main>
        <Nav />
      </main>
    </AppWrapper>
  );
};

export default App;

const AppWrapper = styled.div`
  display: flex;
  height: 100%;
  overflow: auto;

  main {
    flex: 1;
  }
`;
