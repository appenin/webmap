import styled from '@/style/stylemapper';

import {
  baseMap,
  fullScreen,
  layerSwitcherButton,
  layerSwitcherContainer,
  layerSwitcherLi,
  layerSwitcherPanel,
  layerSwitcherPanelButton,
  layerSwitcherPanelFolder,
  layerSwitcherShown,
  layerSwitcherUl,
  rotate,
  scale,
  zoomIn,
  zoomOut,
} from './style';

export const MapContainer = styled(
  'div',
  `${baseMap}`,
  `${fullScreen}`,
  `${zoomIn}`,
  `${zoomOut}`,
  `${rotate}`,
  `${scale}`,
  `${layerSwitcherContainer}`,
  `${layerSwitcherButton}`,
  `${layerSwitcherShown}`,
  `${layerSwitcherPanel}`,
  `${layerSwitcherUl}`,
  `${layerSwitcherLi}`,
  `${layerSwitcherPanelFolder}`,
  `${layerSwitcherPanelButton}`,
);
