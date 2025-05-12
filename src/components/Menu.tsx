import React, { useState } from 'react';
import styled from 'styled-components';

const MenuButton = styled.button`
  background: none;
  border: none;
  padding: 8px 16px;
  cursor: pointer;
  color: #5f6368;
  font-size: 14px;
  display: flex;
  align-items: center;
  gap: 8px;
  
  &:hover {
    background-color: #f8f9fa;
    border-radius: 4px;
  }
`;

const MenuContainer = styled.div<{ isOpen: boolean }>`
  position: absolute;
  top: 60px;
  right: 20px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  display: ${props => props.isOpen ? 'block' : 'none'};
  min-width: 200px;
  z-index: 1000;
`;

const MenuItem = styled.a`
  display: block;
  padding: 12px 16px;
  color: #202124;
  text-decoration: none;
  font-size: 14px;
  
  &:hover {
    background-color: #f8f9fa;
  }
  
  &.active {
    color: #1a73e8;
    background-color: #e8f0fe;
  }
`;

const Menu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <MenuButton onClick={toggleMenu}>
        메뉴
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 18H21V16H3V18ZM3 13H21V11H3V13ZM3 6V8H21V6H3Z" fill="currentColor"/>
        </svg>
      </MenuButton>
      <MenuContainer isOpen={isOpen}>
        <MenuItem href="/" className="active">양력을 음력으로 변환</MenuItem>
        <MenuItem href="/lunar-to-solar">음력을 양력으로 변환</MenuItem>
      </MenuContainer>
    </>
  );
};

export default Menu; 