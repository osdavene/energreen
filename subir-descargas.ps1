# Script para subir archivos de la carpeta Descargas directamente a tu servidor AWS
param(
    [string]$PemKey = "$HOME\Downloads\llave-servigest.pem",
    [string]$Server = "ubuntu@18.191.199.104"
)

Write-Host "🚀 Sincronizando carpeta Descargas a AWS (energreen.servigest.online/descargas)..." -ForegroundColor Cyan

if (-not (Test-Path $PemKey)) {
    Write-Host "⚠️ No se encontró la llave PEM en: $PemKey" -ForegroundColor Red
    exit 1
}

# Subir archivos nuevos a /tmp
scp -i $PemKey -o StrictHostKeyChecking=no Descargas/* ${Server}:/tmp/

# Mover a la carpeta web de descargas con los permisos correctos
ssh -i $PemKey -o StrictHostKeyChecking=no $Server "sudo mkdir -p /home/energreen/htdocs/energreen.servigest.online/descargas/; sudo mv /tmp/* /home/energreen/htdocs/energreen.servigest.online/descargas/ 2>/dev/null; sudo chown -R energreen:energreen /home/energreen/htdocs/energreen.servigest.online/descargas/; sudo chmod -R 755 /home/energreen/htdocs/energreen.servigest.online/descargas/; sudo ls -lh /home/energreen/htdocs/energreen.servigest.online/descargas/"

Write-Host "✅ ¡Archivos sincronizados exitosamente a AWS!" -ForegroundColor Green
Write-Host "🌐 Accede al Centro de Descargas en: https://energreen.servigest.online/descargas/" -ForegroundColor Yellow
