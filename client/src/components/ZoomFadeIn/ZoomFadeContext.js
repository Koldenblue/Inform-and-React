import { createContext } from 'react';

const ZoomFadeContext = createContext({
  currentlyZoomed: false,
  setCurrentlyZoomed: () => {}
})

export default ZoomFadeContext;

