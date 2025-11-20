#!/usr/bin/env pwsh
# Quick deployment script for MeetConnect

Write-Host "🚀 MeetConnect Deployment Helper" -ForegroundColor Cyan
Write-Host ""

$choice = Read-Host "Choose deployment target:
1) Vercel (Web App) - Recommended for PoC
2) Railway (Backend + DB) - Recommended for PoC
3) Expo EAS (Mobile) - For app stores
4) Azure (Full Stack) - For production
5) Docker (Local testing)

Enter choice (1-5)"

switch ($choice) {
    "1" {
        Write-Host "📦 Deploying Web App to Vercel..." -ForegroundColor Green
        Set-Location web
        npm run build
        npx vercel --prod
        Set-Location ..
    }
    "2" {
        Write-Host "🚂 Setting up Railway..." -ForegroundColor Green
        Write-Host "Go to: https://railway.app/new" -ForegroundColor Yellow
        Write-Host "1. Click 'Deploy from GitHub'" -ForegroundColor White
        Write-Host "2. Select this repository" -ForegroundColor White
        Write-Host "3. Railway will auto-deploy backend + PostgreSQL + Redis" -ForegroundColor White
        Start-Process "https://railway.app/new"
    }
    "3" {
        Write-Host "📱 Building Mobile App with Expo EAS..." -ForegroundColor Green
        Set-Location mobile
        npx eas build --platform all
        Set-Location ..
    }
    "4" {
        Write-Host "☁️ Deploying to Azure..." -ForegroundColor Green
        Write-Host "Installing Azure CLI if needed..." -ForegroundColor Yellow
        
        # Check if az is installed
        if (!(Get-Command az -ErrorAction SilentlyContinue)) {
            Write-Host "Azure CLI not found. Install it? (y/n)" -ForegroundColor Yellow
            $install = Read-Host
            if ($install -eq "y") {
                winget install Microsoft.AzureCLI
            }
        }
        
        az login
        az containerapp up --name meetconnect-api --source ./backend --ingress external --target-port 3000
        az staticwebapp create --name meetconnect-web --source ./web
    }
    "5" {
        Write-Host "🐳 Starting Docker containers..." -ForegroundColor Green
        docker-compose up -d
        Write-Host "✅ Services running:" -ForegroundColor Green
        Write-Host "   Web:     http://localhost:5173" -ForegroundColor White
        Write-Host "   Backend: http://localhost:3000" -ForegroundColor White
        Write-Host "   DB:      localhost:5432" -ForegroundColor White
        Write-Host "   Redis:   localhost:6379" -ForegroundColor White
    }
    default {
        Write-Host "Invalid choice" -ForegroundColor Red
    }
}

Write-Host ""
Write-Host "✨ Done! Check the output above for URLs and next steps." -ForegroundColor Cyan
