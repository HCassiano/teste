set +x
echo 'running tests'
npm list
node --version
#npm install --save-dev cross-env
npm test
set -x