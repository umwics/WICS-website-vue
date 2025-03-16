import instagramSVG from './svgTemplates/InstagramSVG.vue';
import linkedinSVG from './svgTemplates/LinkedInSVG.vue'
import githubSVG from './svgTemplates/GitHubSVG.vue'
import emailSVG from './svgTemplates/EmailSVG.vue'

export const socialMedia = [
    {
        "svgIcon": instagramSVG,
        "name": "Instagram",
        "link": "https://www.instagram.com/umwics",
        "username": "@umwics",
    },
    {
        "svgIcon": linkedinSVG,
        "name": "LinkedIn",
        "link": "https://ca.linkedin.com/company/umwics",
        "username": "UManitoba WICS",
    },
    {
        "svgIcon": emailSVG,
        "name": "Email",
        "link": "mailto:uofmwics@gmail.com",
        "username": "uofmwics@gmail.com",
    },
    {
        "svgIcon": githubSVG,
        "name": "GitHub",
        "link": "https://github.com/umwics",
        "username": "@umwics",
    },
];