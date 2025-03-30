#!/bin/bash

# Create public directory
mkdir -p /Users/doug/Desktop/bawra-responsive-modern/public

# Copy images from old project to new project
cp -r /Users/doug/Desktop/bawra-responsive/images /Users/doug/Desktop/bawra-responsive-modern/public/

# Copy results from old project to new project
mkdir -p /Users/doug/Desktop/bawra-responsive-modern/public/results
cp -r /Users/doug/Desktop/bawra-responsive/results/* /Users/doug/Desktop/bawra-responsive-modern/public/results/

echo "Assets copied successfully."