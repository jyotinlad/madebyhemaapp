import styled from 'styled-components';

export const StyledPictureBox = styled.button`
.thumbnails {
  display: block;
  border-radius: 5px;
  margin: 0em;
}

.thumbnails img {
  border-radius: 5px;
  display: block;
  width: 100%;
}

.thumbnails img:hover {
  background-color: rgba(255, 255, 255, 0.25);
  box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.5), 0 0 0.5em 0 #FF6382;
}

.thumbnails h3 {
  padding: 1em 0 0 0;
  color: #FFFFFF;
}
`;
