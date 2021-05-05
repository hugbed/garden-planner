
@echo OFF

SET "DIR=%cd%"

:: Install Javascript dependencies

cd "%~dp0..\client"
CALL npm install

cd "%~dp0..\server"
CALL npm install

:: Setup Docker

CALL docker-compose up -d

:: Create Database

cd %DIR%
CALL docker exec -i garden-planner_db_1 psql -U postgres -d plants < .\db\1_db.sql
