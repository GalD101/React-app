import React from 'react';
import reactLogo from './icons/react_dark_logo.svg';
import angularLogo from './icons/angular_dark_logo.png';
import vueLogo from './icons/vue_dark_logo.png';
import facebookLogo from './icons/fb_icon.svg';
import instagramLogo from './icons/instagram_dark_logo.png';
import twitterLogo from './icons/twitter_dark_logo.png';
import whatsAppLogo from './icons/whatsapp_dark_logo.png';
import cypressLogo from './icons/cypress_logo.png';
import githubLogo from './icons/github_logo.svg';
import javascriptLogo from './icons/javascript_dark_logo.png';
import gmailLogo from './icons/gmail_dark_logo.png';
import googleLogo from './icons/google_dark_logo.png';
import spotifyLogo from './icons/spotify_dark_logo.png';
import facebookOppositeLogo from './icons/fb_icon_opposite_logo.png';
import instagramOppositeLogo from './icons/instagram_logo.png';
import cypressOppositeLogo from './icons/cypress_opposite_logo.png';
import githubOppositeLogo from './icons/github_opposite_logo.png';
import javascriptOppositeLogo from './icons/javascript_logo.png';
import spotifyOppositeLogo from './icons/spotify_logo.png';
import googleOppositeLogo from './icons/google_logo.png';
import gmailOppositeLogo from './icons/gmail_logo.png';
import twitterOppositeLogo from './icons/twitter_flying_bird_logo.gif';
import whatsAppOppositeLogo from './icons/whatsapp_logo.png';
import reactOppositeLogo from './icons/react_logo.svg';
import angularOppositeLogo from './icons/angular_logo.png';
import vueOppositeLogo from './icons/vue_logo.png';

export default class ColorButton extends React.Component {
    changeColor(props) {
        var dict = {
            facebook: facebookOppositeLogo,
            instagram: instagramOppositeLogo,
            twitter: twitterOppositeLogo,
            whatsapp: whatsAppOppositeLogo,
            react: reactOppositeLogo,
            angular: angularOppositeLogo,
            vue: vueOppositeLogo,
            cypress: cypressOppositeLogo,
            github: githubOppositeLogo,
            javascript: javascriptOppositeLogo,
            google: googleOppositeLogo,
            gmail: gmailOppositeLogo,
            spotify: spotifyOppositeLogo
        }
        
        props.target.src = dict[`${props.target.name}`];
        let colorName = props.target.alt;
        document.body.style.backgroundColor = colorName;
    }

    focusOnElement(props) {
        var dict = {
            facebook: facebookLogo,
            instagram: instagramLogo,
            twitter: twitterLogo,
            whatsapp: whatsAppLogo,
            react: reactLogo,
            angular: angularLogo,
            vue: vueLogo,
            cypress: cypressLogo,
            github: githubLogo,
            javascript: javascriptLogo,
            google: googleLogo,
            gmail: gmailLogo,
            spotify: spotifyLogo,
        }
        props.target.src = dict[`${props.target.name}`];
    }
    // style={{backgroundColor: this.props.color}}

    render() {
        return (
            <a href={this.props.link} target="_blank" rel="noopener noreferrer" >
                <img alt={this.props.color} name={this.props.name} src={this.props.logo} onMouseEnter={this.changeColor} onMouseLeave={this.focusOnElement} className={this.props.className}/>
            </a>
            
        );
    }
}