"""Create responsive WebP copies; preserve the school's original photo archive."""
import json
from pathlib import Path
from PIL import Image, ImageOps

ROOT = Path(__file__).resolve().parents[1]
DEST = ROOT / 'public/images'
PHOTOS = {
    'green-day': 'army/70373068_2499242406811563_218327983818014720_n.jpg',
    'little-gardeners': 'army/planting.jpg',
    'colourful-celebrations': 'army/40429937_1925713760831100_4588775765222359040_n.jpg',
    'classroom-friends': 'ourPurpose.png',
    'festival-fun': 'army/42819723_1961001617302314_7924558073820086272_n.jpg',
    'young-explorers': 'army/DSC_0532.JPG',
    'learning-together': 'army/DSC_0598.JPG',
    'school-adventures': 'army/DSC_0484.JPG',
    'little-reader': 'army/DSC_0656.JPG',
    'curious-minds': 'army/DSC_0520.JPG',
    'class-of-smiles': 'army/39943572_1914696291932847_3790200491443486720_n.jpg',
    'outdoor-memories': 'difference.jpg',
}

DEST.mkdir(parents=True, exist_ok=True)
manifest = []
for name, source in PHOTOS.items():
    path = ROOT / 'src/assets/images' / source
    with Image.open(path) as original:
        photo = ImageOps.exif_transpose(original).convert('RGB')
        for width in (480, 960, 1440):
            copy = photo.copy()
            copy.thumbnail((width, width * 2), Image.Resampling.LANCZOS)
            copy.save(DEST / f'{name}-{width}.webp', 'WEBP', quality=84, method=6)
        manifest.append({'name': name, 'original': str(path.relative_to(ROOT)),
                         'width': photo.width, 'height': photo.height,
                         'source': 'Existing Wisdom World Academy website photo archive'})

with Image.open(ROOT / 'src/assets/images/logo.png') as logo:
    logo.thumbnail((160, 160), Image.Resampling.LANCZOS)
    logo.save(DEST / 'school-logo.webp', 'WEBP', lossless=True)
    logo.resize((48, 48), Image.Resampling.LANCZOS).save(ROOT / 'public/favicon.png')
(ROOT / 'src/site/image-manifest.json').write_text(json.dumps(manifest, indent=2) + '\n')
print(f'Prepared {len(PHOTOS)} school photographs at three responsive sizes, plus the school logo.')
