
@echo oFF

DIR=%cd%

cd "%~dp0..\client"
CALL npm install

cd "%~dp0..\server"
CALL npm install

cd %DIR%
