
@echo oFF

DIR=%cd%

cd "%~dp0..\client"
START npm start

cd "%~dp0..\server"
START npm start

cd %DIR%
