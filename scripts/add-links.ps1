$path = "D:\wood-pizza\content\blog"

function ReplaceFirst($file, $search, $replace) {
    $content = Get-Content -Path $file -Raw
    $idx = $content.IndexOf($search)
    if ($idx -ge 0) {
        $content = $content.Substring(0, $idx) + $replace + $content.Substring($idx + $search.Length)
        Set-Content -Path $file -Value $content
    }
}

# 1. charcoal -> link to hot
ReplaceFirst "$path\can-you-use-charcoal-in-a-wood-fired-pizza-oven.md" "burn very hot. Keep an infrared thermometer handy" "burn very hot. (Curious about exact numbers? See [how hot wood fired pizza ovens get](/blog/how-hot-do-wood-fired-pizza-ovens-get)). Keep an infrared thermometer handy"

# 2. how it works -> link to how long
ReplaceFirst "$path\how-does-a-wood-fired-pizza-oven-work.md" "At these extreme temperatures, a pizza cooks in **60 to 90 seconds**." "At these extreme temperatures, a pizza cooks in **60 to 90 seconds** (check out our guide on [how long a wood fired pizza takes to cook](/blog/how-long-does-a-wood-fired-pizza-take-to-cook) for different styles)."

# 3. how hot -> link to charcoal
ReplaceFirst "$path\how-hot-do-wood-fired-pizza-ovens-get.md" "A well-built, properly heated wood fired pizza oven reaches" "A well-built, properly heated wood fired pizza oven (especially when using the right wood, or a [mix of wood and charcoal](/blog/can-you-use-charcoal-in-a-wood-fired-pizza-oven)) reaches"

# 4. how long -> link to what can you cook
ReplaceFirst "$path\how-long-does-a-wood-fired-pizza-take-to-cook.md" "Other styles and situations take longer." "Other styles and situations take longer. And if you're making something besides pizza, check out [what else you can cook in a wood fired oven](/blog/what-can-you-cook-in-a-wood-fired-pizza-oven)."

# 5. build -> link to how it works
ReplaceFirst "$path\how-to-build-a-backyard-wood-fired-pizza-oven.md" "The dome shape is more efficient at reflecting heat and creates better airflow." "The dome shape is more efficient at reflecting heat and creates better airflow (read more about [how a wood fired pizza oven works](/blog/how-does-a-wood-fired-pizza-oven-work))."

# 6. what can you cook -> link to vs gas
ReplaceFirst "$path\what-can-you-cook-in-a-wood-fired-pizza-oven.md" "this is one of the most versatile cooking tools you can own." "this is one of the most versatile cooking tools you can own — one major reason why many prefer it when comparing [wood fired vs gas or electric ovens](/blog/wood-fired-vs-gas-or-electric)."

# 7. vs gas -> link to build
ReplaceFirst "$path\wood-fired-vs-gas-or-electric.md" "Some people love the ritual of it — building the fire" "Some people love the ritual of it — whether that's [building your own backyard oven](/blog/how-to-build-a-backyard-wood-fired-pizza-oven) or just building the fire"

