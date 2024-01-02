const ProfileImage = () => {
  return (
    <svg
      id="sw-js-blob-svg"
      viewBox="0 0 100 80"
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
    >
      {" "}
      <defs>
        {" "}
        <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">
          {" "}
          <stop
            id="stop1"
            stopColor="rgba(248, 117, 55, 1)"
            offset="0%"
          ></stop>{" "}
          <stop
            id="stop2"
            stopColor="rgba(251, 168, 31, 1)"
            offset="100%"
          ></stop>{" "}
        </linearGradient>{" "}
      </defs>
      <mask id="mask1" mask-type="alpha">
        <path
          fill="url(#sw-gradient)"
          d="M24.3,-26.9C29.8,-18.8,31.3,-9.4,28.3,-3C25.2,3.4,17.7,6.7,12.2,10.7C6.7,14.7,3.4,19.3,-1.3,20.6C-5.9,21.8,-11.8,19.8,-18.3,15.8C-24.9,11.8,-32.1,5.9,-33.5,-1.4C-34.9,-8.7,-30.6,-17.5,-24,-25.5C-17.5,-33.6,-8.7,-41,0.3,-41.3C9.4,-41.7,18.8,-35,24.3,-26.9Z"
          width="100%"
          height="100%"
          transform="translate(50 50)"
          strokeWidth="0"
          style={{ transition: "all 0.3s ease 0s;" }}
        ></path>
      </mask>
      <g mask="url(#mask1)">
        <path
          fill="url(#sw-gradient)"
          d="M24.3,-26.9C29.8,-18.8,31.3,-9.4,28.3,-3C25.2,3.4,17.7,6.7,12.2,10.7C6.7,14.7,3.4,19.3,-1.3,20.6C-5.9,21.8,-11.8,19.8,-18.3,15.8C-24.9,11.8,-32.1,5.9,-33.5,-1.4C-34.9,-8.7,-30.6,-17.5,-24,-25.5C-17.5,-33.6,-8.7,-41,0.3,-41.3C9.4,-41.7,18.8,-35,24.3,-26.9Z"
          width="100%"
          height="100%"
          transform="translate(50 50)"
          strokeWidth="0"
          style={{ transition: "all 0.3s ease 0s;" }}
        ></path>
        <image href="/images/meAdvance.png" x="15" y="12" className=" dpImg" />
      </g>
    </svg>
  );
};

export default ProfileImage;
