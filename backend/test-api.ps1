Write-Host "`n🚀 Starting Farm2Table API tests...`n" -ForegroundColor Green

# ✅ Base API URL
$baseUrl = "http://localhost:5000/api"

# -----------------------------
# 1. Root Endpoint
# -----------------------------
Write-Host "`nGET / (root)`n" -ForegroundColor Cyan
Invoke-RestMethod -Uri "http://localhost:5000/" -Method Get

# -----------------------------
# 2. USERS Endpoint
# -----------------------------
Write-Host "`nGET /users`n" -ForegroundColor Cyan
try {
    $users = Invoke-RestMethod -Uri "$baseUrl/users" -Method Get
    $users | Format-Table -AutoSize
} catch {
    Write-Host "❌ Error fetching users: $($_.Exception.Message)" -ForegroundColor Red
}

# -----------------------------
# 3. LISTINGS Endpoint
# -----------------------------
Write-Host "`nGET /listings`n" -ForegroundColor Cyan
try {
    $listings = Invoke-RestMethod -Uri "$baseUrl/listings" -Method Get
    $listings | ForEach-Object {
        [PSCustomObject]@{
            Id        = $_._id
            Title     = $_.title
            Category  = $_.category
            Price     = $_.price
            Quantity  = $_.quantity
            Seller    = $_.seller
            CreatedAt = $_.createdAt
        }
    } | Format-Table -AutoSize
} catch {
    Write-Host "❌ Error fetching listings: $($_.Exception.Message)" -ForegroundColor Red
}

# -----------------------------
# 4. AUTH Endpoint (Register/Login)
# -----------------------------
Write-Host "`nPOST /auth/register`n" -ForegroundColor Cyan
try {
    $registerBody = @{
        name     = "Test User"
        email    = "testuser@example.com"
        password = "password123"
    }

    $newUser = Invoke-RestMethod -Uri "$baseUrl/auth/register" -Method Post -Body ($registerBody | ConvertTo-Json) -ContentType "application/json"
    $newUser | Format-List
} catch {
    Write-Host "⚠️ User may already exist: $($_.Exception.Message)" -ForegroundColor Yellow
}

Write-Host "`nPOST /auth/login`n" -ForegroundColor Cyan
try {
    $loginBody = @{
        email    = "testuser@example.com"
        password = "password123"
    }

    $loginResponse = Invoke-RestMethod -Uri "$baseUrl/auth/login" -Method Post -Body ($loginBody | ConvertTo-Json) -ContentType "application/json"
    $loginResponse | Format-List
} catch {
    Write-Host "❌ Login failed: $($_.Exception.Message)" -ForegroundColor Red
}

Write-Host "`n✅ Farm2Table API tests complete!`n" -ForegroundColor Green
