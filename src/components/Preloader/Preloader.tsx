import React from 'react';
import { StyledPreloader } from './Preloader.styled';

export const Preloader: React.FC = () => {
  return (
    <StyledPreloader>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        style={{
          margin: "auto",
          background: "0 0",
        }}
        width={'100%'}
        height={'100%'}
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid"
        display="block"
      >
        <circle
          cx={50}
          cy={50}
          r={32}
          strokeWidth={8}
          stroke="#3d4f87"
          strokeDasharray="50.26548245743669 50.26548245743669"
          fill="none"
          strokeLinecap="round"
        >
          <animateTransform
            attributeName="transform"
            type="rotate"
            repeatCount="indefinite"
            dur="1s"
            keyTimes="0;1"
            values="0 50 50;360 50 50"
          />
        </circle>
      </svg>
    </StyledPreloader>
  );
};
