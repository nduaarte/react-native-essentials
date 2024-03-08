import React from 'react';
import { TextProps } from 'react-native';

import { StyledText } from './styles';
import { COLORS } from '../../styles/colors';

export interface ICustomTextProps extends TextProps {
  size?: number;
  letterSpacing?: number;
  lineHeight?: number;
  color?: (string & {}) | keyof typeof COLORS;
  left?: boolean;
  right?: boolean;
  center?: boolean;
  bold?: boolean;
  children?: React.ReactNode;
}

const CustomText: React.FC<ICustomTextProps> = ({
  size = 16,
  letterSpacing,
  lineHeight,
  color,
  left,
  right,
  center,
  bold,
  children,
  ...rest
}) => {
  return (
    <StyledText
      size={size}
      letterSpacing={letterSpacing}
      lineHeight={lineHeight}
      color={color}
      left={left}
      right={right}
      center={center}
      bold={bold}
      allowFontScaling={false}
      {...rest}>
      {children}
    </StyledText>
  );
};

export default CustomText;
