import { baseMapStyle } from './basemap.style';
import { fullScreenStyle, rotateStyle, zoomInStyle, zoomOutStyle } from './basicController.style';
import {
  layerSwitcherButtonStyle,
  layerSwitcherContainerStyle,
  layerSwitcherLiStyle,
  layerSwitcherPanelButtonStyle,
  layerSwitcherPanelFolderStyle,
  layerSwitcherPanelStyle,
  layerSwitcherShownStyle,
  layerSwitcherUlStyle,
} from './layerSwitcher.style';
import { scaleStyle } from './scale.style';
import { getTwStyleFromArray } from './utils';

export const baseMap = getTwStyleFromArray(baseMapStyle);
export const fullScreen = getTwStyleFromArray(fullScreenStyle);
export const scale = getTwStyleFromArray(scaleStyle);
export const rotate = getTwStyleFromArray(rotateStyle);
export const zoomIn = getTwStyleFromArray(zoomInStyle);
export const zoomOut = getTwStyleFromArray(zoomOutStyle);
export const layerSwitcherContainer = getTwStyleFromArray(layerSwitcherContainerStyle);
export const layerSwitcherButton = getTwStyleFromArray(layerSwitcherButtonStyle);
export const layerSwitcherPanel = getTwStyleFromArray(layerSwitcherPanelStyle);
export const layerSwitcherUl = getTwStyleFromArray(layerSwitcherUlStyle);
export const layerSwitcherLi = getTwStyleFromArray(layerSwitcherLiStyle);
export const layerSwitcherPanelButton = getTwStyleFromArray(layerSwitcherPanelButtonStyle);
export const layerSwitcherPanelFolder = getTwStyleFromArray(layerSwitcherPanelFolderStyle);
export const layerSwitcherShown = getTwStyleFromArray(layerSwitcherShownStyle);
