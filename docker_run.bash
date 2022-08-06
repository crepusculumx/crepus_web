#!/bin/bash

SCRIPT_ACTION=$1
shift

readonly CONTAINER_NAME=crepus-web

readonly IMAGE_NAME=crepus-web
readonly IMAGE_TAG=v1

# 容器编号
CONTAINER_ID=$(docker ps -aqf name="${CONTAINER_NAME}")

function container_action_start() {
  local CONTAINER_ID=$1
  shift
  docker start "${CONTAINER_ID}"
}

function container_action_stop() {
  local CONTAINER_ID=$1
  shift
  docker stop "${CONTAINER_ID}"
}

function container_action_run_bash() {
  local CONTAINER_ID=$1
  shift
  docker exec -it "${CONTAINER_ID}" /bin/bash
}

# 如果没有容器，创建个新的
if [ -z "${CONTAINER_ID}" ]; then

  # 如果没有镜像
  IMAGE_ID=$(docker images -q "${IMAGE_NAME}:${IMAGE_TAG}")
  if [ -z "${IMAGE_ID}" ]; then
    docker build -t "${IMAGE_NAME}:${IMAGE_TAG}" -f dev.dockerfile .
  fi

  docker run \
    -itd \
    --net="host" \
    --name="${CONTAINER_NAME}" \
    --user="$(id -u):$(id -g)" \
    --volume="${PWD}:/code/${CONTAINER_NAME}" \
    "${IMAGE_NAME}:${IMAGE_TAG}" /bin/bash

  # 建好了先关闭，之后统一管理
  CONTAINER_ID=$(docker ps -qf "name=${CONTAINER_NAME}")
  container_action_stop "${CONTAINER_ID}"
fi

# 确定目前容器状态
CONTAINER_RUN_ID=$(docker ps -qf "name=${CONTAINER_NAME}")
CUR_STATE=

if [ -z "${CONTAINER_RUN_ID}" ]; then
  CUR_STATE=stop
else
  CUR_STATE=run
fi

# 默认为start
if [ -z "${SCRIPT_ACTION}" ]; then
  SCRIPT_ACTION=start
fi

# 根据SCRIPT_ACTION启动或关闭
case ${SCRIPT_ACTION} in
start)
  if [ $CUR_STATE == stop ]; then
    container_action_start "${CONTAINER_ID}"
  fi
  container_action_run_bash "${CONTAINER_ID}"
  ;;
stop)
  if [ $CUR_STATE == run ]; then
    container_action_stop "${CONTAINER_ID}"
  fi
  ;;
*)
  echo invalid action: "${SCRIPT_ACTION}" 1>&2
  exit 1
  ;;
esac
