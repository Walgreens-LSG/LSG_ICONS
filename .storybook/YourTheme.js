import {create} from '@storybook/theming';

import imageFile from './images/logo-mark.svg';

export default create({
    base: 'light',

    brandTitle: 'Walgreens\'s | Live Style Guide Icon Library',
    brandUrl: "https://walgreens.com",
    brandImage: imageFile,

    //Typography
    fontBase:'"Source Sans Pro", sans-serif',
    fontCode: "monospace",

});
