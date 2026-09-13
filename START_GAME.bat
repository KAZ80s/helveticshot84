@echo off
setlocal
title HELVETICSHOT 84 v0.5.1
cd /d "%~dp0"
echo.
echo ==========================================
echo   HELVETICSHOT 84 v0.5.1
echo ==========================================
echo.
echo Lokaler Webserver startet auf Port 8000.
echo Dieses Fenster offen lassen, solange du spielst.
echo.
set "PSFILE=%TEMP%\retro_invaders_server_%RANDOM%.ps1"
> "%PSFILE%" echo $root=(Get-Location).Path
>>"%PSFILE%" echo $h=New-Object System.Net.HttpListener
>>"%PSFILE%" echo $h.Prefixes.Add('http://localhost:8000/')
>>"%PSFILE%" echo $h.Start()
>>"%PSFILE%" echo Start-Process 'http://localhost:8000/'
>>"%PSFILE%" echo $m=@{'.html'='text/html; charset=utf-8';'.js'='text/javascript; charset=utf-8';'.css'='text/css; charset=utf-8';'.json'='application/json; charset=utf-8';'.png'='image/png';'.jpg'='image/jpeg';'.svg'='image/svg+xml';'.wav'='audio/wav';'.mp3'='audio/mpeg';'.txt'='text/plain; charset=utf-8'}
>>"%PSFILE%" echo try { while($h.IsListening) {
>>"%PSFILE%" echo $c=$h.GetContext(); $r=[Uri]::UnescapeDataString($c.Request.Url.AbsolutePath.TrimStart('/')); if(!$r){$r='index.html'}
>>"%PSFILE%" echo $f=[IO.Path]::GetFullPath((Join-Path $root $r)); if(!$f.StartsWith($root,[StringComparison]::OrdinalIgnoreCase)){$c.Response.StatusCode=403;$c.Response.Close();continue}
>>"%PSFILE%" echo if(Test-Path $f -PathType Container){$f=Join-Path $f 'index.html'}
>>"%PSFILE%" echo if(Test-Path $f -PathType Leaf){$b=[IO.File]::ReadAllBytes($f);$e=[IO.Path]::GetExtension($f).ToLower();if($m.ContainsKey($e)){$c.Response.ContentType=$m[$e]};$c.Response.ContentLength64=$b.Length;$c.Response.OutputStream.Write($b,0,$b.Length)}else{$c.Response.StatusCode=404}
>>"%PSFILE%" echo $c.Response.OutputStream.Close() }} finally {$h.Stop();$h.Close()}
powershell.exe -NoProfile -ExecutionPolicy Bypass -File "%PSFILE%"
del "%PSFILE%" >nul 2>&1
endlocal
