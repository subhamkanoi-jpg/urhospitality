$htmlContent = Get-Content index.html -Raw
$htmlContent = $htmlContent -replace 'slate-', 'stone-'
$htmlContent = $htmlContent -replace 'blue-', 'orange-'
$htmlContent = $htmlContent -replace 'indigo-', 'amber-'
$htmlContent = $htmlContent -replace '#0A2540', '#4A3B31'
$htmlContent = $htmlContent -replace '#1E3A8A', '#795548'
$htmlContent = $htmlContent -replace '#1E40AF', '#8D6E63'
Set-Content -Path index.html -Value $htmlContent

$cssContent = Get-Content css\style.css -Raw
$cssContent = $cssContent -replace '#0A2540', '#4A3B31'
$cssContent = $cssContent -replace '#1E3A8A', '#795548'
$cssContent = $cssContent -replace '#1E40AF', '#8D6E63'
Set-Content -Path css\style.css -Value $cssContent

$jsContent = Get-Content js\main.js -Raw
$jsContent = $jsContent -replace '#0A2540', '#4A3B31'
$jsContent = $jsContent -replace '#1E3A8A', '#795548'
$jsContent = $jsContent -replace '#1E40AF', '#8D6E63'
Set-Content -Path js\main.js -Value $jsContent

Write-Host "Replacement completed."
