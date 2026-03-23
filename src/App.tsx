import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import NorcetTestSeries from './pages/NorcetTestSeries';
import NorcetMockTest from './pages/NorcetMockTest';
import BenefitsOfTestSeries from './pages/BenefitsOfTestSeries';
import BestNorcetTestSeries from './pages/BestNorcetTestSeries';
import NorcetTestSeriesFaq from './pages/NorcetTestSeriesFaq';
import { RouterWrapper } from './next/RouterWrapper';

type AppProps = {
  initialPath?: string;
};

function App({ initialPath = '/' }: AppProps) {
  return (
    <RouterWrapper initialPath={initialPath}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="norcet-test-series" element={<NorcetTestSeries />} />
          <Route path="norcet-mock-test" element={<NorcetMockTest />} />
          <Route path="benefits-of-test-series" element={<BenefitsOfTestSeries />} />
          <Route path="best-norcet-test-series" element={<BestNorcetTestSeries />} />
          <Route path="norcet-test-series-faq" element={<NorcetTestSeriesFaq />} />
        </Route>
      </Routes>
    </RouterWrapper>
  );
}

export default App;
