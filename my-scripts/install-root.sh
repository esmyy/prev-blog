#!/bin/zsh

current_dir=$(cd "$(dirname "$0")" || exit;pwd)
BLOG_ROOT=$(cd "$(dirname "$current_dir")" || exit;pwd)
echo "export BLOG_ROOT=$BLOG_ROOT" >> ~/.zshrc
source ~/.zshrc