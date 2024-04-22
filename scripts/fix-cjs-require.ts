import fs from 'node:fs'
import path from 'node:path'
import process from 'node:process'

const cjsRootPath = path.join(process.cwd(), 'dist/umd')

const cjsFilePaths: string[] = []
function updateCjsFiles(directoryPath: string) {
  const files = fs.readdirSync(directoryPath)
  for (const file of files) {
    const filePath = path.join(directoryPath, file)
    if (fs.statSync(filePath).isDirectory()) {
      updateCjsFiles(filePath)
    } else if (filePath.endsWith('.cjs')) {
      cjsFilePaths.push(filePath)
    }
  }
}
updateCjsFiles(cjsRootPath)

for (const cjsFilePath of cjsFilePaths) {
  let replacedContent = fs.readFileSync(cjsFilePath, 'utf8')
  for (const cjsFilePath of cjsFilePaths) {
    const cjsFileName = path.basename(cjsFilePath)
    const jsFileName = cjsFileName.replace('.cjs', '.js')
    replacedContent = replacedContent.replaceAll(`${jsFileName}"`, `${cjsFileName}"`)
  }
  fs.writeFileSync(cjsFilePath, replacedContent)
}
