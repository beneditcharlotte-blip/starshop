$lines = Get-Content "src/components/ProductList.tsx"
$result = [System.Collections.Generic.List[string]]::new()
$prev = ""
foreach ($line in $lines) {
    $trimmed = $line.TrimStart()
    if ($trimmed -match "^compareAtPrice:" -and $prev.TrimStart() -match "^compareAtPrice:") {
        continue
    }
    $result.Add($line)
    $prev = $line
}
[System.IO.File]::WriteAllLines("$PWD\src\components\ProductList.tsx", $result, [System.Text.UTF8Encoding]::new($false))
Write-Host "Done: $($result.Count) lines"
