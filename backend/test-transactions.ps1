Write-Host "`n🚀 Starting Transactions API tests...`n" -ForegroundColor Green

# ✅ Base API URL
$baseUrl = "http://localhost:5000/api"

# -----------------------------
# 1. CREATE Transaction (POST)
# -----------------------------
Write-Host "`nPOST /transactions`n" -ForegroundColor Cyan

$newTransaction = @{
    buyerId    = "615f8b5c9a1e8e3c245f1234"   # sample ObjectId
    listingId  = "68dffccb0221057412407bd2"   # sample ObjectId
    quantity   = 2
    totalPrice = 100
}

$created = Invoke-RestMethod -Uri "$baseUrl/transactions" -Method Post -Body ($newTransaction | ConvertTo-Json) -ContentType "application/json"
$created | Format-List

# -----------------------------
# 2. GET All Transactions
# -----------------------------
Write-Host "`nGET /transactions`n" -ForegroundColor Cyan

$all = Invoke-RestMethod -Uri "$baseUrl/transactions" -Method Get

$all | ForEach-Object {
    [PSCustomObject]@{
        Id         = $_._id
        BuyerId    = $_.buyerId
        ListingId  = $_.listingId._id
        Title      = $_.listingId.title
        Quantity   = $_.quantity
        TotalPrice = $_.totalPrice
        Status     = $_.status
        CreatedAt  = $_.createdAt
    }
} | Format-Table -AutoSize

# -----------------------------
# 3. GET Single Transaction
# -----------------------------
Write-Host "`nGET /transactions/:id`n" -ForegroundColor Cyan

$single = Invoke-RestMethod -Uri "$baseUrl/transactions/$($created._id)" -Method Get
$single | Format-List

# -----------------------------
# 4. UPDATE Transaction (PUT)
# -----------------------------
Write-Host "`nPUT /transactions/:id`n" -ForegroundColor Cyan

$updateBody = @{
    quantity   = 3
    totalPrice = 150
}

$updated = Invoke-RestMethod -Uri "$baseUrl/transactions/$($created._id)" -Method Put -Body ($updateBody | ConvertTo-Json) -ContentType "application/json"
$updated | Format-List

# -----------------------------
# 5. DELETE Transaction
# -----------------------------
Write-Host "`nDELETE /transactions/:id`n" -ForegroundColor Cyan

$deleted = Invoke-RestMethod -Uri "$baseUrl/transactions/$($created._id)" -Method Delete
$deleted | Format-List

Write-Host "`n✅ Transactions API tests complete!`n" -ForegroundColor Green
