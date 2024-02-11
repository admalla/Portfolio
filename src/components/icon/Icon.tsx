import React, { SVGProps } from 'react';
import iconSprite from '../../assets/images/spriteSvg.svg';

type Props = {
  iconId: string;
  width?: string;
  height?: string;
  viewBox?: string;
} & SVGProps<SVGSVGElement>;

export function Icon({
  iconId,
  width = '50',
  height = '50',
  viewBox = '0 0 50 50',
  ...rest
}: Props) {

  return (
    <svg
      width={width}
      height={height}
      viewBox={viewBox}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <use xlinkHref={`${iconSprite}#${iconId}`} />
    </svg>
  );
}
