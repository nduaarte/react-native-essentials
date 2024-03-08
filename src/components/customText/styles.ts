import { Text } from 'react-native';
import styled from 'styled-components/native';

import { ICustomTextProps } from '.';
import { COLORS } from '../../styles/colors';

const handleTextColor = (
  color: (string & {}) | keyof typeof COLORS | undefined,
) => {
  let definedColor = color || COLORS.primary;

  for (let i in COLORS) {
    if (i === color) {
      definedColor = COLORS[i];
    }
  }

  return definedColor;
};

const handleTextAlign = (props: ICustomTextProps, flex?: boolean) => {
  if (flex) {
    if (props.center) {
      return 'center';
    } else {
      return 'auto';
    }
  }

  if (props.right) {
    return 'right';
  } else if (props.center) {
    return 'center';
  } else {
    return 'left';
  }
};

export const StyledText = styled(Text)<ICustomTextProps>`
  letter-spacing: ${props => props.letterSpacing || 0}px;
  font-size: ${props => props.size}px;
  text-align: ${props => handleTextAlign(props)};
  align-self: ${props => handleTextAlign(props, true)};
  color: ${props => handleTextColor(props.color)};
  font-weight: ${props => (props.bold ? 'bold' : 'normal')};
`;
