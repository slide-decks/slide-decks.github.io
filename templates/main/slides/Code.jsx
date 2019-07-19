import styled from 'styled-components';
import { string, arrayOf, object } from 'prop-types';
import { Prism } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { BoxHeading, LineHeader } from '../components';

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 40px 80px 177px 80px;
  text-align: center;
  ${props => props.styles}
`;

const Content = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  height: 100%;
`;
const ContentInfo = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
`;
const AdditionalInfo = styled.div`
  text-align: center;
  margin: 10px;
`;

const Code = ({ title, content, additionalInfo, code, styles, language, stylesObj }) => (
  <Container styles={styles} className="code">
    <LineHeader alignSelf="center">{title}</LineHeader>
    <BoxHeading align="center" content={content}>
      <Content>
        <Prism language={language} style={atomDark} customStyle={{ background: 'var(--black)', ...stylesObj }}>
          {code.trim()}
        </Prism>
      </Content>
      <ContentInfo>
        <AdditionalInfo>{additionalInfo}</AdditionalInfo>
        <AdditionalInfo>{additionalInfo}</AdditionalInfo>
      </ContentInfo>
    </BoxHeading>
  </Container>
);

Code.propTypes = {
  title: string,
  content: string,
  additionalInfo: string,
  code: string,
  stylesObj: object,
  language: string,
  styles: arrayOf(string),
};

Code.defaultProps = {
  stylesObj: {},
};

export default Code;
