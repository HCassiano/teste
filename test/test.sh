set +x
echo 'running tests'
node --version
#npm install --save-dev cross-env
npm test
set -x