@echo off
REM Windows Batch Converter for Learning Hub
REM Usage: convert-all.bat <markdown_folder>

echo ╔════════════════════════════════════════════╗
echo ║  Learning Hub Markdown Converter           ║
echo ║  Windows Version                           ║
echo ╚════════════════════════════════════════════╝
echo.

if "%~1"=="" (
    echo Usage: convert-all.bat ^<markdown_folder^>
    echo Example: convert-all.bat md2
    echo.
    echo This will convert all .md files in the specified folder
    echo and create interactive HTML pages.
    pause
    exit /b 1
)

set MARKDOWN_DIR=%~1
set SCRIPT_DIR=%~dp0
set OUTPUT_DIR=%SCRIPT_DIR%..

echo Markdown Directory: %MARKDOWN_DIR%
echo Output Directory: %OUTPUT_DIR%
echo.

python "%SCRIPT_DIR%batch-converter.py" "%MARKDOWN_DIR%" "%OUTPUT_DIR%"

if %ERRORLEVEL% EQU 0 (
    echo.
    echo ═══════════════════════════════════════════
    echo ✅ Conversion completed successfully!
    echo ═══════════════════════════════════════════
    echo.
    echo Next steps:
    echo 1. Open ..\index.html
    echo 2. Update the cards for your new pages
    echo 3. Change "coming-soon" to "available"
    echo.
) else (
    echo.
    echo ❌ Conversion failed with error code %ERRORLEVEL%
    echo.
)

pause
