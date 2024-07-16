import { Property } from '@stitches/react/types/css';
import tinycolor from 'tinycolor2';

import { ColorInfo } from '../../utils/getPrimaryColorInfo';

export namespace Theme {
  type Colors = {
    cardBackground: Property.Color;
    cardBorder: Property.Color;
    cardShadow: Property.Color;
    cardHoverBackground: Property.Color;
    cardHoverBorder: Property.Color;
    cardActiveBackground: Property.Color;
    cardActiveBorder: Property.Color;
    cardGhostBackground: Property.Color;
    innerCardBgColor: Property.Color;
  };

  type Factory = (primaryColor: ColorInfo) => Colors;

  export const getLight: Factory = (primaryColor) => ({
    cardBackground: 'white',
    cardBorder: '$deepBlue3',
    cardShadow: 'rgba(0,0,0,.1)',
    cardHoverBackground: 'rgba(0,0,0,.05)',
    cardHoverBorder: tinycolor(primaryColor.value).setAlpha(0.6).toHslString(),
    cardActiveBackground: 'rgba(0,0,0,.03)',
    cardActiveBorder: '$primary',
    cardGhostBackground: '$deepBlue2',
    innerCardBgColor: tinycolor('black').setAlpha(0.04).toHslString(),
  });

  export const getDark: Factory = (primaryColor) => ({
    cardBackground: '$deepBlue2',
    cardBorder: '$deepBlue3',
    cardShadow: 'transparent',
    cardHoverBackground: 'rgba(255,255,255,.12)',
    cardHoverBorder: tinycolor(primaryColor.value).setAlpha(0.6).toHslString(),
    cardActiveBackground: 'rgba(255,255,255,.07)',
    cardActiveBorder: tinycolor(primaryColor.value).setAlpha(0.4).toHslString(),
    cardGhostBackground: '$deepBlue1',
    innerCardBgColor: tinycolor('white').setAlpha(0.07).toHslString(),
  });
}
