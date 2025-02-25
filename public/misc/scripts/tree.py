#!/usr/bin/env python3
import os
import hashlib
import csv
from pathlib import Path

def main(dir: str) -> None:
    dir = Path(dir)
    entries = []

    # Get all files in the directory, relative to the directory
    print(f'Getting files in {dir}')
    files = [f for f in dir.glob('**/*') if f.is_file()]
    files = [f.relative_to(dir) for f in files]
    files = [f for f in files if not str(f) in {'tree.csv', 'miniserve-0.29.0.exe', 'tree.py'}]

    # Map to size
    print(f'Getting sizes for {len(files)} files')
    sizes = [(dir / f).stat().st_size for f in files]
    files = list(zip([f"/{f}".replace("\\", "/") for f in files], sizes))
    
    # Sort by file name
    files.sort(key=lambda x: x[0])

    # Write to CSV
    print(f'Writing to {dir / "tree.csv"}')
    with open(dir / 'tree.csv', 'w', encoding="utf-8") as f:
        writer = csv.writer(f)
        writer.writerows(files)

main(".")
