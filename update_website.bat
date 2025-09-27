@echo off
echo ==============================
echo 開始更新 GitHub 專案與 GitHub Pages
echo ==============================

REM 加入所有修改、新增、刪除檔案
git add .

REM 建立 commit
git commit -m "更新壓縮圖片與 gitattributes"

REM 推送到 GitHub
git push origin main

echo ==============================
echo 更新完成，請等待 GitHub Pages 自動部署
echo 網址: https://crystal250226.github.io/myPortolio/
echo ==============================

pause
