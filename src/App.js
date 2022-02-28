import styled from "styled-components";

import Sidebar from "./components/Sidebar/Sidebar.component";
import Nav from "./components/Nav/Nav.component";
import Hero from "./components/Hero/Hero.component";
import Overview from "./components/Overview/Overview.component";
import Swap from "./components/Swap/Swap.component";
import InsuranceFund from "./components/InsuranceFund/InsuranceFund.component";
import DeltaNeutral from "./components/DeltaNeutral/DeltaNeutral.component";
import Solution from "./components/Solution/Solution.component";
import Investors from "./components/Investors/Investors.component";

const App = () => {
  return (
    <AppWrapper>
      <Sidebar />
      <main>
        <Nav />
        <SiteContent>
          <Hero />
          <Overview />
          <Swap />
          <InsuranceFund />
          <DeltaNeutral />
          <Solution />
          <Investors />
        </SiteContent>
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

const SiteContent = styled.div`
  padding: 0 2.4375rem;
`;
