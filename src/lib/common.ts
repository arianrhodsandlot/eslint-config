import process from 'node:process'

export const isProduction = process.env.NODE_ENV === 'production'

export const jsxFiles = ['**/*.{jsx,mjsx,cjsx}']
export const jsFiles = ['**/*.{js,mjs,cjs}', '**/*.vue', ...jsxFiles]
export const tsxFiles = ['**/*.{tsx,mtsx,ctsx}']
export const tsFiles = ['**/*.{ts,mts,cts}', '**/*.vue', ...tsxFiles]
