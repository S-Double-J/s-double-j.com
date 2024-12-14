import styled from "styled-components";

const Frame = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  gap: 20px;
  align-self: stretch;
`;
const InnerFrame = styled.div`
  display: flex;
  width: 900px;
  align-items: flex-start;
  gap: 20px;
`;
const TextRightFrame = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  flex: 1 0 0;
  text-align: justify;
`;

function MyApproach() {
  return (
    <Frame>
      <svg
        width="300"
        height="300"
        viewBox="0 0 300 300"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="150" cy="150" r="149.5" />
        <path className="approachSVG"
          d="M300 41.1765C264 41.1765 252 35.2941 252 0C252 35.2941 246 52.9412 210 52.9412C246 52.9412 264 58.8235 264 94.1176C264 58.8235 264 41.1765 300 41.1765Z"
       />
        <path className="approachSVG"
          d="M42 300C42 264.706 35.9994 258.824 0 258.824C36 258.824 36 247.059 36 211.767V211.765C36 247.059 42 252.941 84 252.941C42 252.941 42 264.706 42 300Z"
        />
      </svg>
      <InnerFrame>
        <p>&#123; My approach &#125;</p>
        <TextRightFrame>
          <p style={{
            fontWeight: 700,
            alignSelf: "stretch"
          }}>Every business needs an online presence.</p>
          <p>
            The media landscape is changing. Countless voices are vying for
            attention. Cutting through to your target audience means engaging
            their attention and making an emotional connection. I aim to convey
            meaning and express your unique identity through a cohesive design
            strategy, engage users with interactive digital artworks, and evoke
            feelings with creative digital experience.
          </p>
          <p>
            As a solo freelancer I am able to offer a more personal approach,
            there’s no middle men or micro-managers here. And because it’s just
            me I can offer my experience and flexibility at more competitive
            rates.
          </p>
        </TextRightFrame>
      </InnerFrame>
    </Frame>
  );
}

export default MyApproach;

<svg
  width="300"
  height="300"
  viewBox="0 0 300 300"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <circle cx="150" cy="150" r="149.5" stroke="#EAE3DA" />
  <path
    d="M300 41.1765C264 41.1765 252 35.2941 252 0C252 35.2941 246 52.9412 210 52.9412C246 52.9412 264 58.8235 264 94.1176C264 58.8235 264 41.1765 300 41.1765Z"
    fill="#EAE3DA"
  />
  <path
    d="M42 300C42 264.706 35.9994 258.824 0 258.824C36 258.824 36 247.059 36 211.767V211.765C36 247.059 42 252.941 84 252.941C42 252.941 42 264.706 42 300Z"
    fill="#EAE3DA"
  />
</svg>;
