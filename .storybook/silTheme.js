import { create } from '@storybook/theming/create';
import pkg from '../package.json'

export default create({
  base: 'light',

  brandTitle: `Front.project v.${pkg.version}`,
})
