import React from 'react';
import styled from 'styled-components';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import CalendarComponent from './components/Calendar';
import LunarToSolar from './components/LunarToSolar';
import AgeCalculator from './components/AgeCalculator';
import Menu from './components/Menu';

const AppContainer = styled.div`
  min-height: 100vh;
  background: #f8f9fa;
`;

const Header = styled.header`
  background: white;
  padding: 1rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  display: flex;
  justify-content: flex-end;
`;

const MainContent = styled.main`
  padding-top: 80px;
  padding-bottom: 40px;
`;

const Title = styled.h1`
  text-align: center;
  color: #1a73e8;
  margin-bottom: 2rem;
  font-size: 2rem;
`;

const Footer = styled.footer`
  text-align: center;
  padding: 1rem;
  background: white;
  color: #5f6368;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
`;

const AppContent: React.FC = () => {
  const location = useLocation();
  const path = location.pathname;

  const getTitle = () => {
    switch (path) {
      case '/lunar-to-solar':
        return '음력 → 양력 변환';
      case '/age-calculator':
        return '만 나이 계산';
      default:
        return '양력 → 음력 변환';
    }
  };

  const getComponent = () => {
    switch (path) {
      case '/lunar-to-solar':
        return <LunarToSolar />;
      case '/age-calculator':
        return <AgeCalculator />;
      default:
        return <CalendarComponent />;
    }
  };

  return (
    <AppContainer>
      <Header>
        <Menu />
      </Header>
      <MainContent>
        <Title>{getTitle()}</Title>
        {getComponent()}
      </MainContent>
      <Footer>
        © 2024 Lunar Solar Converter. All rights reserved.
      </Footer>
    </AppContainer>
  );
};

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppContent />} />
        <Route path="/lunar-to-solar" element={<AppContent />} />
        <Route path="/age-calculator" element={<AppContent />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
