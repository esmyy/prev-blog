#!/bin/bash

scp -r public/ .imghost
rm .imghost/**/*.html

scp -r .imghost/images ../imghost
scp -r .imghost/2022 ../imghost

cd ../imghost
git add .
git commit -m "feat: update imgs"
git push
cd ../esmyy.com
