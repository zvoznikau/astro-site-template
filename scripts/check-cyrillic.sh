#!/bin/bash

# Script to check for Cyrillic characters in code
# Usage: ./scripts/check-cyrillic.sh

set -e

ERRORS=0

echo "Checking for Cyrillic characters in code..."

# Check in source files
if grep -r -P '[А-Яа-яЁё]' apps/web/astro/src --exclude-dir=node_modules --exclude-dir=.astro 2>/dev/null; then
  echo "ERROR: Found Cyrillic characters in apps/web/astro/src"
  ERRORS=1
fi

# Check in configuration files
if grep -r -P '[А-Яа-яЁё]' apps/web/astro/src/config 2>/dev/null; then
  echo "ERROR: Found Cyrillic characters in config files"
  ERRORS=1
fi

# Check in Python code
if grep -r -P '[А-Яа-яЁё]' services/api-lambda/src --exclude-dir=__pycache__ 2>/dev/null; then
  echo "ERROR: Found Cyrillic characters in Python code"
  ERRORS=1
fi

# Check in documentation (except .cursor/rules which may contain Russian)
if grep -r -P '[А-Яа-яЁё]' README.md CHANGELOG.md 2>/dev/null; then
  echo "ERROR: Found Cyrillic characters in documentation"
  ERRORS=1
fi

if [ $ERRORS -eq 0 ]; then
  echo "✓ OK: No Cyrillic characters found"
  exit 0
else
  echo "✗ FAILED: Cyrillic characters found. Please remove them before committing."
  exit 1
fi

