#!/bin/zsh

current_dir=$(cd "$(dirname "$0")" || exit;pwd)
BLOG_ROOT=$(cd "$(dirname "$current_dir")" || exit;pwd)
echo "export BLOG_ROOT=$BLOG_ROOT" >> ~/.zshrc
echo "alias wo=ts-node --esm $current_dir/beauty.ts" >> ~/.zshrc
source ~/.zshrc