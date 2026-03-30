with open('src/components/ProductList.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

# Zodiac series - Aries (id:1) gets AI-generated Zodiac bracelet image
content = content.replace(
    'pexels.com/photos/5317619/pexels-photo-5317619.jpeg?auto=compress',
    'pexels.com/photos/5317619/pexels-photo-5317619.jpeg?_replaced=zodiac'
)
content = content.replace(
    'images.pexels.com/photos/5317619/pexels-photo-5317619.jpeg?_replaced=zodiac&cs=tinysrgb&w=800',
    'sc02.alicdn.com/kf/A49c01ab2bbb24bee8b343c91b88b6007n.png'
)

with open('src/components/ProductList.tsx', 'w', encoding='utf-8') as f:
    f.write(content)

print('Checking result...')
with open('src/components/ProductList.tsx', 'r', encoding='utf-8') as f:
    c = f.read()
print('Zodiac AI img in file:', 'A49c01ab2bbb24bee8b343c91b88b6007n' in c)
