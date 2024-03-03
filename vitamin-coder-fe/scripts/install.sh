# install.sh

#!/bin/bash

# Use Node.js 11
nvm install 20.11.1
nvm use 20.11.1

# Install dependencies
npm ci
