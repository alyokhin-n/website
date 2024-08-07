import styled from 'styled-components';

const DownloadButton = styled.button`
  background-color: #000;
  color: #fff;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px; // space between icon and text
  margin: 5px; // space around the button
  width: auto; // adjust width to content

  &:hover,
  &:focus {
    background-color: #333; // slightly darker on hover/focus
  }

  img {
    width: 24px; // icon size
    height: auto;
  }

  .button-text {
    display: block;
    text-transform: uppercase;
  }
`;

export default DownloadButton;
