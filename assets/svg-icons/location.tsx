import Svg, { Rect, G, Path, Defs, ClipPath } from "react-native-svg";

export default function LocationIcon() {
  return (
    <Svg width='22' height='22' viewBox='0 0 22 22' fill='none'>
      <G clip-path='url(#clip0_2_265)'>
        <Path
          d='M19.25 9.16666C19.25 15.5833 11 21.0833 11 21.0833C11 21.0833 2.75 15.5833 2.75 9.16666C2.75 6.97862 3.61919 4.8802 5.16637 3.33303C6.71354 1.78585 8.81196 0.916656 11 0.916656C13.188 0.916656 15.2865 1.78585 16.8336 3.33303C18.3808 4.8802 19.25 6.97862 19.25 9.16666Z'
          stroke='black'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <Path
          d='M11 11.9167C12.5188 11.9167 13.75 10.6854 13.75 9.16666C13.75 7.64787 12.5188 6.41666 11 6.41666C9.48122 6.41666 8.25 7.64787 8.25 9.16666C8.25 10.6854 9.48122 11.9167 11 11.9167Z'
          stroke='black'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </G>
      <Defs>
        <ClipPath id='clip0_2_265'>
          <Rect width='22' height='22' fill='white' />
        </ClipPath>
      </Defs>
    </Svg>
  );
}
