ng build @ajsf/core --prod
ng build @ajsf/material --prod

VERSION=0.1.6

pushd dist/@ajsf/core > /dev/null
sed -i.bak -e 's#@ajsf/core#@cfstratos/ajsf-core#g' package.json
sed -i.bak -e 's#0.0.0#'"$VERSION"'#g' package.json
rm -f package.json.bak
npm link
popd

pushd dist/@ajsf/material . /dev/null
sed -i.bak -e 's#@ajsf/material#@cfstratos/ajsf-material#g' package.json
sed -i.bak -e 's#@ajsf/core#@cfstratos/ajsf-core#g' package.json
sed -i.bak -e 's#0.0.0#'"$VERSION"'#g' package.json

find . -type f  | xargs sed -i.bak -e  's#@ajsf/core#@cfstratos/ajsf-core#g'
find . -type f -name ' *.bak' -delete

rm -f package.json.bak
npm link @cfstratos/ajsf-core
npm link
popd
