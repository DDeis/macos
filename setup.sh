#!/bin/bash

# Install Command Line Tools
sudo rm -rf /Library/Developer/CommandLineTools
sudo xcode-select --install

# Install Homebrew
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

brew install deno

deno run https://raw.githubusercontent.com/DDeis/macos/main/scripts/main.ts?token=GHSAT0AAAAAACG2SSBFE4RVRDKBZYPIUZNMZIT5UTA