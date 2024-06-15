# CALCULATOR

# Description
This is a simple calculator project built with TypeScript, HTML, and CSS. The calculator supports basic arithmetic operations and can handle keyboard inputs and mouse clicks. It also has additional functionalities such as toggling the sign "-" of numbers and clearing the screen content using the calculator buttons or keyboard "Esc '' or "Backspace" physical keys.


# Content Table
- [Description](#description)
- [Requirements](#requirements)
- [Prerequisites](#pre-requisites)
- [Installed versions and verifications](#installed-versions-and-verifications)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [File Descriptions](#detailed-file-descriptions)


# Requirements
- The calculator only accepts numbers between -9999.99 and 9999.99.
- Internal calculations should truncate extra digits after the second decimal digit.
- Internal calculations should throw an error when the calculated number is out of range, and display it on the screen.
- The sign can be changed at any time when a number is entered.
- The display can be cleared at any time.
- Consecutive calculations are allowed before clearing the display.


# Pre-Requisites
Make sure you have the following software installed before proceeding:

- [Visual Studio Code](https://code.visualstudio.com/Download)
- [Node.js and npm](https://nodejs.org/en/download/package-manager):
    1. Install nvm (Node Version Manager):
    ```bash
     curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
    ```

    2. Install Node.js (you may need to restart the terminal):
    ```bash
     nvm install 20
    ```
    
- [Typescript](https://www.typescriptlang.org/download/):
    ```bash
     npm install -g -ts-node typescript
    ```

- [Live-server](https://www.npmjs.com/package/live-server) for serving the project locally:
    ```bash
     npm install -g live-server
    ```

- [Git](https://www.git-scm.com/downloads):
    1. Install Homebrew:
    ```bash
     /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
    ```

    2. Install Git:
    ```bash
     brew install git
    ```

- [Mathjs dependency](https://mathjs.org/download.html) (optional):
    ```bash
     npm install mathjs
    ```


# Installed versions and verifications
You can view the versions of dependencies and packages used in this project and verify that yours are up-to-date using the following commands:

- Used nodejs version: 20.14.0
    ```bash
    Command to check nodejs version:
    node -v
    ```

- Used npm version: 10.7.0
    ```bash
    Command to check npm version:
    npm -v
    ```

- Used typeScript version: 5.4.5
    ```bash
    Command to check typescript version:
    tsc -v
    ```

- Used live-server version: 1.2.2
    ```bash
    Command to check live-server version:
    live-server --version
    ```

- Used live-server version: 13.0.0
    ```bash
    Command to check mathjs version:
    npm list mathjs
    ```

- Used git version: 2.45.2
    ```bash
    Command to check git version:
    git -v
    ```

# Usage
- Clon the project from git:
    ```git
    git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY
    ```

- Navigate to the project directory and install the dependencies:
    ```bash
    cd calculator
    ```

- Script for building the porject on the live server.
    ```bash
    npm run build
    ```

- Script for building and running the porject on the live server.
    ```bash
    npm run start
    ```

- Script for running the project in the terminal without a js file compilation.
    ```bash
    npm run start-terminal
    ```


# Project Structure
```vsc
calculator/
│
├── dist/                  # Compiled TypeScript files
│   └── calculator.js
│
├── src/                   # Source files
│   └── calculator.ts      # TypeScript code for the calculator
│
├── styles/                # CSS stylesheets
│   └── styles.css
│
├── index.html             # HTML file for the calculator UI
│
├── package.json           # Project configuration and dependencies
│
└── tsconfig.json          # TypeScript configuration file
```

### Detailed File Descriptions
- dist/calculator.js: The compiled JavaScript file generated from the TypeScript source code. This is what the browser executes.
- node_modules/: This directory contains all the installed npm packages and dependencies required for the project.
- src/calculator.ts: The main TypeScript file that includes the logic for handling calculator operations, input validation, and event handling.
- styles/styles.css: The CSS file responsible for styling the calculator interface, including layout and button styles.
- .gitignore: A file specifying which files and directories should be ignored by Git, such as node_modules and compiled files.
- index.html: The HTML file that defines the structure of the calculator, including input fields and buttons.
- package.json: The npm configuration file that lists the project dependencies, scripts, and other metadata.
- tsconfig.json: The configuration file for the TypeScript compiler, defining options such as target ECMAScript version, module system, and directory paths.
- README.md: This documentation file providing an overview of the project, installation instructions, usage details, and file descriptions.
