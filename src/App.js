import styled from "styled-components";

import Sidebar from "./components/Sidebar/Sidebar.component";

const App = () => {
  return (
    <AppWrapper>
      <Sidebar />
      <main>MAIN CONTENT</main>
    </AppWrapper>
  );
};

export default App;

const AppWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100%;
`;
