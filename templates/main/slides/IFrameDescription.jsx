import styled from 'styled-components';
import { string, arrayOf, object } from 'prop-types';
import { renderContent } from '../utils';
import { LineHeader, IFrame } from '../components';

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
  margin-bottom: 80px;
`;

const Middle = styled.div`
  display: flex;
  width: 100%;
`;

const Content = styled.div`
  text-align: left;
  margin-left: 64px;
  padding-top: 24px;
`;

const Link = styled.a`
  width: auto;
  height: auto;
  text-align: center;
`;

const FrameContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const IFrameDecription = ({ title, content, styles, stylesObj, sourceUrl }) => (
  <Container styles={styles} className="image-description2">
    <Header>
      <LineHeader>{title}</LineHeader>
    </Header>
    <Middle className="middle">
      <FrameContainer>
        <Link href={sourceUrl} target="_blank">
          Code Pen
        </Link>
        <IFrame src={sourceUrl} />
      </FrameContainer>
      <Content className="content" style={stylesObj}>
        {renderContent(content)}
      </Content>
    </Middle>
  </Container>
);

IFrameDecription.propTypes = {
  sourceUrl: string.isRequired,
  title: string.isRequired,
  content: string.isRequired,
  styles: arrayOf(string),
  stylesObj: object,
};

export default IFrameDecription;
