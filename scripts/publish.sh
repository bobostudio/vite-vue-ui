#!/usr/bin/env bash
npm config get registry
npm config set registry=https://registry.npmjs.org
echo '登录 npmjs '
npm login
echo '----------发布--------'
npm pubilsh
echo "发布完成"
