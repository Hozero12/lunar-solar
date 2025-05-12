import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import CalendarComponent from './components/Calendar';
import LunarToSolar from './components/LunarToSolar';
import Menu from './components/Menu';

const AppContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #f5f5f5;
  padding: 20px;
  
  @media (max-width: 480px) {
    padding: 15px;
  }
`;

const Header = styled.header`
  padding: 20px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: relative;
  
  @media (max-width: 480px) {
    padding: 10px;
  }
`;

const MainContent = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  
  @media (max-width: 480px) {
    padding: 10px;
  }
`;

const Title = styled.h1`
  font-size: 24px;
  color: #202124;
  margin-bottom: 30px;
  font-weight: 400;
  
  @media (max-width: 480px) {
    font-size: 20px;
    margin-bottom: 20px;
  }
`;

const Footer = styled.footer`
  padding: 20px;
  background-color: #f2f2f2;
  color: #70757a;
  font-size: 14px;
  text-align: center;
  
  @media (max-width: 480px) {
    padding: 15px;
    font-size: 12px;
  }
`;

const AppContent: React.FC = () => {
  const location = useLocation();
  const isLunarToSolar = location.pathname === '/lunar-to-solar';

  return (
    <AppContainer>
      <Header>
        <Menu />
      </Header>
      
      <MainContent>
        <Title>{isLunarToSolar ? '음력을 양력으로 변환' : '양력을 음력으로 변환'}</Title>
        {isLunarToSolar ? <LunarToSolar /> : <CalendarComponent />}
      </MainContent>

      <Footer>
        © 2024 Calendar App
      </Footer>
    </AppContainer>
  );
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AppContent />} />
        <Route path="/lunar-to-solar" element={<AppContent />} />
      </Routes>
    </Router>
  );
}

export default App;
