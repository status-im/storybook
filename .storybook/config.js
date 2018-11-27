import { addDecorator, configure } from '@storybook/react';
import { withOptions } from '@storybook/addon-options';

function loadStories() {
  require('../src/stories');
}

addDecorator(
  withOptions({
    theme: {
      mainBackground: 'linear-gradient(to bottom right, black, gray)', // applied to root `background`
      mainBorder: '1px solid rgba(0,0,0,0.1)', // applied to panels `border`
      mainBorderColor: 'rgba(0,0,0,0.1)', // applied for most borders
      mainBorderRadius: '4px', // applied to panels, buttons, inputs
      mainFill: 'rgba(255,255,255,0.89)', // applied to panels `background`
      barFill: 'rgba(255,255,255,1)', // applied to TabsBar `background`
      inputFill: 'rgba(0,0,0,0.05)', // applied to Input `background`
      mainTextFace: 'sans-serif', // applied to root `font-family`
      mainTextColor: '#FFF',
      mainTextSize: '13px', // applied to root
      dimmedTextColor: 'rgba(0,0,0,0.4)', // applied in less important text
      highlightColor: '#9fdaff', // applied to indicate selection
      successColor: '#0edf62', // applied to indicate positive
      failColor: '#ff3f3f', //applied to indicate negative
      warnColor: 'orange', // applied to indicate ow-ow
      monoTextFace: 'roboto-mono', //applied to pre
      layoutMargin: '10px', // applied to space panels
      overlayBackground: 'linear-gradient(to bottom right, rgba(233, 233, 233, 0.6), rgba(255, 255, 255, 0.8))' // applied to overlay `background`
    },
    brand: {
      background: 'url("logo.svg")',
    }
  })
);

configure(loadStories, module);
