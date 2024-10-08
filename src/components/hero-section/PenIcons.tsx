import { ISvgProps } from "@/global/global";
import "./Hero.css";

const PenIcons = ({ w = "51", h = "auto" }: ISvgProps) => {
  return (
    <div className="zooming-pen-icon">
      <svg
        width={w}
        height={h}
        viewBox="0 0 58 58"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          y="12.0918"
          width="46.7188"
          height="46.7188"
          rx="8"
          transform="rotate(-15 0 12.0918)"
          fill="#F88C3D"
        />
        <g clip-path="url(#clip0_1_656)">
          <path
            d="M27.8474 36.9115L34.2434 25.8335L28.9815 22.7956L22.5856 33.8736C22.4976 34.0263 22.4525 34.1999 22.4552 34.3761L22.8076 39.5649L27.4765 37.2759C27.6309 37.1902 27.7593 37.0641 27.8474 36.9115ZM36.3081 22.2572C36.5661 21.8102 36.636 21.2789 36.5024 20.7803C36.3688 20.2817 36.0427 19.8566 35.5957 19.5984L33.705 18.5069C33.258 18.2489 32.7267 18.179 32.2281 18.3126C31.7295 18.4461 31.3044 18.7723 31.0462 19.2193L29.9547 21.1099L35.2165 24.1479L36.3081 22.2572Z"
            fill="white"
          />
        </g>
        <defs>
          <clipPath id="clip0_1_656">
            <rect
              width="23.36"
              height="23.36"
              fill="white"
              transform="translate(14.6969 20.5771) rotate(-15)"
            />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
};

export default PenIcons;
