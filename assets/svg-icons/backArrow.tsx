import Svg, { Path } from "react-native-svg";

export default function BackArrowIcon() {
  return (
    <Svg width='18' height='17' viewBox='0 0 18 17' fill='none'>
      <Path
        d='M8 1.46582L1 8.38951L8 15.3132'
        stroke='#2D3748'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path
        d='M1 8.38953H17'
        stroke='#2D3748'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </Svg>
  );
}
