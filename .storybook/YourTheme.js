import {create} from '@storybook/theming';
import {logoUrl} from '../public/logo-mark.svg';

export default create({
    base: 'light',

    brandTitle: 'Walgreens\'s | Live Style Guide Icon Library',
    brandUrl: "https://walgreens.com",
    brandImage: "/logo-mark.svg",

    //Typography
    fontBase:'"Source Sans Pro", sans-serif',
    fontCode: "monospace",

});
