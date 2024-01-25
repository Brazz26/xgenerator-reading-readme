// TODO: Function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'None') {
    return `![license](https://img.shields.io/badge/license-${license}-red.svg)`
  }
  return '';
}

// TODO: Function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'None') {
    return ` * [license](#license)`
  }
  return '';
}

// TODO: Function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'None') {
    return `## License Section 
  The license chosen for this project is ${license}
  `
  }
  return '';
}

// TODO: Function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
  ## Table of Contents
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Credits](#credits)
  ${renderLicenseLink(data.license)}
  
   

## Description
${data.description}

## Installation
${data.installation}

## Usage
${data.usage}

## Credits
${data.credits}

  ${renderLicenseSection(data.license)};
`;
}

module.exports = generateMarkdown;
