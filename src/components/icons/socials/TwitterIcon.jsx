import PropsType from 'prop-types';

TwitterIcon.propTypes = {
  size: PropsType.string,
  theme: PropsType.string,
};

export default function TwitterIcon({ size = '17', theme = 'dark' }) {
  const color = theme === 'dark' ? '#02284A' : '#ffffff';

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 17 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_1645_203)">
        <path
          d="M14.7155 5.4598C14.7217 5.60039 14.7217 5.73459 14.7217 5.87518C14.7278 10.1377 11.5962 15.0584 5.86914 15.0584C4.18001 15.0584 2.5217 14.5536 1.09766 13.6078C1.34424 13.6397 1.59083 13.6525 1.83742 13.6525C3.23681 13.6525 4.59921 13.1668 5.70269 12.2657C4.37112 12.2402 3.19982 11.3391 2.79295 10.0227C3.26147 10.1185 3.74232 10.0993 4.1985 9.96514C2.7498 9.67117 1.70796 8.34833 1.7018 6.80821C1.7018 6.79542 1.7018 6.78264 1.7018 6.76986C2.13333 7.01909 2.62034 7.15969 3.11352 7.17247C1.75112 6.22666 1.32575 4.34145 2.15182 2.86523C3.73615 4.88465 6.06641 6.10524 8.56928 6.23945C8.31653 5.1211 8.66175 3.94524 9.46933 3.15281C10.7208 1.93221 12.6935 1.99612 13.8771 3.2934C14.5737 3.15281 15.2457 2.88441 15.856 2.50736C15.6217 3.25506 15.1347 3.88772 14.4874 4.29033C15.1039 4.21364 15.708 4.0411 16.2752 3.78547C15.856 4.43731 15.3258 4.99968 14.7155 5.4598Z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="clip0_1645_203">
          <rect
            width="15.9763"
            height="15.9763"
            fill="white"
            transform="translate(0.699219 0.679688)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}
