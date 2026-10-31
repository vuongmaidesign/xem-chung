@echo off
title CineParty - Virtual Cinema
echo ========================================================
echo       CINEPARTY - RAP CHIEU PHIM AO & NGHE NHAC CHUNG
echo ========================================================
echo.
echo Dang khoi dong may chu tai http://localhost:4000 ...
echo Mo trinh duyet va truy cap: http://localhost:4000
echo Nhan Ctrl + C de dung may chu.
echo.
set PATH=C:\Program Files\nodejs;%PATH%
node server/src/index.js
pause
