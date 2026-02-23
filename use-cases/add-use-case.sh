#!/usr/bin/env bash
# Usage: ./add-use-case.sh <slug> "<Industry Name>"
# Example: ./add-use-case.sh fintech "Fintech & Financial Services"
#
# This adds a new entry to data.json with placeholder content,
# then generates the page. Edit data.json to customize the content.

set -euo pipefail
cd "$(dirname "$0")"

if [ $# -lt 2 ]; then
  echo "Usage: $0 <slug> \"<Industry Name>\""
  echo "Example: $0 fintech \"Fintech & Financial Services\""
  exit 1
fi

SLUG="$1"
INDUSTRY="$2"

# Check if slug already exists
if node -e "const d=JSON.parse(require('fs').readFileSync('data.json','utf8')); process.exit(d.some(e=>e.slug==='$SLUG')?1:0)" 2>/dev/null; then
  echo "❌ Slug '$SLUG' already exists in data.json"
  exit 1
fi

# Add new entry to data.json
node -e "
const fs = require('fs');
const data = JSON.parse(fs.readFileSync('data.json', 'utf8'));
data.push({
  slug: '$SLUG',
  industry: '$INDUSTRY',
  keyword: 'openclaw for $SLUG',
  title: 'OpenClaw for $INDUSTRY: AI-Powered Automation',
  description: 'Discover how OpenClaw helps $INDUSTRY professionals automate communication, scheduling, and daily operations.',
  heroEmoji: '🔧',
  intro: 'PLACEHOLDER — Edit this in data.json to describe how OpenClaw helps $INDUSTRY.',
  painPoints: [
    'PLACEHOLDER pain point 1',
    'PLACEHOLDER pain point 2',
    'PLACEHOLDER pain point 3'
  ],
  solutions: [
    { title: 'PLACEHOLDER Solution 1', description: 'Describe the solution here.' },
    { title: 'PLACEHOLDER Solution 2', description: 'Describe the solution here.' },
    { title: 'PLACEHOLDER Solution 3', description: 'Describe the solution here.' }
  ],
  faqs: [
    { question: 'PLACEHOLDER question?', answer: 'PLACEHOLDER answer.' },
    { question: 'PLACEHOLDER question 2?', answer: 'PLACEHOLDER answer 2.' }
  ],
  testimonialQuote: 'PLACEHOLDER testimonial quote.',
  testimonialAttribution: '— Role, Company'
});
fs.writeFileSync('data.json', JSON.stringify(data, null, 2));
"

echo "✅ Added '$SLUG' to data.json"
echo "📝 Edit use-cases/data.json to customize the content, then run:"
echo "   node use-cases/generate.js $SLUG"
echo ""
echo "Generating page with placeholder content..."
node generate.js "$SLUG"
echo ""
echo "⚠️  Remember to update the content in data.json and re-run generate.js"
