import { ISvgProps } from "@/global/global";
import "./Hero.css";

const MediaIcon = ({ w = "51", h = "auto" }: ISvgProps) => {
  return (
    <div className="zooming-media-icon">
      <svg
        width={w}
        height={h}
        viewBox="0 0 51 51"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="4.05652"
          width="46.7188"
          height="46.7188"
          rx="8"
          transform="rotate(4.98118 4.05652 0)"
          fill="#7252A4"
        />
        <path
          d="M26.1446 15.6032C20.798 15.1372 16.0691 19.1078 15.6031 24.4544C15.1371 29.8009 19.1078 34.5298 24.4543 34.9958C29.8009 35.4618 34.5298 31.4911 34.9958 26.1446C35.4618 20.798 31.4911 16.0692 26.1446 15.6032ZM24.6234 33.0565C20.3463 32.6838 17.1696 28.9004 17.5424 24.6234C17.9152 20.3463 21.6985 17.1697 25.9755 17.5424C30.2526 17.9152 33.4293 21.6985 33.0565 25.9756C32.6837 30.2526 28.9004 33.4293 24.6234 33.0565Z"
          fill="white"
        />
        <path
          d="M21.968 29.8941L30.1476 25.722L22.8131 20.1978L21.968 29.8941Z"
          fill="white"
        />
      </svg>
    </div>
  );
};

export default MediaIcon;
