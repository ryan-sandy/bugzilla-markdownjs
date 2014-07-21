#!/bin/bash

read -p "Enter the version:" ver
verZip="./build/Markdown-"$ver".zip"
verTar="./build/Markdown-"$ver".tgz"

zip -rq $verZip Markdownjs
tar -czf $verTar Markdownjs
