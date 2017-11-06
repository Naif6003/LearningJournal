@echo off
title Zookeeper and Kafka Server Start
echo starting Zookeeper...
start call bin/windows/zookeeper-server-start.bat etc/kafka/zookeeper.properties
TIMEOUT 1
echo starting Kafka...
start call bin/windows/kafka-server-start.bat etc/kafka/server.properties
TIMEOUT 1
echo starting Schema Registry...
start call bin/windows/schema-registry-start.bat etc/schema-registry/schema-registry.properties
TIMEOUT 1

echo DONE
pause