// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    const badge = {
        Apache2: '![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)',
        GNUGPL3: '![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)',
        MIT: '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)',
        MozillaPublicLicense2: '![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)',
        Unlicense: '',
    }
    return badge[license]
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    const link = {
        Apache2: '(https://opensource.org/licenses/Apache-2.0)',
        GNUGPL3: '(https://www.gnu.org/licenses/gpl-3.0)',
        MIT: '(https://opensource.org/licenses/MIT)',
        MozillaPublicLicense2: '(https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)(https://opensource.org/licenses/MPL-2.0)',
        Unlicense: '',
    }
    return link[license]
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    if(license) {
        return 'Licensed under ${renderLicenseLink(license)}'
    } else {
        return ''
    }
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Table of Contents
  - [Description](#desciption)
  - [Installation](#Installation)
  - [Usage](#usage)
  - [Contribution](#contribution)
  - [Tests](#tests)
  - [License](#license)
  - [Questions](#questions)

  ## Description
  ${data.description}

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Contribution
  ${data.contribution}

  ## Tests
  ${data.tests}

  ## License
  ${renderLicenseSection(data.license)}

  ## Questions
  Can reach me at this email: ${data.email}
  GitHub username: ${data.github}
  GitHub link: ${data.link}
`;
}

module.exports = generateMarkdown;