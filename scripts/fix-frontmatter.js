/**
 * Fix files that start with --- but have no closing ---
 * Remove the leading --- line from these files
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const BLOG_DIR = path.resolve(__dirname, '..', 'blog');

const brokenFiles = [
  'superbuy-consolidation-guide.md',
  'superbuy-dashboard-guide.md',
  'superbuy-delivery-guide.md',
  'superbuy-first-order.md',
  'superbuy-getting-started.md',
  'superbuy-how-to-buy.md',
  'superbuy-how-to-order.md',
  'superbuy-new-user-guide.md',
  'superbuy-order-guide.md',
  'superbuy-ordering-process.md',
  'superbuy-payment-guide.md',
  'superbuy-platform-guide.md',
  'superbuy-purchase-guide.md',
  'superbuy-registration-guide.md',
  'superbuy-shipping-methods.md',
  'superbuy-shipping-options.md',
  'superbuy-shopping-guide.md',
  'superbuy-top-up-guide.md',
  'superbuy-warehouse-guide.md',
];

let fixed = 0;
for (const file of brokenFiles) {
  const filePath = path.join(BLOG_DIR, file);
  let content = fs.readFileSync(filePath, 'utf-8');

  // Remove leading ---\n
  if (content.startsWith('---\n')) {
    content = content.substring(4); // remove '---\n'
    fs.writeFileSync(filePath, content, 'utf-8');
    fixed++;
    console.log(`Fixed: ${file}`);
  }
}

console.log(`\nFixed ${fixed} files`);
