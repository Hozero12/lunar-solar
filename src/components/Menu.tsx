import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';

const MenuButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #5f6368;
  
  &:hover {
    color: #1a73e8;
  }
`;

const MenuIcon = styled.div`
  width: 24px;
  height: 24px;
  position: relative;
  
  &::before,
  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 2px;
    background-color: currentColor;
    transition: transform 0.3s ease;
  }
  
  &::before {
    top: 4px;
  }
  
  &::after {
    bottom: 4px;
  }
`;

const MenuList = styled.div<{ isOpen: boolean }>`
  position: absolute;
  top: 100%;
  right: 0;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  padding: 8px 0;
  min-width: 200px;
  display: ${props => props.isOpen ? 'block' : 'none'};
  z-index: 1000;
`;

const MenuItem = styled(Link)<{ active: boolean }>`
  display: block;
  padding: 12px 24px;
  color: ${props => props.active ? '#1a73e8' : '#5f6368'};
  text-decoration: none;
  font-weight: ${props => props.active ? '600' : '400'};
  
  &:hover {
    background: #f8f9fa;
    color: #1a73e8;
  }
`;

const Menu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div style={{ position: 'relative' }}>
      <MenuButton onClick={toggleMenu}>
        <MenuIcon />
      </MenuButton>
      <MenuList isOpen={isOpen}>
        <MenuItem to="/" active={location.pathname === '/'} onClick={closeMenu}>
          양력 → 음력 변환
        </MenuItem>
        <MenuItem to="/lunar-to-solar" active={location.pathname === '/lunar-to-solar'} onClick={closeMenu}>
          음력 → 양력 변환
        </MenuItem>
        <MenuItem to="/age-calculator" active={location.pathname === '/age-calculator'} onClick={closeMenu}>
          만 나이 계산
        </MenuItem>
      </MenuList>
    </div>
  );
};

export default Menu; 