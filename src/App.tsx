import React from 'react';
import styled from 'styled-components';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Analytics } from "@vercel/analytics/react";
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
        return '음력 → 양력 변환 | Lunar to Solar Date Converter';
      case '/age-calculator':
        return '만 나이 계산 | Age Calculator';
      default:
        return '양력 → 음력 변환 | Solar to Lunar Date Converter';
    }
  };

  const getDescription = () => {
    switch (path) {
      case '/lunar-to-solar':
        return '음력 날짜를 양력 날짜로 변환하는 무료 온라인 도구입니다. 정확한 날짜 변환과 함께 요일 정보도 제공합니다. | Free online tool to convert lunar dates to solar dates. Get accurate date conversion with weekday information.';
      case '/age-calculator':
        return '정확한 만 나이를 계산하는 무료 온라인 도구입니다. 생년월일을 입력하면 만 나이를 즉시 확인할 수 있습니다. | Free online tool to calculate exact age. Enter your birth date to instantly check your age.';
      default:
        return '양력 날짜를 음력 날짜로 변환하는 무료 온라인 도구입니다. 정확한 날짜 변환과 함께 요일 정보도 제공합니다. | Free online tool to convert solar dates to lunar dates. Get accurate date conversion with weekday information.';
    }
  };

  const getKeywords = () => {
    return '음력, 양력, 변환, 만나이, 계산기, 달력, 음력변환, 양력변환, lunar calendar, solar calendar, date converter, age calculator, calendar, lunar conversion, solar conversion';
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

  const title = getTitle();
  const description = getDescription();
  const keywords = getKeywords();

  return (
    <AppContainer>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://lunar-solar.vercel.app${path}`} />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <link rel="canonical" href={`https://lunar-solar.vercel.app${path}`} />
        <meta name="language" content="Korean, English" />
        <meta name="revisit-after" content="7 days" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <Header>
        <Menu />
      </Header>
      <MainContent>
        <Title>{title.split(' | ')[0]}</Title>
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
      <Analytics />
    </BrowserRouter>
  );
};

export default App;
