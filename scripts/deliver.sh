set +x
echo "executing page"
node main.js &
sleep 1
echo $! > .pidfile
set -x