cd dist/
ls
git init
git remote add live ssh://root@rodrigosoria.me/var/repo/cards.git
git add *
git commit -am "live"
git push live master --force