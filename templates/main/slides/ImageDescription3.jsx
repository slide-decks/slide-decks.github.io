import styled from 'styled-components';
import { string, arrayOf } from 'prop-types';
import { LineHeader } from '../components';

const Container = styled.div`
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  width: 100%;
  height: 100%;
  padding: 40px 80px 181px 80px;
  ${props => props.styles}
`;

const Header = styled.div`
  margin: 0 auto 80px auto;
`;

const Middle = styled.a`
  display: flex;
  flex-direction: center;
  width: 100%;
`;

const Image = styled.a`
  width: auto;
  height: auto;
  min-width: 864px;
  min-height: 648px;
  margin: auto;
  background: url('${props => props.src}') no-repeat center/cover;
  border-radius: 8px;
`;

const ImageDescription3 = ({ title, image, styles, link }) => (
  <Container styles={styles} className="image-description3">
    <Header>
      <LineHeader alignSelf="center">{title}</LineHeader>
    </Header>
    <Middle className="middle">
      <Image src={image} className="image-link" href={link} target="_blank" />
    </Middle>
  </Container>
);

ImageDescription3.propTypes = {
  image: string.isRequired,
  title: string.isRequired,
  link: string,
  styles: arrayOf(string),
};

export default ImageDescription3;
