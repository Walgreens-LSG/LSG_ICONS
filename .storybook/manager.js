//This file allows global themeing and configuration of this storybook

//required addons
import {addons} from '@storybook/addons';
import {themes} from '@storybook/theming';
import yourTheme from './YourTheme';

addons.setConfig({
   theme: yourTheme,
});