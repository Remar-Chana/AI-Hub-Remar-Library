import type { Preview } from '@storybook/react-vite'
import '../src/index.css'
import { mswLoader } from 'msw-storybook-addon/csf3'
import { mswHandlers } from './msw-handlers'

const preview: Preview = {
  loaders: [mswLoader()],
  parameters: {
    msw: mswHandlers,
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },

    a11y: {
      test: 'todo'
    }
  },
};

export default preview;
