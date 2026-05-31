import { cpSync, existsSync, mkdirSync, readdirSync, rmSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'

const root = process.cwd()
const distDir = join(root, 'dist')
const docsDir = join(root, 'docs')

function clearDir(dir) {
  if (!existsSync(dir)) return
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const path = join(dir, entry.name)
    rmSync(path, { recursive: true, force: true })
  }
}

clearDir(docsDir)
mkdirSync(docsDir, { recursive: true })
cpSync(distDir, docsDir, { recursive: true })
writeFileSync(join(docsDir, '.nojekyll'), '')

console.log('Готово: папка docs/ обновлена для GitHub Pages')
