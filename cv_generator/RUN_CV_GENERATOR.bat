@echo off
REM Raphael Leveque — CV generator launcher
REM Runs generate_cv_complete.py from the cv_generator/ subfolder.
REM Output: Raphael_Leveque_CV.docx in the repo root (one level up).

REM Always run from the folder containing this batch file
cd /d "%~dp0"

echo Generating CV document...
echo.

REM Auto-install python-docx if missing
python -c "import docx" >nul 2>&1
if %errorlevel% neq 0 (
    echo python-docx not found. Installing...
    pip install python-docx
)

REM Run the Python script
python generate_cv_complete.py

if %errorlevel% equ 0 (
    echo.
    echo SUCCESS: CV generated successfully!
    echo File saved as: Raphael_Leveque_CV.docx
    echo.
) else (
    echo.
    echo ERROR: Failed to generate CV
    echo.
)

pause
