import styled from 'styled-components';

export const StyledPictureBox = styled.button`
.thumbnails {
  background-color: #DCDCDC;
  display: block;
  border-radius: 10px;
  margin: 0em;
}

.thumbnails img {
  border-radius: 10px;
  display: block;
  width: 100%;
}

.thumbnails img:hover {
  background-color: rgba(255, 255, 255, 0.25);
  box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.5), 0 0 0.5em 0 #FF6382;
}

.thumbnails h3 {
  padding: 1em 0 1em 0;
  color: #000000;
}
`;
