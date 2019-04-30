import styled from 'styled-components';

const Input = styled.input`
  display: block;
  height: 40px;
  width: 100%;
  max-width: 250px;
  line-height: 40px;
  margin: 40px auto 0;
  padding: 0 14px;
  background: #fff;
  border-radius: 4px;
  border: 1px solid transparent;
  color: rgba(0, 0, 0, 1);
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
  transition: all 0.2s ease-out 0s;

  &:focus {
    outline: none;
    border-color: #4facfe;
  }
`;

export default Input;
