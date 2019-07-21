import styled from 'styled-components';
import { string, arrayOf, object, exact } from 'prop-types';
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
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: absolute;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
`;

const AdditionalInfo = styled.div`
  position: absolute;
  text-align: center;
  font-size: var(--size-sm);
  max-width: 40%;
`;

const Code = ({ title, content, additionalInfo, codeSnippets, styles, language, stylesObj }) => (
  <Container styles={styles} className="code">
    <LineHeader alignSelf="center">{title}</LineHeader>
    <BoxHeading align="center" content={content}>
      <Content>
        {codeSnippets.map(code => (
          <Prism
            key={code.id}
            language={language}
            style={atomDark}
            customStyle={{ background: 'var(--black)', ...stylesObj }}
          >
            {code.content.trim()}
          </Prism>
        ))}
      </Content>
      {additionalInfo.map(info => (
        <AdditionalInfo key={info.id} style={{ top: `${info.top}`, left: `${info.left}` }}>
          {info.text}
        </AdditionalInfo>
      ))}
    </BoxHeading>
  </Container>
);

Code.propTypes = {
  title: string,
  content: string,
  additionalInfo: arrayOf(
    exact({
      id: string,
      text: string,
      top: string,
      left: string,
    }),
  ),
  codeSnippets: arrayOf(
    exact({
      id: string,
      content: string,
    }),
  ),
  stylesObj: object,
  language: string,
  styles: arrayOf(string),
};

Code.defaultProps = {
  stylesObj: {},
};

export default Code;
