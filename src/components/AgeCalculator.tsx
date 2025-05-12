import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  background: white;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  
  @media (max-width: 480px) {
    padding: 20px;
  }
`;

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const InputGroup = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
  
  @media (max-width: 480px) {
    flex-direction: row;
    align-items: center;
  }
`;

const Input = styled.input`
  padding: 12px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  font-size: 16px;
  width: 80px;
  text-align: center;
  
  &:focus {
    outline: none;
    border-color: #1a73e8;
    box-shadow: 0 0 0 2px rgba(26, 115, 232, 0.2);
  }
`;

const Label = styled.label`
  color: #5f6368;
  font-size: 16px;
  min-width: 40px;
  font-weight: 600;
`;

const Button = styled.button`
  padding: 12px 24px;
  background: #1a73e8;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s;
  
  &:hover {
    background: #1557b0;
  }
  
  &:disabled {
    background: #ccc;
    cursor: not-allowed;
  }
`;

const Result = styled.div`
  margin-top: 30px;
  padding: 20px;
  background: #f8f9fa;
  border-radius: 12px;
  text-align: center;
  width: 100%;
  
  .age {
    color: #1a73e8;
    font-size: 24px;
    font-weight: 600;
    margin-top: 10px;
  }
`;

const AgeCalculator: React.FC = () => {
  const [year, setYear] = useState('');
  const [month, setMonth] = useState('');
  const [day, setDay] = useState('');
  const [age, setAge] = useState<number | null>(null);

  const calculateAge = (birthYear: number, birthMonth: number, birthDay: number): number => {
    const today = new Date();
    const birthDate = new Date(birthYear, birthMonth - 1, birthDay);
    
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    
    return age;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const birthYear = parseInt(year);
    const birthMonth = parseInt(month);
    const birthDay = parseInt(day);
    
    if (isNaN(birthYear) || isNaN(birthMonth) || isNaN(birthDay)) {
      alert('올바른 날짜를 입력해주세요.');
      return;
    }

    // 입력값 검증
    if (birthYear < 1900 || birthYear > new Date().getFullYear()) {
      alert('올바른 년도를 입력해주세요.');
      return;
    }
    if (birthMonth < 1 || birthMonth > 12) {
      alert('월은 1부터 12 사이여야 합니다.');
      return;
    }
    if (birthDay < 1 || birthDay > 31) {
      alert('일은 1부터 31 사이여야 합니다.');
      return;
    }

    try {
      const calculatedAge = calculateAge(birthYear, birthMonth, birthDay);
      setAge(calculatedAge);
    } catch (error) {
      alert('올바른 날짜를 입력해주세요.');
    }
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <InputGroup>
          <Label>년도:</Label>
          <Input
            type="number"
            value={year}
            onChange={(e) => setYear(e.target.value)}
            min="1900"
            max={new Date().getFullYear()}
          />
          <Label>월:</Label>
          <Input
            type="number"
            value={month}
            onChange={(e) => setMonth(e.target.value)}
            min="1"
            max="12"
          />
          <Label>일:</Label>
          <Input
            type="number"
            value={day}
            onChange={(e) => setDay(e.target.value)}
            min="1"
            max="31"
          />
        </InputGroup>
        <Button type="submit">계산하기</Button>
      </Form>
      
      {age !== null && (
        <Result>
          <div>만 나이</div>
          <div className="age">{age}세</div>
        </Result>
      )}
    </Container>
  );
};

export default AgeCalculator; 