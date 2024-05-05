// eslint-disable-next-line react/prop-types
const ChatHistoryItem = ({ sender, message, isError }) => {
  // Check if the message is an error

  return (
    <div
      className={`${
        sender === "user" ? "text-right" : "text-left"
      } mb-2 md:px-28`}
    >
      <div className="flex items-center">
        {sender === "ai" && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="2em"
            height="2em"
            viewBox="0 0 32 32"
          >
            <g fill="none">
              <path
                fill="url(#f2115idd)"
                d="M22.05 30H9.95C6.66 30 4 27.34 4 24.05V12.03C4 8.7 6.7 6 10.03 6h11.95C25.3 6 28 8.7 28 12.03v12.03c0 3.28-2.66 5.94-5.95 5.94"
              />
              <path
                fill="url(#f2115id0)"
                d="M4 12a6 6 0 0 1 6-6h2v24h-2a6 6 0 0 1-6-6z"
              />
              <path
                fill="url(#f2115id1)"
                d="M4 24h24a6 6 0 0 1-6 6H10a6 6 0 0 1-6-6"
              />
              <path
                fill="url(#f2115ide)"
                d="M20 6h2a6 6 0 0 1 6 6v12a6 6 0 0 1-6 6h-2z"
              />
              <path
                stroke="url(#f2115id2)"
                stroke-miterlimit="10"
                d="M3.5 3.95v9.1"
              />
              <path
                fill="url(#f2115id3)"
                d="M4 12v11c-1.1 0-2-.9-2-1.998v-7.004C2 12.9 2.9 12 4 12"
              />
              <path
                fill="url(#f2115id4)"
                d="M22.753 18.5H9.247A4.257 4.257 0 0 1 5 14.25A4.257 4.257 0 0 1 9.247 10h13.506A4.257 4.257 0 0 1 27 14.25c0 2.331-1.918 4.25-4.247 4.25"
              />
              <path
                fill="url(#f2115id5)"
                d="M18.528 26h-5.056C12.66 26 12 25.326 12 24.5s.66-1.5 1.472-1.5h5.056c.811 0 1.472.674 1.472 1.5s-.66 1.5-1.472 1.5"
              />
              <path
                fill="url(#f2115idf)"
                d="M3.5 5a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3"
              />
              <path
                stroke="url(#f2115id6)"
                stroke-miterlimit="10"
                d="M28.5 4v9.09"
              />
              <path
                fill="url(#f2115idg)"
                d="M28.5 5.1a1.55 1.55 0 1 0 0-3.1a1.55 1.55 0 0 0 0 3.1"
              />
              <rect
                width="4.5"
                height="6"
                x="7"
                y="12"
                fill="url(#f2115idh)"
                rx="2"
              />
              <rect
                width="4.5"
                height="6"
                x="18.5"
                y="12"
                fill="url(#f2115idi)"
                rx="2"
              />
              <rect
                width="10"
                height="3"
                x="11"
                y="3"
                fill="url(#f2115id7)"
                rx="1.5"
              />
              <rect
                width="10"
                height="3"
                x="11"
                y="3"
                fill="url(#f2115idj)"
                rx="1.5"
              />
              <path
                fill="url(#f2115id8)"
                d="M28 22.94V11.93c1.1 0 2 .9 2 2v7.01c0 1.1-.9 2-2 2"
              />
              <rect
                width="2.5"
                height="5"
                x="9"
                y="12"
                fill="url(#f2115id9)"
                rx="1.25"
              />
              <rect
                width="2.5"
                height="5"
                x="9"
                y="12"
                fill="url(#f2115idk)"
                rx="1.25"
              />
              <rect
                width="2.5"
                height="5"
                x="20.5"
                y="12"
                fill="url(#f2115ida)"
                rx="1.25"
              />
              <rect
                width="2.5"
                height="5"
                x="20.5"
                y="12"
                fill="url(#f2115idl)"
                rx="1.25"
              />
              <g filter="url(#f2115idp)">
                <path
                  stroke="url(#f2115idb)"
                  stroke-width="0.25"
                  d="M3.625 5v6"
                />
              </g>
              <g filter="url(#f2115idq)">
                <path
                  stroke="url(#f2115idc)"
                  stroke-width="0.25"
                  d="M28.625 5v6"
                />
              </g>
              <ellipse
                cx="29"
                cy="13.5"
                fill="url(#f2115idm)"
                rx="1"
                ry="1.5"
              />
              <ellipse
                cx="29"
                cy="16.5"
                fill="url(#f2115idn)"
                rx="1"
                ry="4.5"
              />
              <path
                fill="url(#f2115ido)"
                fill-rule="evenodd"
                d="M19.776 3.025a1.501 1.501 0 0 1 1.199 1.2a1 1 0 1 1-1.2-1.2"
                clip-rule="evenodd"
              />
              <defs>
                <linearGradient
                  id="f2115id0"
                  x1="12"
                  x2="4"
                  y1="18"
                  y2="18"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#d5b2c0" stop-opacity="0" />
                  <stop offset="1" stop-color="#b4878d" />
                </linearGradient>
                <linearGradient
                  id="f2115id1"
                  x1="16"
                  x2="16"
                  y1="27"
                  y2="31"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#b17edb" stop-opacity="0" />
                  <stop offset="1" stop-color="#a56bd6" />
                </linearGradient>
                <linearGradient
                  id="f2115id2"
                  x1="4"
                  x2="4"
                  y1="3.95"
                  y2="13.05"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#ea248a" />
                  <stop offset="1" stop-color="#df2232" />
                </linearGradient>
                <linearGradient
                  id="f2115id3"
                  x1="3"
                  x2="3"
                  y1="12"
                  y2="23"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#e93273" />
                  <stop offset="1" stop-color="#d21844" />
                </linearGradient>
                <linearGradient
                  id="f2115id4"
                  x1="15.998"
                  x2="15.998"
                  y1="17.701"
                  y2="11.391"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset=".006" stop-color="#443e75" />
                  <stop offset="1" stop-color="#2f1a3b" />
                </linearGradient>
                <linearGradient
                  id="f2115id5"
                  x1="15.998"
                  x2="15.998"
                  y1="25.686"
                  y2="22.889"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset=".006" stop-color="#39325e" />
                  <stop offset="1" stop-color="#2b1831" />
                </linearGradient>
                <linearGradient
                  id="f2115id6"
                  x1="29"
                  x2="29"
                  y1="4"
                  y2="13.09"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#ea248a" />
                  <stop offset="1" stop-color="#df2232" />
                </linearGradient>
                <linearGradient
                  id="f2115id7"
                  x1="16"
                  x2="14.5"
                  y1="3"
                  y2="6.5"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#ffce2b" />
                  <stop offset="1" stop-color="#d9862d" />
                </linearGradient>
                <linearGradient
                  id="f2115id8"
                  x1="29"
                  x2="29"
                  y1="11.93"
                  y2="22.94"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#ff30aa" />
                  <stop offset="1" stop-color="#ff2353" />
                </linearGradient>
                <linearGradient
                  id="f2115id9"
                  x1="11.5"
                  x2="9"
                  y1="14"
                  y2="14"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#29b6fe" />
                  <stop offset="1" stop-color="#1769a8" />
                </linearGradient>
                <linearGradient
                  id="f2115ida"
                  x1="23"
                  x2="20.5"
                  y1="14"
                  y2="14"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#29b6fe" />
                  <stop offset="1" stop-color="#1769a8" />
                </linearGradient>
                <linearGradient
                  id="f2115idb"
                  x1="3.5"
                  x2="3.5"
                  y1="7"
                  y2="9"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#ff96cb" />
                  <stop offset="1" stop-color="#ff6db7" stop-opacity="0" />
                </linearGradient>
                <linearGradient
                  id="f2115idc"
                  x1="28.5"
                  x2="28.5"
                  y1="7"
                  y2="9"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#ff96cb" />
                  <stop offset="1" stop-color="#ff6db7" stop-opacity="0" />
                </linearGradient>
                <radialGradient
                  id="f2115idd"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientTransform="rotate(141.911 10.515 10.065)scale(23.5053)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#eeebf0" />
                  <stop offset=".493" stop-color="#d1bee3" />
                  <stop offset="1" stop-color="#d0bce2" />
                </radialGradient>
                <radialGradient
                  id="f2115ide"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientTransform="matrix(5 -.5 1.9111 19.11108 25 13.5)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#f0eaf6" />
                  <stop offset="1" stop-color="#e7e0ef" stop-opacity="0" />
                </radialGradient>
                <radialGradient
                  id="f2115idf"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientTransform="matrix(-.5 2 -2 -.5 4 3)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#ff6c82" />
                  <stop offset=".441" stop-color="#ff2455" />
                  <stop offset="1" stop-color="#d9206c" />
                </radialGradient>
                <radialGradient
                  id="f2115idg"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientTransform="rotate(104.036 13.324 12.844)scale(2.13027)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#ff6c82" />
                  <stop offset=".441" stop-color="#ff2455" />
                  <stop offset="1" stop-color="#d9206c" />
                </radialGradient>
                <radialGradient
                  id="f2115idh"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientTransform="matrix(-2.5 .5 -.68428 -3.42136 9.5 15)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#322649" />
                  <stop offset="1" stop-color="#342950" stop-opacity="0" />
                </radialGradient>
                <radialGradient
                  id="f2115idi"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientTransform="matrix(-2.5 .5 -.68428 -3.42136 21 15)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#322649" />
                  <stop offset="1" stop-color="#342950" stop-opacity="0" />
                </radialGradient>
                <radialGradient
                  id="f2115idj"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientTransform="matrix(0 3 -10 0 16 4)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset=".431" stop-color="#ca7e29" stop-opacity="0" />
                  <stop offset="1" stop-color="#673f13" />
                </radialGradient>
                <radialGradient
                  id="f2115idk"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientTransform="matrix(0 2.5 -1.14393 0 11 13.5)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#54c8ff" />
                  <stop offset="1" stop-color="#54c8ff" stop-opacity="0" />
                </radialGradient>
                <radialGradient
                  id="f2115idl"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientTransform="matrix(0 2.5 -1.14393 0 22.5 13.5)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#54c8ff" />
                  <stop offset="1" stop-color="#54c8ff" stop-opacity="0" />
                </radialGradient>
                <radialGradient
                  id="f2115idm"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientTransform="matrix(0 1.5 -1 0 29 13.5)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#ff72c1" />
                  <stop offset="1" stop-color="#ff6ebf" stop-opacity="0" />
                </radialGradient>
                <radialGradient
                  id="f2115idn"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientTransform="matrix(0 4.5 -.55944 0 29 16.5)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#ff4b9c" />
                  <stop offset="1" stop-color="#ff73c1" stop-opacity="0" />
                </radialGradient>
                <radialGradient
                  id="f2115ido"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientTransform="rotate(90 8 12)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#ffea60" />
                  <stop offset="1" stop-color="#ffef66" stop-opacity="0" />
                </radialGradient>
                <filter
                  id="f2115idp"
                  width="1.25"
                  height="7"
                  x="3"
                  y="4.5"
                  color-interpolation-filters="sRGB"
                  filterUnits="userSpaceOnUse"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feBlend
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  />
                  <feGaussianBlur
                    result="effect1_foregroundBlur_31_1501"
                    stdDeviation=".25"
                  />
                </filter>
                <filter
                  id="f2115idq"
                  width="1.25"
                  height="7"
                  x="28"
                  y="4.5"
                  color-interpolation-filters="sRGB"
                  filterUnits="userSpaceOnUse"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feBlend
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  />
                  <feGaussianBlur
                    result="effect1_foregroundBlur_31_1501"
                    stdDeviation=".25"
                  />
                </filter>
              </defs>
            </g>
          </svg>
        )}

        {sender === "user" && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="2em"
            height="2em"
            viewBox="0 0 32 32"
          >
            <g fill="none">
              <path
                fill="url(#f1585id0)"
                d="M24.976 20.863a3.058 3.058 0 0 0 1.686-.575v1.736c0 1.665-.992 3.148-2.5 3.764a7.621 7.621 0 0 0 .645-2.2z"
              />
              <path
                fill="url(#f1585id1)"
                d="M6.849 20.863a3.058 3.058 0 0 1-1.687-.575v1.736c0 1.665.992 3.148 2.5 3.764a7.62 7.62 0 0 1-.644-2.2z"
              />
              <g filter="url(#f1585idu)">
                <path
                  fill="url(#f1585id2)"
                  d="M6.917 23.688a7.3 7.3 0 0 0 7.244 6.35h3.518a7.3 7.3 0 0 0 7.244-6.35c.22-3.512.441-7.01.605-10.52c-.02-1.43-1.148-2.61-2.572-2.67h-2.61a4.516 4.516 0 0 1-4.123-2.69a1.238 1.238 0 0 0-1.148-.78h-2.373c-3.441 0-6.23 2.82-6.23 6.3c0 3.47.217 6.882.445 10.36"
                />
              </g>
              <path
                fill="url(#f1585id1b)"
                d="M6.917 23.688a7.3 7.3 0 0 0 7.244 6.35h3.518a7.3 7.3 0 0 0 7.244-6.35c.22-3.512.441-7.01.605-10.52c-.02-1.43-1.148-2.61-2.572-2.67h-2.61a4.516 4.516 0 0 1-4.123-2.69a1.238 1.238 0 0 0-1.148-.78h-2.373c-3.441 0-6.23 2.82-6.23 6.3c0 3.47.217 6.882.445 10.36"
              />
              <path
                fill="url(#f1585id3)"
                d="M6.917 23.688a7.3 7.3 0 0 0 7.244 6.35h3.518a7.3 7.3 0 0 0 7.244-6.35c.22-3.512.441-7.01.605-10.52c-.02-1.43-1.148-2.61-2.572-2.67h-2.61a4.516 4.516 0 0 1-4.123-2.69a1.238 1.238 0 0 0-1.148-.78h-2.373c-3.441 0-6.23 2.82-6.23 6.3c0 3.47.217 6.882.445 10.36"
              />
              <path
                fill="url(#f1585id4)"
                d="M6.917 23.688a7.3 7.3 0 0 0 7.244 6.35h3.518a7.3 7.3 0 0 0 7.244-6.35c.22-3.512.441-7.01.605-10.52c-.02-1.43-1.148-2.61-2.572-2.67h-2.61a4.516 4.516 0 0 1-4.123-2.69a1.238 1.238 0 0 0-1.148-.78h-2.373c-3.441 0-6.23 2.82-6.23 6.3c0 3.47.217 6.882.445 10.36"
              />
              <path
                fill="url(#f1585id5)"
                d="M6.917 23.688a7.3 7.3 0 0 0 7.244 6.35h3.518a7.3 7.3 0 0 0 7.244-6.35c.22-3.512.441-7.01.605-10.52c-.02-1.43-1.148-2.61-2.572-2.67h-2.61a4.516 4.516 0 0 1-4.123-2.69a1.238 1.238 0 0 0-1.148-.78h-2.373c-3.441 0-6.23 2.82-6.23 6.3c0 3.47.217 6.882.445 10.36"
              />
              <path
                fill="url(#f1585id6)"
                d="M6.917 23.688a7.3 7.3 0 0 0 7.244 6.35h3.518a7.3 7.3 0 0 0 7.244-6.35c.22-3.512.441-7.01.605-10.52c-.02-1.43-1.148-2.61-2.572-2.67h-2.61a4.516 4.516 0 0 1-4.123-2.69a1.238 1.238 0 0 0-1.148-.78h-2.373c-3.441 0-6.23 2.82-6.23 6.3c0 3.47.217 6.882.445 10.36"
              />
              <path
                fill="url(#f1585id7)"
                d="M6.917 23.688a7.3 7.3 0 0 0 7.244 6.35h3.518a7.3 7.3 0 0 0 7.244-6.35c.22-3.512.441-7.01.605-10.52c-.02-1.43-1.148-2.61-2.572-2.67h-2.61a4.516 4.516 0 0 1-4.123-2.69a1.238 1.238 0 0 0-1.148-.78h-2.373c-3.441 0-6.23 2.82-6.23 6.3c0 3.47.217 6.882.445 10.36"
              />
              <path
                fill="url(#f1585id8)"
                d="M6.917 23.688a7.3 7.3 0 0 0 7.244 6.35h3.518a7.3 7.3 0 0 0 7.244-6.35c.22-3.512.441-7.01.605-10.52c-.02-1.43-1.148-2.61-2.572-2.67h-2.61a4.516 4.516 0 0 1-4.123-2.69a1.238 1.238 0 0 0-1.148-.78h-2.373c-3.441 0-6.23 2.82-6.23 6.3c0 3.47.217 6.882.445 10.36"
              />
              <g filter="url(#f1585idv)">
                <path
                  fill="#d69790"
                  d="m15.164 17.556l-1.101 3.427c-.189.706.263 1.41.903 1.41h1.364c.64 0 1.091-.715.903-1.41l-.922-3.427c-.198-.76-.94-.76-1.147 0"
                />
              </g>
              <g filter="url(#f1585idw)">
                <path
                  fill="#f6bfab"
                  d="m15.2 17.2l-.991 3.428c-.202.705.283 1.41.97 1.41h1.466c.688 0 1.173-.716.971-1.41l-.99-3.427c-.213-.76-1.204-.76-1.426 0"
                />
                <path
                  fill="url(#f1585id1c)"
                  d="m15.2 17.2l-.991 3.428c-.202.705.283 1.41.97 1.41h1.466c.688 0 1.173-.716.971-1.41l-.99-3.427c-.213-.76-1.204-.76-1.426 0"
                />
                <path
                  fill="url(#f1585id9)"
                  d="m15.2 17.2l-.991 3.428c-.202.705.283 1.41.97 1.41h1.466c.688 0 1.173-.716.971-1.41l-.99-3.427c-.213-.76-1.204-.76-1.426 0"
                />
                <path
                  fill="url(#f1585id1d)"
                  d="m15.2 17.2l-.991 3.428c-.202.705.283 1.41.97 1.41h1.466c.688 0 1.173-.716.971-1.41l-.99-3.427c-.213-.76-1.204-.76-1.426 0"
                />
                <path
                  fill="url(#f1585ida)"
                  d="m15.2 17.2l-.991 3.428c-.202.705.283 1.41.97 1.41h1.466c.688 0 1.173-.716.971-1.41l-.99-3.427c-.213-.76-1.204-.76-1.426 0"
                />
                <path
                  fill="url(#f1585id1e)"
                  d="m15.2 17.2l-.991 3.428c-.202.705.283 1.41.97 1.41h1.466c.688 0 1.173-.716.971-1.41l-.99-3.427c-.213-.76-1.204-.76-1.426 0"
                />
              </g>
              <g filter="url(#f1585idx)">
                <path
                  stroke="url(#f1585id1f)"
                  stroke-width="0.15"
                  d="M13.364 23.255a.36.36 0 0 0-.43.073a.33.33 0 0 0-.036.425a3.605 3.605 0 0 0 3.014 1.61a3.605 3.605 0 0 0 3.015-1.61a.334.334 0 0 0-.037-.428a.361.361 0 0 0-.428-.07h-.001a5.5 5.5 0 0 1-2.549.603c-.934 0-1.812-.22-2.548-.604Z"
                />
              </g>
              <path
                fill="url(#f1585idb)"
                d="M15.912 23.933a5.602 5.602 0 0 1-2.583-.612c-.255-.13-.53.158-.369.39a3.53 3.53 0 0 0 2.952 1.577a3.53 3.53 0 0 0 2.952-1.577c.161-.242-.113-.52-.369-.39a5.573 5.573 0 0 1-2.583.612"
              />
              <g filter="url(#f1585idy)">
                <path
                  fill="url(#f1585id1g)"
                  d="M24.964 6.148c.959.33 1.82 1 2.363 1.96a4.42 4.42 0 0 1-.198 4.71a2.907 2.907 0 0 0-.504 1.63v2.215a3.253 3.253 0 0 0-1.244-.5l.146-2.995c-.02-1.43-1.147-2.61-2.57-2.67h-2.611a4.516 4.516 0 0 1-4.123-2.69a1.238 1.238 0 0 0-1.148-.78h-2.373c-3.441 0-6.23 2.82-6.23 6.3l.058 2.866c-.474.07-.969.228-1.343.492v-2.238c0-.58-.178-1.15-.504-1.63a4.457 4.457 0 0 1-.267-4.56a4.37 4.37 0 0 1 2.422-2.1a4.999 4.999 0 0 0 2.581-2.07a4.336 4.336 0 0 1 3.679-2.05c.603 0 1.176.13 1.71.35c.712.31 1.513.31 2.225 0a4.386 4.386 0 0 1 1.701-.35c1.572 0 2.947.85 3.708 2.11c.574.95 1.474 1.64 2.522 2"
                />
                <path
                  fill="url(#f1585idc)"
                  d="M24.964 6.148c.959.33 1.82 1 2.363 1.96a4.42 4.42 0 0 1-.198 4.71a2.907 2.907 0 0 0-.504 1.63v2.215a3.253 3.253 0 0 0-1.244-.5l.146-2.995c-.02-1.43-1.147-2.61-2.57-2.67h-2.611a4.516 4.516 0 0 1-4.123-2.69a1.238 1.238 0 0 0-1.148-.78h-2.373c-3.441 0-6.23 2.82-6.23 6.3l.058 2.866c-.474.07-.969.228-1.343.492v-2.238c0-.58-.178-1.15-.504-1.63a4.457 4.457 0 0 1-.267-4.56a4.37 4.37 0 0 1 2.422-2.1a4.999 4.999 0 0 0 2.581-2.07a4.336 4.336 0 0 1 3.679-2.05c.603 0 1.176.13 1.71.35c.712.31 1.513.31 2.225 0a4.386 4.386 0 0 1 1.701-.35c1.572 0 2.947.85 3.708 2.11c.574.95 1.474 1.64 2.522 2"
                />
                <path
                  fill="url(#f1585idd)"
                  d="M24.964 6.148c.959.33 1.82 1 2.363 1.96a4.42 4.42 0 0 1-.198 4.71a2.907 2.907 0 0 0-.504 1.63v2.215a3.253 3.253 0 0 0-1.244-.5l.146-2.995c-.02-1.43-1.147-2.61-2.57-2.67h-2.611a4.516 4.516 0 0 1-4.123-2.69a1.238 1.238 0 0 0-1.148-.78h-2.373c-3.441 0-6.23 2.82-6.23 6.3l.058 2.866c-.474.07-.969.228-1.343.492v-2.238c0-.58-.178-1.15-.504-1.63a4.457 4.457 0 0 1-.267-4.56a4.37 4.37 0 0 1 2.422-2.1a4.999 4.999 0 0 0 2.581-2.07a4.336 4.336 0 0 1 3.679-2.05c.603 0 1.176.13 1.71.35c.712.31 1.513.31 2.225 0a4.386 4.386 0 0 1 1.701-.35c1.572 0 2.947.85 3.708 2.11c.574.95 1.474 1.64 2.522 2"
                />
                <path
                  fill="url(#f1585ide)"
                  d="M24.964 6.148c.959.33 1.82 1 2.363 1.96a4.42 4.42 0 0 1-.198 4.71a2.907 2.907 0 0 0-.504 1.63v2.215a3.253 3.253 0 0 0-1.244-.5l.146-2.995c-.02-1.43-1.147-2.61-2.57-2.67h-2.611a4.516 4.516 0 0 1-4.123-2.69a1.238 1.238 0 0 0-1.148-.78h-2.373c-3.441 0-6.23 2.82-6.23 6.3l.058 2.866c-.474.07-.969.228-1.343.492v-2.238c0-.58-.178-1.15-.504-1.63a4.457 4.457 0 0 1-.267-4.56a4.37 4.37 0 0 1 2.422-2.1a4.999 4.999 0 0 0 2.581-2.07a4.336 4.336 0 0 1 3.679-2.05c.603 0 1.176.13 1.71.35c.712.31 1.513.31 2.225 0a4.386 4.386 0 0 1 1.701-.35c1.572 0 2.947.85 3.708 2.11c.574.95 1.474 1.64 2.522 2"
                />
                <path
                  fill="url(#f1585idf)"
                  d="M24.964 6.148c.959.33 1.82 1 2.363 1.96a4.42 4.42 0 0 1-.198 4.71a2.907 2.907 0 0 0-.504 1.63v2.215a3.253 3.253 0 0 0-1.244-.5l.146-2.995c-.02-1.43-1.147-2.61-2.57-2.67h-2.611a4.516 4.516 0 0 1-4.123-2.69a1.238 1.238 0 0 0-1.148-.78h-2.373c-3.441 0-6.23 2.82-6.23 6.3l.058 2.866c-.474.07-.969.228-1.343.492v-2.238c0-.58-.178-1.15-.504-1.63a4.457 4.457 0 0 1-.267-4.56a4.37 4.37 0 0 1 2.422-2.1a4.999 4.999 0 0 0 2.581-2.07a4.336 4.336 0 0 1 3.679-2.05c.603 0 1.176.13 1.71.35c.712.31 1.513.31 2.225 0a4.386 4.386 0 0 1 1.701-.35c1.572 0 2.947.85 3.708 2.11c.574.95 1.474 1.64 2.522 2"
                />
              </g>
              <g filter="url(#f1585idz)">
                <path
                  fill="#202020"
                  d="M22.872 12.978c-.327-.285-.706-.586-1.282-.768c-.567-.178-1.277-.226-2.26-.106a.517.517 0 0 0 .125 1.027c.897-.11 1.447-.053 1.825.066c.37.116.62.305.913.56a.517.517 0 1 0 .679-.78"
                />
              </g>
              <g filter="url(#f1585id10)">
                <path
                  fill="#202020"
                  d="M9.553 12.774a5.172 5.172 0 0 1 3.242-.67a.517.517 0 1 1-.125 1.027a4.137 4.137 0 0 0-2.586.53a2.571 2.571 0 0 0-.17.112l-.006.004a.517.517 0 0 1-.633-.818z"
                />
              </g>
              <g filter="url(#f1585id11)">
                <path
                  fill="#23181c"
                  d="M16.346 8.063a4.627 4.627 0 0 1-.123-.255a1.238 1.238 0 0 0-1.148-.78h-2.373c-3.441 0-6.23 2.82-6.23 6.3v.513c-.633-.482-1.43-1.5-1.43-3.147c0-1.998 1.457-3.008 2.386-3.653c.263-.181.483-.334.617-.472a18.8 18.8 0 0 0 .186-.195c.652-.691 1.813-1.923 3.84-2.461c1.299-.345 2.62-.348 3.511-.269c.471.043.803.451.803.924v3.47z"
                />
                <path
                  fill="url(#f1585idg)"
                  d="M16.346 8.063a4.627 4.627 0 0 1-.123-.255a1.238 1.238 0 0 0-1.148-.78h-2.373c-3.441 0-6.23 2.82-6.23 6.3v.513c-.633-.482-1.43-1.5-1.43-3.147c0-1.998 1.457-3.008 2.386-3.653c.263-.181.483-.334.617-.472a18.8 18.8 0 0 0 .186-.195c.652-.691 1.813-1.923 3.84-2.461c1.299-.345 2.62-.348 3.511-.269c.471.043.803.451.803.924v3.47z"
                />
                <path
                  fill="url(#f1585idh)"
                  d="M16.346 8.063a4.627 4.627 0 0 1-.123-.255a1.238 1.238 0 0 0-1.148-.78h-2.373c-3.441 0-6.23 2.82-6.23 6.3v.513c-.633-.482-1.43-1.5-1.43-3.147c0-1.998 1.457-3.008 2.386-3.653c.263-.181.483-.334.617-.472a18.8 18.8 0 0 0 .186-.195c.652-.691 1.813-1.923 3.84-2.461c1.299-.345 2.62-.348 3.511-.269c.471.043.803.451.803.924v3.47z"
                />
              </g>
              <g filter="url(#f1585id12)">
                <path
                  fill="#1f151b"
                  d="m25.63 14.154l-.053-1.177c-.02-1.424-1.197-2.598-2.62-2.658h-2.611a4.515 4.515 0 0 1-3.96-2.348s-.382-.885-.466-2.18c-.065-1 .84-1.718 1.835-1.587c2.066.274 4.934.919 6.905 2.204c3.252 2.122 2.683 5.945.97 7.746"
                />
                <path
                  fill="url(#f1585idi)"
                  d="m25.63 14.154l-.053-1.177c-.02-1.424-1.197-2.598-2.62-2.658h-2.611a4.515 4.515 0 0 1-3.96-2.348s-.382-.885-.466-2.18c-.065-1 .84-1.718 1.835-1.587c2.066.274 4.934.919 6.905 2.204c3.252 2.122 2.683 5.945.97 7.746"
                />
                <path
                  fill="url(#f1585idj)"
                  d="m25.63 14.154l-.053-1.177c-.02-1.424-1.197-2.598-2.62-2.658h-2.611a4.515 4.515 0 0 1-3.96-2.348s-.382-.885-.466-2.18c-.065-1 .84-1.718 1.835-1.587c2.066.274 4.934.919 6.905 2.204c3.252 2.122 2.683 5.945.97 7.746"
                />
                <path
                  fill="url(#f1585idk)"
                  d="m25.63 14.154l-.053-1.177c-.02-1.424-1.197-2.598-2.62-2.658h-2.611a4.515 4.515 0 0 1-3.96-2.348s-.382-.885-.466-2.18c-.065-1 .84-1.718 1.835-1.587c2.066.274 4.934.919 6.905 2.204c3.252 2.122 2.683 5.945.97 7.746"
                />
              </g>
              <path
                fill="#fff"
                d="M20.37 15.429c1.218 0 2.246.84 2.526 1.974a.511.511 0 0 1-.499.635h-4.16a.43.43 0 0 1-.423-.507a2.606 2.606 0 0 1 2.556-2.102"
              />
              <path
                fill="url(#f1585idl)"
                d="M19.985 15.935a1.664 1.664 0 0 1 1.603 2.103h-3.215a1.706 1.706 0 0 1-.06-.439a1.67 1.67 0 0 1 1.672-1.664"
              />
              <path
                fill="#000"
                d="M19.032 17.6a.95.95 0 0 1 .953-.954c.529 0 .952.424.952.953a.94.94 0 0 1-.106.439h-1.686a.862.862 0 0 1-.113-.439"
              />
              <g filter="url(#f1585id13)">
                <path
                  fill="#c7a7a3"
                  d="M19.862 16.287c.119.159-.13.352-.41.563c-.283.21-.492.358-.61.2c-.119-.159.014-.458.295-.669c.282-.21.607-.253.725-.094"
                />
                <path
                  fill="url(#f1585idm)"
                  d="M19.862 16.287c.119.159-.13.352-.41.563c-.283.21-.492.358-.61.2c-.119-.159.014-.458.295-.669c.282-.21.607-.253.725-.094"
                />
              </g>
              <g filter="url(#f1585id14)">
                <path
                  fill="url(#f1585id1h)"
                  d="M21.467 17.38a1.566 1.566 0 0 0-.432-.863l-.484.532l.218.426z"
                />
              </g>
              <path
                fill="#fff"
                d="M11.455 15.429c-1.218 0-2.247.84-2.526 1.974a.511.511 0 0 0 .499.635h4.16a.43.43 0 0 0 .423-.507a2.612 2.612 0 0 0-2.556-2.102"
              />
              <path
                fill="url(#f1585idn)"
                d="M11.84 15.935a1.664 1.664 0 0 0-1.603 2.103h3.214c.038-.144.061-.288.061-.439a1.675 1.675 0 0 0-1.671-1.664"
              />
              <path
                fill="#000"
                d="M12.794 17.6a.949.949 0 0 0-.953-.954a.95.95 0 0 0-.953.953c0 .16.037.31.105.439h1.687a.946.946 0 0 0 .114-.439"
              />
              <g filter="url(#f1585id15)">
                <path
                  fill="url(#f1585id1i)"
                  d="M13.36 17.404c0-.538-.437-.896-.555-1.005l-.537.52l.33.674z"
                />
              </g>
              <g filter="url(#f1585id16)">
                <ellipse
                  cx="11.338"
                  cy="16.646"
                  fill="#c7a7a3"
                  fill-opacity="0.9"
                  rx=".726"
                  ry=".368"
                  transform="rotate(-27.914 11.338 16.646)"
                />
                <ellipse
                  cx="11.338"
                  cy="16.646"
                  fill="url(#f1585ido)"
                  rx=".726"
                  ry=".368"
                  transform="rotate(-27.914 11.338 16.646)"
                />
              </g>
              <path
                fill="url(#f1585id1j)"
                d="M25.089 21.033c.123-1.984.24-3.966.344-5.95a3 3 0 0 1-.344 5.95"
              />
              <path
                fill="url(#f1585idp)"
                d="M25.089 21.033c.123-1.984.24-3.966.344-5.95a3 3 0 0 1-.344 5.95"
              />
              <path
                fill="url(#f1585idq)"
                d="M25.089 21.033c.123-1.984.24-3.966.344-5.95a3 3 0 0 1-.344 5.95"
              />
              <path
                fill="url(#f1585idr)"
                d="M25.089 21.033c.123-1.984.24-3.966.344-5.95a3 3 0 0 1-.344 5.95"
              />
              <path
                fill="url(#f1585id1k)"
                d="M6.508 15.066c-1.457.206-2.596 1.458-2.596 2.972a3 3 0 0 0 2.836 2.996c-.12-1.993-.202-3.975-.24-5.968"
              />
              <path
                fill="url(#f1585ids)"
                d="M6.508 15.066c-1.457.206-2.596 1.458-2.596 2.972a3 3 0 0 0 2.836 2.996c-.12-1.993-.202-3.975-.24-5.968"
              />
              <g filter="url(#f1585id17)">
                <path
                  fill="url(#f1585idt)"
                  d="M6.431 16.299a1.782 1.782 0 0 0 .156 3.503c-.065-1.168-.12-2.335-.156-3.503"
                />
              </g>
              <g filter="url(#f1585id18)">
                <path
                  fill="url(#f1585id1l)"
                  d="M25.245 19.832c.072-1.183.142-2.365.207-3.548a1.781 1.781 0 0 1-.207 3.548"
                />
              </g>
              <g filter="url(#f1585id19)">
                <path
                  stroke="#353535"
                  stroke-linecap="round"
                  stroke-width="0.25"
                  d="M9.623 13.296c.48-.344 1.674-.949 3.086-.711"
                />
              </g>
              <g filter="url(#f1585id1a)">
                <path
                  stroke="#353535"
                  stroke-linecap="round"
                  stroke-width="0.25"
                  d="M22.552 13.21c-.48-.344-1.674-.949-3.086-.711"
                />
              </g>
              <defs>
                <radialGradient
                  id="f1585id0"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientTransform="matrix(1.39603 3.76525 -4.47282 1.65837 24.775 20.288)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset=".215" stop-color="#313131" />
                  <stop offset="1" stop-color="#1a161e" />
                </radialGradient>
                <radialGradient
                  id="f1585id1"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientTransform="matrix(2.75273 .86514 -2.66903 8.49237 4.62 21.202)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#564943" />
                  <stop offset=".746" stop-color="#1e191c" />
                </radialGradient>
                <radialGradient
                  id="f1585id2"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientTransform="matrix(-9.74687 0 0 -17.2421 21.147 18.533)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#ffdcc0" />
                  <stop offset="1" stop-color="#d6a195" />
                </radialGradient>
                <radialGradient
                  id="f1585id3"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientTransform="matrix(-1.86098 23.80477 -19.71315 -1.5411 18.86 7.508)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset=".767" stop-color="#b57997" stop-opacity="0" />
                  <stop offset="1" stop-color="#b57997" />
                </radialGradient>
                <radialGradient
                  id="f1585id4"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientTransform="matrix(0 -2.141 2.64949 0 20.475 16.085)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset=".325" stop-color="#f6b8a8" />
                  <stop offset="1" stop-color="#f6b8a8" stop-opacity="0" />
                </radialGradient>
                <radialGradient
                  id="f1585id5"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientTransform="matrix(.00733 -2.04019 2.2202 .00797 11.624 16.172)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset=".378" stop-color="#d39991" />
                  <stop offset="1" stop-color="#d39991" stop-opacity="0" />
                </radialGradient>
                <radialGradient
                  id="f1585id6"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientTransform="rotate(176.388 10.835 10.54)scale(15.8715 40.5438)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset=".836" stop-color="#e6ad97" stop-opacity="0" />
                  <stop offset="1" stop-color="#e6ad97" />
                </radialGradient>
                <radialGradient
                  id="f1585id7"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientTransform="matrix(5.77672 -6.1111 2.2371 2.11469 5.719 10.469)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset=".428" stop-color="#9f6d5c" />
                  <stop offset="1" stop-color="#9f6d5c" stop-opacity="0" />
                </radialGradient>
                <radialGradient
                  id="f1585id8"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientTransform="matrix(-3.24997 5.37502 -4.43752 -2.68312 20.438 9.25)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset=".078" stop-color="#f6c3b0" />
                  <stop offset="1" stop-color="#f6c3b0" stop-opacity="0" />
                </radialGradient>
                <radialGradient
                  id="f1585id9"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientTransform="matrix(0 .4551 -1.43034 0 16.782 21.07)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#ffddc7" />
                  <stop offset="1" stop-color="#ffddc7" stop-opacity="0" />
                </radialGradient>
                <radialGradient
                  id="f1585ida"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientTransform="rotate(155.369 6.315 11.86)scale(3.11992 5.01397)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset=".714" stop-color="#d3968c" stop-opacity="0" />
                  <stop offset="1" stop-color="#d3968c" />
                </radialGradient>
                <radialGradient
                  id="f1585idb"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientTransform="matrix(0 -1.34375 5.40625 0 15.912 25.132)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#88014e" />
                  <stop offset="1" stop-color="#86004d" />
                </radialGradient>
                <radialGradient
                  id="f1585idc"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientTransform="matrix(0 -6.52791 16.5083 0 6.162 13.14)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset=".536" stop-color="#3e3433" />
                  <stop offset="1" stop-color="#3e3433" stop-opacity="0" />
                </radialGradient>
                <radialGradient
                  id="f1585idd"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientTransform="rotate(-87.401 20.64 -5.275)scale(4.68924 8.30841)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#4f4d4d" />
                  <stop offset="1" stop-color="#4f4d4d" stop-opacity="0" />
                </radialGradient>
                <radialGradient
                  id="f1585ide"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientTransform="rotate(-146.667 12.365 -1.587)scale(5.26377 3.86388)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#5e5a5b" />
                  <stop offset="1" stop-color="#5e5a5b" stop-opacity="0" />
                </radialGradient>
                <radialGradient
                  id="f1585idf"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientTransform="matrix(1.6875 2.75 -6.36771 3.90746 14.225 .913)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset=".287" stop-color="#484646" />
                  <stop offset="1" stop-color="#484646" stop-opacity="0" />
                </radialGradient>
                <radialGradient
                  id="f1585idg"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientTransform="matrix(-4.10381 0 0 -1.52308 16.385 5.125)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#423c3f" />
                  <stop offset="1" stop-color="#423c3f" stop-opacity="0" />
                </radialGradient>
                <radialGradient
                  id="f1585idh"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientTransform="matrix(6 -9.5 10.52499 6.64735 5.787 12.475)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset=".093" stop-color="#0b0306" />
                  <stop offset=".311" stop-color="#1c0c20" />
                  <stop offset="1" stop-color="#1c0c20" stop-opacity="0" />
                </radialGradient>
                <radialGradient
                  id="f1585idi"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientTransform="matrix(5.70209 0 0 2.22942 22.277 6.573)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#4e494b" />
                  <stop offset="1" stop-color="#4e494b" stop-opacity="0" />
                </radialGradient>
                <radialGradient
                  id="f1585idj"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientTransform="rotate(-43.614 25.702 -19.903)scale(6.89811 12.6287)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset=".857" stop-color="#545051" stop-opacity="0" />
                  <stop offset="1" stop-color="#545051" />
                </radialGradient>
                <radialGradient
                  id="f1585idk"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientTransform="matrix(6.056 .70788 -.29638 2.53554 19.172 9.484)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#200e25" />
                  <stop offset="1" stop-color="#200e25" stop-opacity="0" />
                </radialGradient>
                <radialGradient
                  id="f1585idl"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientTransform="matrix(0 1.51263 -2.40601 0 19.98 16.825)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset=".802" stop-color="#7d574a" />
                  <stop offset="1" stop-color="#694b43" />
                  <stop offset="1" stop-color="#804d49" />
                  <stop offset="1" stop-color="#664842" />
                </radialGradient>
                <radialGradient
                  id="f1585idm"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientTransform="rotate(-127.812 13.936 3.702)scale(.70528 .97101)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset=".766" stop-color="#ffe6e2" stop-opacity="0" />
                  <stop offset=".966" stop-color="#ffe6e2" />
                </radialGradient>
                <radialGradient
                  id="f1585idn"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientTransform="matrix(0 1.51271 -2.40614 0 11.844 16.825)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset=".802" stop-color="#7d574a" />
                  <stop offset="1" stop-color="#694b43" />
                  <stop offset="1" stop-color="#804d49" />
                  <stop offset="1" stop-color="#664842" />
                </radialGradient>
                <radialGradient
                  id="f1585ido"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientTransform="rotate(-90.897 14.138 3.05)scale(.92129 1.10743)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset=".766" stop-color="#ffe6e2" stop-opacity="0" />
                  <stop offset=".966" stop-color="#ffe6e2" />
                </radialGradient>
                <radialGradient
                  id="f1585idp"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientTransform="rotate(74.347 1.15 24.594)scale(4.34346 4.144)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset=".856" stop-color="#ce978e" stop-opacity="0" />
                  <stop offset="1" stop-color="#ce978e" />
                </radialGradient>
                <radialGradient
                  id="f1585idq"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientTransform="matrix(1.46875 -2.01563 1.6895 1.2311 25.194 17.866)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset=".664" stop-color="#f7b99c" />
                  <stop offset="1" stop-color="#f7b99c" stop-opacity="0" />
                </radialGradient>
                <radialGradient
                  id="f1585idr"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientTransform="matrix(1.0944 -2.89062 3.86227 1.46228 25.406 18.188)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset=".803" stop-color="#ebbb9d" stop-opacity="0" />
                  <stop offset="1" stop-color="#ebbb9d" />
                </radialGradient>
                <radialGradient
                  id="f1585ids"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientTransform="rotate(-173.034 3.923 8.82)scale(3.02997 3.25254)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset=".775" stop-color="#e8af99" stop-opacity="0" />
                  <stop offset="1" stop-color="#e8af99" />
                </radialGradient>
                <radialGradient
                  id="f1585idt"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientTransform="rotate(170.26 2.606 9.313)scale(1.73369 2.12732)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#c18472" />
                  <stop offset="1" stop-color="#ca8b7a" />
                </radialGradient>
                <filter
                  id="f1585idu"
                  width="20.055"
                  height="23.21"
                  x="6.472"
                  y="7.028"
                  color-interpolation-filters="sRGB"
                  filterUnits="userSpaceOnUse"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feBlend
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  />
                  <feColorMatrix
                    in="SourceAlpha"
                    result="hardAlpha"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  />
                  <feOffset dx="1" />
                  <feGaussianBlur stdDeviation=".7" />
                  <feComposite
                    in2="hardAlpha"
                    k2="-1"
                    k3="1"
                    operator="arithmetic"
                  />
                  <feColorMatrix values="0 0 0 0 0.913725 0 0 0 0 0.686275 0 0 0 0 0.592157 0 0 0 1 0" />
                  <feBlend in2="shape" result="effect1_innerShadow_3930_2033" />
                  <feColorMatrix
                    in="SourceAlpha"
                    result="hardAlpha"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  />
                  <feOffset dy=".2" />
                  <feGaussianBlur stdDeviation=".375" />
                  <feComposite
                    in2="hardAlpha"
                    k2="-1"
                    k3="1"
                    operator="arithmetic"
                  />
                  <feColorMatrix values="0 0 0 0 0.780392 0 0 0 0 0.568627 0 0 0 0 0.486275 0 0 0 1 0" />
                  <feBlend
                    in2="effect1_innerShadow_3930_2033"
                    result="effect2_innerShadow_3930_2033"
                  />
                </filter>
                <filter
                  id="f1585idv"
                  width="5.257"
                  height="7.407"
                  x="13.019"
                  y="15.987"
                  color-interpolation-filters="sRGB"
                  filterUnits="userSpaceOnUse"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feBlend
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  />
                  <feGaussianBlur
                    result="effect1_foregroundBlur_3930_2033"
                    stdDeviation=".5"
                  />
                </filter>
                <filter
                  id="f1585idw"
                  width="3.9"
                  height="5.807"
                  x="13.962"
                  y="16.431"
                  color-interpolation-filters="sRGB"
                  filterUnits="userSpaceOnUse"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feBlend
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  />
                  <feGaussianBlur
                    result="effect1_foregroundBlur_3930_2033"
                    stdDeviation=".1"
                  />
                </filter>
                <filter
                  id="f1585idx"
                  width="6.5"
                  height="2.5"
                  x="12.662"
                  y="23.038"
                  color-interpolation-filters="sRGB"
                  filterUnits="userSpaceOnUse"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feBlend
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  />
                  <feGaussianBlur
                    result="effect1_foregroundBlur_3930_2033"
                    stdDeviation=".05"
                  />
                </filter>
                <filter
                  id="f1585idy"
                  width="24"
                  height="15.148"
                  x="3.912"
                  y="1.538"
                  color-interpolation-filters="sRGB"
                  filterUnits="userSpaceOnUse"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feBlend
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  />
                  <feColorMatrix
                    in="SourceAlpha"
                    result="hardAlpha"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  />
                  <feOffset dy="-.5" />
                  <feGaussianBlur stdDeviation=".625" />
                  <feComposite
                    in2="hardAlpha"
                    k2="-1"
                    k3="1"
                    operator="arithmetic"
                  />
                  <feColorMatrix values="0 0 0 0 0.137255 0 0 0 0 0.0901961 0 0 0 0 0.145098 0 0 0 1 0" />
                  <feBlend in2="shape" result="effect1_innerShadow_3930_2033" />
                  <feColorMatrix
                    in="SourceAlpha"
                    result="hardAlpha"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  />
                  <feOffset dy="-.2" />
                  <feGaussianBlur stdDeviation=".2" />
                  <feComposite
                    in2="hardAlpha"
                    k2="-1"
                    k3="1"
                    operator="arithmetic"
                  />
                  <feColorMatrix values="0 0 0 0 0.0784314 0 0 0 0 0.0352941 0 0 0 0 0.0470588 0 0 0 1 0" />
                  <feBlend
                    in2="effect1_innerShadow_3930_2033"
                    result="effect2_innerShadow_3930_2033"
                  />
                </filter>
                <filter
                  id="f1585idz"
                  width="4.274"
                  height="2.047"
                  x="18.875"
                  y="11.838"
                  color-interpolation-filters="sRGB"
                  filterUnits="userSpaceOnUse"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feBlend
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  />
                  <feColorMatrix
                    in="SourceAlpha"
                    result="hardAlpha"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  />
                  <feOffset dx=".1" dy="-.2" />
                  <feGaussianBlur stdDeviation=".125" />
                  <feComposite
                    in2="hardAlpha"
                    k2="-1"
                    k3="1"
                    operator="arithmetic"
                  />
                  <feColorMatrix values="0 0 0 0 0.0588235 0 0 0 0 0.054902 0 0 0 0 0.0588235 0 0 0 1 0" />
                  <feBlend in2="shape" result="effect1_innerShadow_3930_2033" />
                </filter>
                <filter
                  id="f1585id10"
                  width="4.274"
                  height="2.019"
                  x="9.075"
                  y="11.865"
                  color-interpolation-filters="sRGB"
                  filterUnits="userSpaceOnUse"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feBlend
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  />
                  <feColorMatrix
                    in="SourceAlpha"
                    result="hardAlpha"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  />
                  <feOffset dx=".1" dy="-.2" />
                  <feGaussianBlur stdDeviation=".125" />
                  <feComposite
                    in2="hardAlpha"
                    k2="-1"
                    k3="1"
                    operator="arithmetic"
                  />
                  <feColorMatrix values="0 0 0 0 0.0588235 0 0 0 0 0.054902 0 0 0 0 0.0588235 0 0 0 1 0" />
                  <feBlend in2="shape" result="effect1_innerShadow_3930_2033" />
                </filter>
                <filter
                  id="f1585id11"
                  width="12.344"
                  height="11.239"
                  x="4.541"
                  y="3.102"
                  color-interpolation-filters="sRGB"
                  filterUnits="userSpaceOnUse"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feBlend
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  />
                  <feColorMatrix
                    in="SourceAlpha"
                    result="hardAlpha"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  />
                  <feOffset dx=".4" dy=".2" />
                  <feGaussianBlur stdDeviation=".2" />
                  <feComposite
                    in2="hardAlpha"
                    k2="-1"
                    k3="1"
                    operator="arithmetic"
                  />
                  <feColorMatrix values="0 0 0 0 0.286275 0 0 0 0 0.243137 0 0 0 0 0.227451 0 0 0 1 0" />
                  <feBlend in2="shape" result="effect1_innerShadow_3930_2033" />
                  <feGaussianBlur
                    result="effect2_foregroundBlur_3930_2033"
                    stdDeviation=".25"
                  />
                </filter>
                <filter
                  id="f1585id12"
                  width="12.094"
                  height="10.965"
                  x="15.417"
                  y="3.689"
                  color-interpolation-filters="sRGB"
                  filterUnits="userSpaceOnUse"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feBlend
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  />
                  <feGaussianBlur
                    result="effect1_foregroundBlur_3930_2033"
                    stdDeviation=".25"
                  />
                </filter>
                <filter
                  id="f1585id13"
                  width="1.294"
                  height="1.125"
                  x="18.698"
                  y="16.091"
                  color-interpolation-filters="sRGB"
                  filterUnits="userSpaceOnUse"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feBlend
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  />
                  <feGaussianBlur
                    result="effect1_foregroundBlur_3930_2033"
                    stdDeviation=".05"
                  />
                </filter>
                <filter
                  id="f1585id14"
                  width="1.316"
                  height="1.357"
                  x="20.351"
                  y="16.317"
                  color-interpolation-filters="sRGB"
                  filterUnits="userSpaceOnUse"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feBlend
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  />
                  <feGaussianBlur
                    result="effect1_foregroundBlur_3930_2033"
                    stdDeviation=".1"
                  />
                </filter>
                <filter
                  id="f1585id15"
                  width="1.493"
                  height="1.594"
                  x="12.068"
                  y="16.199"
                  color-interpolation-filters="sRGB"
                  filterUnits="userSpaceOnUse"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feBlend
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  />
                  <feGaussianBlur
                    result="effect1_foregroundBlur_3930_2033"
                    stdDeviation=".1"
                  />
                </filter>
                <filter
                  id="f1585id16"
                  width="1.529"
                  height="1.141"
                  x="10.574"
                  y="16.076"
                  color-interpolation-filters="sRGB"
                  filterUnits="userSpaceOnUse"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feBlend
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  />
                  <feGaussianBlur
                    result="effect1_foregroundBlur_3930_2033"
                    stdDeviation=".05"
                  />
                </filter>
                <filter
                  id="f1585id17"
                  width="2.045"
                  height="4.004"
                  x="4.791"
                  y="16.049"
                  color-interpolation-filters="sRGB"
                  filterUnits="userSpaceOnUse"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feBlend
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  />
                  <feGaussianBlur
                    result="effect1_foregroundBlur_3930_2033"
                    stdDeviation=".125"
                  />
                </filter>
                <filter
                  id="f1585id18"
                  width="2.765"
                  height="4.549"
                  x="24.745"
                  y="15.784"
                  color-interpolation-filters="sRGB"
                  filterUnits="userSpaceOnUse"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feBlend
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  />
                  <feGaussianBlur
                    result="effect1_foregroundBlur_3930_2033"
                    stdDeviation=".25"
                  />
                </filter>
                <filter
                  id="f1585id19"
                  width="3.836"
                  height="1.515"
                  x="9.248"
                  y="12.156"
                  color-interpolation-filters="sRGB"
                  filterUnits="userSpaceOnUse"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feBlend
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  />
                  <feGaussianBlur
                    result="effect1_foregroundBlur_3930_2033"
                    stdDeviation=".125"
                  />
                </filter>
                <filter
                  id="f1585id1a"
                  width="3.836"
                  height="1.515"
                  x="19.091"
                  y="12.07"
                  color-interpolation-filters="sRGB"
                  filterUnits="userSpaceOnUse"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feBlend
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  />
                  <feGaussianBlur
                    result="effect1_foregroundBlur_3930_2033"
                    stdDeviation=".125"
                  />
                </filter>
                <linearGradient
                  id="f1585id1b"
                  x1="25.527"
                  x2="17.412"
                  y1="21.675"
                  y2="21.675"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#ffd6ba" />
                  <stop offset="1" stop-color="#ffd6ba" stop-opacity="0" />
                </linearGradient>
                <linearGradient
                  id="f1585id1c"
                  x1="17.475"
                  x2="15.912"
                  y1="19.791"
                  y2="19.856"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset=".36" stop-color="#ffdfc7" />
                  <stop offset="1" stop-color="#ffdfc7" stop-opacity="0" />
                </linearGradient>
                <linearGradient
                  id="f1585id1d"
                  x1="15.912"
                  x2="15.912"
                  y1="21.915"
                  y2="21.048"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#d89793" />
                  <stop offset="1" stop-color="#d89793" stop-opacity="0" />
                </linearGradient>
                <linearGradient
                  id="f1585id1e"
                  x1="15.912"
                  x2="15.912"
                  y1="16.631"
                  y2="17.891"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#e8bba8" />
                  <stop offset="1" stop-color="#e8bba8" stop-opacity="0" />
                </linearGradient>
                <linearGradient
                  id="f1585id1f"
                  x1="13.672"
                  x2="14.266"
                  y1="24.844"
                  y2="23.288"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#e1aca6" />
                  <stop offset="1" stop-color="#e1aca6" stop-opacity="0" />
                </linearGradient>
                <linearGradient
                  id="f1585id1g"
                  x1="28.687"
                  x2="7.037"
                  y1="7.975"
                  y2="7.975"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#443d40" />
                  <stop offset="1" stop-color="#272127" />
                </linearGradient>
                <linearGradient
                  id="f1585id1h"
                  x1="21.431"
                  x2="20.846"
                  y1="16.925"
                  y2="17.286"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#b4948d" />
                  <stop offset="1" stop-color="#b4948d" stop-opacity="0" />
                </linearGradient>
                <linearGradient
                  id="f1585id1i"
                  x1="13.231"
                  x2="12.646"
                  y1="16.925"
                  y2="17.286"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#b4948d" />
                  <stop offset="1" stop-color="#b4948d" stop-opacity="0" />
                </linearGradient>
                <linearGradient
                  id="f1585id1j"
                  x1="27.912"
                  x2="25.662"
                  y1="16.975"
                  y2="21.033"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#ffd6bd" />
                  <stop offset="1" stop-color="#f0b8a6" />
                </linearGradient>
                <linearGradient
                  id="f1585id1k"
                  x1="5.006"
                  x2="7.725"
                  y1="18.288"
                  y2="18.05"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#d19787" />
                  <stop offset="1" stop-color="#c9887d" />
                </linearGradient>
                <linearGradient
                  id="f1585id1l"
                  x1="26.128"
                  x2="26.128"
                  y1="16.284"
                  y2="19.832"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#f9bb9e" />
                  <stop offset="1" stop-color="#f6bba0" />
                </linearGradient>
              </defs>
            </g>
          </svg>
        )}

        {isError && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="2em"
            height="2em"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2m1 15h-2v-2h2zm0-4h-2V7h2z"
            />
          </svg>
        )}

        <div
          className={`p-2 rounded-lg ${
            isError
              ? "bg-red-100 text-red-800 dark:bg-red-700 dark:text-red-200"
              : sender === "ai"
              ? "bg-purple-100 text-purple-800 dark:bg-purple-500 dark:text-white"
              : "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-white"
          }`}
        >
          {message}
        </div>
      </div>
    </div>
  );
};

export default ChatHistoryItem;
