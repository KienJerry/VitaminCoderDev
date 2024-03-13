# install.sh

#!/bin/bash

# Use Node.js 11
nvm install 18.17.0
nvm use 18.17.0

# Install dependencies
npm ci
