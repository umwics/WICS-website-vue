# wics-website-vue

This is the repository for the website of Women in Computer Science (WICS) at the University of Manitoba. WICS is a student group supporting women and gender minorities in Computer Science. Our aim is to make computer science less intimidating and create a safe space for women and gender minorities to connect. This website is being built using Vue 3 Composition API and tested using Vitest. 

## Recommended Setup

IDE: 
- [VSCode](https://code.visualstudio.com/)
- [Vue - Official](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).
- [GitLens](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens)
- [Path Intellisense](https://marketplace.visualstudio.com/items?itemName=christian-kohler.path-intellisense)

Browser: 
- [Vue.js devtools](https://chromewebstore.google.com/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd?hl=en)

## Project Setup

Ensure that you're in the wics-website-vue folder.
```sh
cd wics-website-vue
```

### Installation
Download [Node.js](https://nodejs.org/en), then do the following command. This will install all dependencies needed to develop and run the website.

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

## Development Process
1. Verify that you're in the main branch.
    ```sh
    git branch
    ```
2. Make sure your main branch is up to date by doing the following command.
    ```sh 
    git pull
    ```
3. Create a branch off of the main branch with the issue number as the prefix, followed by the title or summary of the issue. Then checkout that branch.
    ```sh
    git checkout -b 2-create-navbar
    ```
4. If you created new files, add them through the following command.
    ```sh
    git add --all
    ```
5. Save your changes.
    ```sh
    git commit -m "Create navigation bar."
    ```
6. Once the issue is done and you're ready to have your code reviewed, do the following commands so other people can see your code.
    ```sh
    # if pushing for the first time:
    git push --set-upstream origin <branch-name>

    # otherwise do:
    git push 
    ```
7. Create a pull request on GitHub. 
    - Go to Pull Requests tab, New Pull Request. 
    - Keep the `base:main`, change the `compare:<branchName>` to your branch. 
    - Review your changes and create the pull request.
    - Add "closes #2" (#2 being the issue number) in the description so it automatically closes the issue once the pull request has been merged.
8. Wait for approval, fix merge conflicts if necessary, then merge.


## Project Structure
- `public`: for static assets that don't need to be optimized or imported
- `src`
  - `assets`: contains files with css variables, .js arrays of objects for data, and images
    - `data`: contains files that have texts about the website and images
    - `base.css`: contains font, brand colors, css property colors, and their naming convention.
  - `components`: contains reusable components
  - `router`: contains the routes to the pages of the website
  - `views`: contains the pages of the website

## Updating information

Most of the texts on the website are stored in `src/assets/data/` as arrays of objects in a .js file. If the texts need to be shown with images, the images would be imported in that same .js file, and would then be exported to be used by the pages that need them.

### Team
When you want to modify team members (e.g. executives, appointed positions, and website committee), go to `src/assets/data/team` and modify the objects in the array as needed.

There are 5 different files:
- `admin`: President, Vice President, Secretary, Treasurer
- `events`: Events Coordinator, Assistant Events Coordinator
- `outreach`: Outreach Coordinator, Assistant Outreach Coordinator
- `socialMedia`: Social Media Coordinator, Assistant Social Media Coordinator
- `websiteCommittee`: Website Committee Coordinator, everyone in the Website Team

There are 3 member types:
- `Executive`: for everyone in admin and all coordinators except Assistant positions and the Website Committee Coordinator 
- `Appointed`: for everyone that has Assistant positions and the Website Committee Coordinator
- `Contributor`: for everyone else in the website team

### Events, Outreach, Lounge, Contact Us
When you want to modify or add new information on events, outreach, lounge, and/or contact us, go to their corresponding folder in `src/assets/data/`


