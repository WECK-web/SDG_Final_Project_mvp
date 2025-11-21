Write-Host "🚀 Running API Tests for Farm2Table Backend..." -ForegroundColor Cyan

$baseUrl = "http://localhost:5000/api"

# Test endpoints
$endpoints = @(
    "/users",
    "/listings",
    "/transactions"
)

foreach ($endpoint in $endpoints) {
    Write-Host "`nGET $endpoint" -ForegroundColor Yellow
    try {
        $response = Invoke-RestMethod -Uri "$baseUrl$endpoint" -Method Get
        Write-Host "✅ Success:" -ForegroundColor Green
        $response | ConvertTo-Json -Depth 3
    } catch {
        Write-Host "❌ Failed to fetch $endpoint" -ForegroundColor Red
    }
}
