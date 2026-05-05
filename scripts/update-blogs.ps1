$path = "D:\wood-pizza\content\blog"
$files = Get-ChildItem -Path $path -Filter *.md

foreach ($f in $files) {
    $content = Get-Content -Path $f.FullName -Raw
    $content = $content -replace 'date: "2025-', 'date: "2026-'
    
    if ($f.Name -eq "can-you-use-charcoal-in-a-wood-fired-pizza-oven.md") {
        $content = $content -replace "## The Problem with Charcoal Alone", "![Charcoal in a wood fired oven](/images/new/gas-wood-oven.webp)`n`n## The Problem with Charcoal Alone"
    }
    elseif ($f.Name -eq "how-does-a-wood-fired-pizza-oven-work.md") {
        $content = $content -replace "## The Three Types of Heat", "![Wood fired oven interior](/images/new/forno-a-legna.webp)`n`n## The Three Types of Heat"
    }
    elseif ($f.Name -eq "what-can-you-cook-in-a-wood-fired-pizza-oven.md") {
        $content = $content -replace "## Bread and Flatbreads", "![Pizza cooking in a wood fired oven](/images/new/pizza-in-oven.webp)`n`n## Bread and Flatbreads"
    }
    elseif ($f.Name -eq "wood-fired-vs-gas-or-electric.md") {
        $content = $content -replace "## Convenience and Ease of Use", "![Large wood fired pizza oven](/images/new/large-oven.webp)`n`n## Convenience and Ease of Use"
    }
    elseif ($f.Name -eq "how-to-build-a-backyard-wood-fired-pizza-oven.md") {
        $content = $content -replace "## Step 4: Build the Dome", "![Outdoor wood fired oven](/images/new/outdoor-green.webp)`n`n## Step 4: Build the Dome"
    }
    elseif ($f.Name -eq "how-hot-do-wood-fired-pizza-ovens-get.md") {
        $content = $content -replace 'coverImage: "/images/wood-oven-works.png"', 'coverImage: "/images/new/pizzone-oven.webp"'
        $content = $content -replace "## How to Measure Your Oven Temperature", "![Wood oven works](/images/wood-oven-works.png)`n`n## How to Measure Your Oven Temperature"
    }
    elseif ($f.Name -eq "how-long-does-a-wood-fired-pizza-take-to-cook.md") {
        $content = $content -replace 'coverImage: "/images/charcoal-oven.png"', 'coverImage: "/images/new/portable-oven.webp"'
        $content = $content -replace "## The Step-by-Step Timing", "![Charcoal oven](/images/charcoal-oven.png)`n`n## The Step-by-Step Timing"
    }
    
    Set-Content -Path $f.FullName -Value $content
}
