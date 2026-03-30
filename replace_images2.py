with open('src/components/ProductList.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

# Moon Phase - Full Moon Ritual Set (id:14)
old_moon = "images.pexels.com/photos/4028962/pexels-photo-4028962.jpeg?auto=compress&cs=tinysrgb&w=800"
new_moon = "sc02.alicdn.com/kf/A92067c8895424f59987d84ba96601b89E.png"
content = content.replace(old_moon, new_moon)

# Amulet - Black Tourmaline Shield (id:a1) - using the Capricorn Garnet which was the same pexels 1458867
# Find specifically the one in amulet section - it appears twice, we want only a1
# Split and replace only first occurrence of this specific image after the amulet section marker
amulet_marker = "// -- 4 Protection Amulet SKUs"
if amulet_marker not in content:
    # Try the encoded version
    amulet_marker = "Protection Amulet SKUs"

old_amulet = "images.pexels.com/photos/1458867/pexels-photo-1458867.jpeg?auto=compress&cs=tinysrgb&w=800"
new_amulet = "sc02.alicdn.com/kf/A401eeb69f0a04f358fcb986f603e5158v.png"

# Replace the second occurrence (a1 - Black Tourmaline Shield) 
# id:10 Capricorn Garnet also uses 1458867, so only replace the one belonging to a1
# a1 comes after id:12, so replace last occurrence which is a1 if it appears after Pisces
parts = content.split(old_amulet)
print(f"Found {len(parts)-1} occurrences of amulet image URL")
if len(parts) == 3:
    # First is Capricorn (id:10), second is a1 Black Tourmaline
    content = parts[0] + old_amulet + parts[1] + new_amulet + parts[2]
elif len(parts) == 2:
    content = content.replace(old_amulet, new_amulet)

with open('src/components/ProductList.tsx', 'w', encoding='utf-8') as f:
    f.write(content)

print('Moon Phase AI img:', 'A92067c8895424f59987d84ba96601b89E' in content)
print('Amulet AI img:', 'A401eeb69f0a04f358fcb986f603e5158v' in content)
print('Done')
