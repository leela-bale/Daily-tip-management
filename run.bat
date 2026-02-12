@echo off
cd /d "%~dp0"
set "NODE_PATHS=%ProgramFiles%\nodejs;%ProgramFiles(x86)%\nodejs;%APPDATA%\npm;%LOCALAPPDATA%\Programs\node"
set "PATH=%NODE_PATHS%;%PATH%"
npm run dev
if errorlevel 1 (
  echo.
  echo Node.js was not found. Install from https://nodejs.org/ then run this again.
  pause
)
