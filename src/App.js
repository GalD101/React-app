import React from 'react';
import reactLogo from './icons/react_dark_logo.svg';
import angularLogo from './icons/angular_dark_logo.png';
import vueLogo from './icons/vue_dark_logo.png';
import whatsAppLogo from './icons/whatsapp_dark_logo.png';
import facebookLogo from './icons/fb_icon.svg';
import instagramLogo from './icons/instagram_dark_logo.png';
import twitterLogo from './icons/twitter_dark_logo.png';
import cypressLogo from './icons/cypress_logo.png';
import githubLogo from './icons/github_logo.svg';
import javascriptLogo from './icons/javascript_dark_logo.png';
import googleLogo from './icons/google_dark_logo.png';
import gmailLogo from './icons/gmail_dark_logo.png';
import spotifyLogo from './icons/spotify_dark_logo.png';
import './App.css';
import ColorButton from './ColorButton';

function App() {
  return (
    /*<ColorButton color="purple" />
    <ColorButton color="pink" />
    <ColorButton color="green" />
    <ColorButton color="orange" />
    <ColorButton color="gray" />
    <ColorButton color="red" />
    <ColorButton color="yellow" />
    <ColorButton color="brown" /> */

    /*<ColorButton color="gold" />
    <ColorButton color="indigo" />
    <ColorButton color="lime" />
    <ColorButton color="magenta" />
    <ColorButton color="maroon" />
    <ColorButton color="navy" />
    <ColorButton color="olive" />
    <ColorButton color="orchid" />
    <ColorButton color="peru" />
    <ColorButton color="plum" />
    <ColorButton color="salmon" />
    <ColorButton color="turquoise" />
    <ColorButton color="sienna" />
    <ColorButton color="silver" />
    <ColorButton color="tomato" />
    <ColorButton color="thistle" />
    <ColorButton color="violet" />
    <ColorButton color="wheat" />
    <ColorButton color="teal" />
    <ColorButton color="tan" />
    <ColorButton color="white" />
    <ColorButton color="black" /> */

    // 

    <section>
    <ColorButton color="navy" logo={facebookLogo} link="https://facebook.com" name="facebook" />
    <ColorButton color="cyan" logo={twitterLogo} link="https://twitter.com" name="twitter" />
    <ColorButton color="pink" logo={instagramLogo} link="https://www.instagram.com" name="instagram" />
    <ColorButton color="teal" logo={reactLogo} link="https://reactjs.org" className='App-logo' name="react" />
    <ColorButton color="red" logo={angularLogo} link="https://angular.io" name="angular" />
    <ColorButton color="olive" logo={vueLogo} link="https://vuejs.org" name="vue" />
    <ColorButton color="gray" logo={cypressLogo} link="https://www.cypress.io" name="cypress" />
    <ColorButton color="black" logo={githubLogo} link="https://github.com" name="github" />
    <ColorButton color="yellow" logo={javascriptLogo} link="https://www.javascript.com" name="javascript" />
    <ColorButton color="lime" logo={spotifyLogo} link="https://www.spotify.com" name="spotify" />
    <ColorButton color="lime" logo={whatsAppLogo} link="https://www.whatsapp.com" name="whatsapp" />
    <ColorButton color="white" logo={googleLogo} link="https://www.google.com" name="google" />
    <ColorButton color="red" logo={gmailLogo} link="https://mail.google.com" name="gmail" />
    </section>
  );
}

export default App;
