import styled from 'styled-components';

const Container = styled.div`
  height: 30px;
  background-color: crimson;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  font-weight: 500;
`;

const Announcement = () => {
  return (
    <Container>
      Get an extra 25% off | 6-8 PM Today
    </Container>
  )
}

export default Announcement;
