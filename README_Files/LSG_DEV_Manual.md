# LSG_DEV_Manual
Dev Documentation for Devs working on the library will be kept in this file.

# How to run Storybook
Use this command

 `
 npm run storybook 
 `

# How to Publish & Update Storybook
To build out a new static story book to host on GItHub pages use the following command.

`
npm run build-storybook
`

This command will generate files within a folder called `storybook-static`. Change this folder to be titled `docs` so that GitHub will deploy the files within as static pages.

# How to Update the Icon Library

## Updating the Storybook Version

__Step 1:__ Run the following command to update storybook when there is a new release

`
npx sb upgrade
` 

__Step 2:__ Delete the existing node_modules folder and reinstall with the following command.

`
npm install
`

## Adding New Icon components to the Library

__Step 1:__ In a new branch, add the new(and descriptively named) SVG file to the following folder.

`
/src/stories/assets/individual
`

__Step 2:__ In the  `src/component` folder create a new file where you will import the new SVG and export it as a new component. Follow the existing template.

__Step 3:__ Add a story for the new SVG component(following the existing template) to test and ensure that it is functioning as intended. See other SVG component stories as reference, they should all be identical.

__Step 4:__ Add SVG component to list of Available components in the `Introduction.stories.md` file, so that is listed.

# Branch Naming Conventions
__Please make branch names as descriptive as possible__

_Please be descriptive with commits as well_

When adding or enhancing an existing component, name your branch the following:

`
feature/Icon_Name
`

When generating new builds of storybook, please use a seperate branch and name them as follows:

`
build/Build_Description
`

Branches dedicated to bug fixes should be titled:

`
fix/Bug_Description
`