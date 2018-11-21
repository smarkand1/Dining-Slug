//This file will tell Node how to interpret JSX
//This will be used as the app's entry point
/******NOTE: WE NEED TO INSTALL babel-preset-es2015, babel-preset-react-app, ignore-styles *****/


require('ignore-styles');
require('babel-register')({
    ignore:[ /(node_modules)/ ],
    presets: ['es2015', 'react-app']
});
require('./index');