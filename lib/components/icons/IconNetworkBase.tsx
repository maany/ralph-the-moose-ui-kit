import { IconProps, generateClassesForIcon } from "./Icon";

/**
 * IconNetworkBase
 * @usage <IconNetworkBase />
 */
export const IconNetworkBase = (props: IconProps) => {
  return (
    <svg
      className={generateClassesForIcon(props)}
      viewBox="0 0 25 25"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_85_21294)">
        <path d="M12.478 25C19.394 25 25 19.404 25 12.5C25 5.596 19.394 0 12.478 0C5.917 0 0.535 5.038 0 11.449H16.551V13.551H0C0.535 19.962 5.917 25 12.478 25Z" />
      </g>
      <defs>
        <clipPath id="clip0_85_21294">
          <rect width="25" height="25" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
