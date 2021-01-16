#!/bin/bash

# ------------------------------------------------------------------------
# Usage:
# sh release.sh --env asf
# sh release.sh --env echartsjs
# sh release.sh --env dev # the same as "debug"
# sh release.sh --onlynext # only build next
# # Check `./config` to see the available env
# ------------------------------------------------------------------------

while [[ $# -gt 0 ]]; do
    case "$1" in
        --env) envType="$2"; shift; shift ;;
        --env=*) envType="${1#*=}"; shift ;;
        --onlynext) onlyNext="YES"; shift ;;
        *) shift ;;
    esac
done
if [[ ! -n "${envType}" ]]; then
    echo "--env must be specified."
    exit 1;
fi

echo "Building with env type: ${envType}"

currWorkingDir=$(pwd)
thisScriptDir=$(cd `dirname $0`; pwd)
wwwProjectDir="${thisScriptDir}/..";
docProjectDir="${wwwProjectDir}/../echarts-doc";
examplesProjectDir="${wwwProjectDir}/../echarts-examples";
themeProjectDir="${wwwProjectDir}/../ECharts-Theme-Builder";

# Next
nextDocProjectDir="${wwwProjectDir}/../incubator-echarts-doc-next";
nextExamplesProjectDir="${wwwProjectDir}/../echarts-examples-next";

cd ${wwwProjectDir}

if [[ "${envType}" = "echartsjs" ]]; then
    mkdir ${wwwProjectDir}/release
fi

# Cleanup
cd ${thisScriptDir}
node build.js --env ${envType} --clean


if [[ ! -n "${onlyNext}" ]]; then

    # Build Theme Builder
    if [ -d "${themeProjectDir}" ]; then
        echo "Build theme builder ..."
        cd ${themeProjectDir}
        npm install
        node build.js --release
    fi
    

    # Build doc
    if [ -d "${docProjectDir}" ]; then
        echo "Build doc ..."
        cd ${docProjectDir}
        npm install
        npm run build:site
        node build.js --env ${envType}
        echo "Build doc done."
    fi

    # Build examples
    if [ -d "${examplesProjectDir}" ]; then
        echo "Build examples ..."
        cd ${examplesProjectDir}
        npm install
        node build.js --env ${envType}
        echo "Build examples done."
    fi
    
    cd ${currWorkingDir}

fi


# Build doc next
if [ -d "${nextDocProjectDir}" ]; then
    echo "Build doc next ..."
    cd ${nextDocProjectDir}
    npm install
    npm run build:site
    node build.js --env ${envType}
    cd ${currWorkingDir}
    echo "Build doc next done."
fi


# Build examples next
if [ -d "${nextExamplesProjectDir}" ]; then
    echo "Build examples next..."
    cd ${nextExamplesProjectDir}
    npm install
    npm run release
    echo "Build examples next done."
fi


# Build www
echo "Build www ..."
cd ${wwwProjectDir}
npm install
node bin/build.js --env ${envType}
cd ${currWorkingDir}
echo "Build www done."


if [[ "${envType}" = "echartsjs" ]]; then
    cd ${wwwProjectDir}
    echo "zip echarts-www.zip ..."
    if [ -f echarts-www.zip ]; then
        rm echarts-www.zip
    fi
    zip -r -q echarts-www.zip release
    echo "zip echarts-www.zip done."
    cd ${currWorkingDir}
fi

echo "echarts-www release done for ${envType}"
