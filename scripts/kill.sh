set +x
echo "killing page"
kill $(cat .pidfile)
set -x