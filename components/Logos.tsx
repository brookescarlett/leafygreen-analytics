/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";

function DevHubLogo(props: JSX.IntrinsicElements["svg"]) {
  return (
    <svg
      width="34"
      height="34"
      viewBox="0 0 34 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#dh-clip0)">
        <path
          d="M29.9 5.8999L19.2 16.5999C20.2 17.9999 20.8 19.6999 20.8 21.2999C20.8 23.2999 20 25.2999 18.5 26.8999L17.7 26.0999L18.5 26.8999C17 28.3999 15 29.1999 13 29.1999C11.3 29.1999 9.7 28.6999 8.3 27.5999L6 29.8999C9 32.4999 12.8 33.9999 17.1 33.9999C26.5 33.9999 34.1 26.3999 34.1 16.9999C34 12.7999 32.4 8.8999 29.9 5.8999Z"
          fill="url(#dh-paint0_linear)"
        />
        <path
          d="M5.1 21.3C5.1 19.3 5.9 17.3 7.4 15.7C8.9 14.2 10.9 13.4 13 13.4C14.7 13.4 16.3 13.9 17.7 15L28.3 4.4C25.3 1.7 21.4 0 17 0C7.6 0 0 7.6 0 17C0 21.4 1.7 25.3 4.4 28.3L6.7 26C5.6 24.6 5.1 23 5.1 21.3Z"
          fill="url(#dh-paint1_linear)"
        />
        <path
          d="M16.9 17.3001C15.8 16.2001 14.4 15.6001 12.9 15.6001C11.5 15.6001 10 16.1001 8.90001 17.3001C7.80001 18.4001 7.20001 19.8001 7.20001 21.3001C7.20001 22.7001 7.70001 24.2001 8.90001 25.3001C10 26.4001 11.4 27.0001 12.9 27.0001C14.3 27.0001 15.8 26.5001 16.9 25.3001C18 24.2001 18.6 22.8001 18.6 21.3001C18.6 19.9001 18.1 18.4001 16.9 17.3001Z"
          fill="#D83A6C"
        />
      </g>
      <defs>
        <linearGradient
          id="dh-paint0_linear"
          x1="20.05"
          y1="5.8999"
          x2="20.05"
          y2="33.9999"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#D83A6C" />
          <stop offset="1" stopColor="#F7A765" />
        </linearGradient>
        <linearGradient
          id="dh-paint1_linear"
          x1="14.15"
          y1="0"
          x2="14.15"
          y2="28.3"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#D83A6C" />
          <stop offset="1" stopColor="#F7A765" />
        </linearGradient>
        <clipPath id="dh-clip0">
          <rect width="34" height="34" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

DevHubLogo.displayName = "DevHub";

function DocsLogo(props: JSX.IntrinsicElements["svg"]) {
  return (
    <svg
      width="34"
      height="34"
      viewBox="0 0 34 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M13.9 15.0999H33.9C33.6 12.4999 32.7 10.0999 31.4 7.8999H13.9V15.0999Z"
        fill="url(#docs-paint0_linear)"
      />
      <path
        d="M17 0C7.6 0 0 7.6 0 17C0 24.5 4.9 30.9 11.7 33.1V6.9C11.7 6.6 11.8 6.3 12 6.1C12.2 5.9 12.5 5.8 12.8 5.8H29.8C26.6 2.2 22.1 0 17 0Z"
        fill="url(#docs-paint1_linear)"
      />
      <path
        d="M13.9 33.7001C14.9 33.9001 16 34 17 34C22.7 34 27.8 31.2 30.8 26.8H13.8V33.7001H13.9Z"
        fill="url(#docs-paint2_linear)"
      />
      <path
        d="M13.9 24.6H32.2C33.3 22.4 34 19.9 34 17.3H13.9V24.6Z"
        fill="url(#docs-paint3_linear)"
      />
      <defs>
        <linearGradient
          id="docs-paint0_linear"
          x1="34"
          y1="12"
          x2="13.5"
          y2="12"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#7ACFDD" />
          <stop offset="1" stopColor="#007CAD" />
        </linearGradient>
        <linearGradient
          id="docs-paint1_linear"
          x1="14.9"
          y1="0"
          x2="14.9"
          y2="33.1"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#B8C4C2" />
          <stop offset="1" stopColor="#3D4F58" />
        </linearGradient>
        <linearGradient
          id="docs-paint2_linear"
          x1="28"
          y1="31"
          x2="14"
          y2="31"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#7ACFDD" />
          <stop offset="1" stopColor="#007CAD" />
        </linearGradient>
        <linearGradient
          id="docs-paint3_linear"
          x1="33.5"
          y1="21.5"
          x2="14.5"
          y2="21.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#7ACFDD" />
          <stop offset="1" stopColor="#007CAD" />
        </linearGradient>
      </defs>
    </svg>
  );
}

DocsLogo.displayName = "DocsLogo";

function EvergreenLogo(props: JSX.IntrinsicElements["svg"]) {
  return (
    <svg
      width="34"
      height="34"
      viewBox="0 0 34 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#evergreen-clip0)">
        <path
          d="M18.1 33.9C22.1 33.6 25.8 32 28.6 29.4L18.1 10.2V33.9Z"
          fill="url(#eg-paint0_linear)"
        />
        <path
          d="M15.9 33.9V10.2L5.39999 29.4C8.19999 32 11.9 33.7 15.9 33.9Z"
          fill="url(#eg-paint1_linear)"
        />
        <path
          d="M17 0C7.6 0 0 7.6 0 17C0 21.1 1.4 24.8 3.8 27.8L16 5.4C16.2 5 16.6 4.8 17 4.8C17.4 4.8 17.8 5 18 5.4L30.2 27.8C32.6 24.8 34 21.1 34 17C34 7.6 26.4 0 17 0Z"
          fill="url(#eg-paint2_linear)"
        />
      </g>
      <defs>
        <linearGradient
          id="eg-paint0_linear"
          x1="23.35"
          y1="10.2"
          x2="23.35"
          y2="33.9"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.213542" stopColor="#0AD05B" />
          <stop offset="1" stopColor="#116149" />
        </linearGradient>
        <linearGradient
          id="eg-paint1_linear"
          x1="10.65"
          y1="10.2"
          x2="10.65"
          y2="33.9"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.213542" stopColor="#0AD05B" />
          <stop offset="1" stopColor="#116149" />
        </linearGradient>
        <linearGradient
          id="eg-paint2_linear"
          x1="17"
          y1="6.5"
          x2="17"
          y2="27.8"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#116149" />
          <stop offset="1" stopColor="#7ACFDD" />
        </linearGradient>
        <clipPath id="evergreen-clip0">
          <rect width="34" height="33.9" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

EvergreenLogo.displayName = "EvergreenLogo";

function UniversityLogo(props: JSX.IntrinsicElements["svg"]) {
  return (
    <svg
      width="34"
      height="34"
      viewBox="0 0 34 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0)">
        <path
          d="M17.3 6.7L33.3 12C31.1 5.1 24.7 0 17 0C9.30001 0 2.90001 5.1 0.700012 12L16.6 6.6C16.9 6.6 17.1 6.6 17.3 6.7Z"
          fill="#EA5C76"
        />
        <path
          d="M17 8.8999L1.39999 14.0999L17 19.3999L32.6 14.0999L17 8.8999Z"
          fill="#B2478E"
        />
        <path
          d="M18.2 21.3V33.9C27 33.3 34 26 34 17C34 16.7 34 16.3 33.9 16L18.2 21.3Z"
          fill="url(#paint0_linear)"
        />
        <path
          d="M0 17C0 26.1 7.1 33.4 16 33.9V21.4L0.1 16C0 16.3 0 16.7 0 17Z"
          fill="url(#paint1_linear)"
        />
      </g>
      <defs>
        <linearGradient
          id="paint0_linear"
          x1="26.1"
          y1="16"
          x2="26.1"
          y2="33.9"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F4BDCA" />
          <stop offset="1" stopColor="#D83A6C" />
        </linearGradient>
        <linearGradient
          id="paint1_linear"
          x1="8"
          y1="16"
          x2="8"
          y2="33.9"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F4BDCA" />
          <stop offset="1" stopColor="#D83A6C" />
        </linearGradient>
        <clipPath id="clip0">
          <rect width="34" height="33.9" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

UniversityLogo.displayName = "UniversityLogo";

export { UniversityLogo, EvergreenLogo, DevHubLogo, DocsLogo };
