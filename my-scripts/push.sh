#!/bin/bash

git add .
echo "$1"
git commit -m "$1"
git pull -r
git push