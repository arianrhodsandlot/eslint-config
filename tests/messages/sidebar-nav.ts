/* eslint-disable sonarjs/no-duplicate-string */
export const sidebarNavMessages = [
  {
    ruleId: 'prettier/prettier',
    severity: 2,
    message: 'Replace `"use·client"` with `\'use·client\'`',
    line: 1,
    column: 1,
    nodeType: null,
    messageId: 'replace',
    endLine: 1,
    endColumn: 13,
    fix: { range: [0, 12], text: "'use client'" },
  },
  {
    ruleId: 'quotes',
    severity: 2,
    message: 'Strings must use singlequote.',
    line: 1,
    column: 1,
    nodeType: 'Literal',
    messageId: 'wrongQuotes',
    endLine: 1,
    endColumn: 13,
    fix: { range: [0, 12], text: "'use client'" },
  },
  {
    ruleId: 'prettier/prettier',
    severity: 2,
    message: 'Replace `"next/link"` with `\'next/link\'`',
    line: 3,
    column: 18,
    nodeType: null,
    messageId: 'replace',
    endLine: 3,
    endColumn: 29,
    fix: { range: [31, 42], text: "'next/link'" },
  },
  {
    ruleId: 'import/no-unresolved',
    severity: 2,
    message: "Unable to resolve path to module 'next/link'.",
    line: 3,
    column: 18,
    nodeType: 'Literal',
    endLine: 3,
    endColumn: 29,
  },
  {
    ruleId: 'quotes',
    severity: 2,
    message: 'Strings must use singlequote.',
    line: 3,
    column: 18,
    nodeType: 'Literal',
    messageId: 'wrongQuotes',
    endLine: 3,
    endColumn: 29,
    fix: { range: [31, 42], text: "'next/link'" },
  },
  {
    ruleId: 'prettier/prettier',
    severity: 2,
    message: 'Replace `"next/navigation"` with `\'next/navigation\'`',
    line: 4,
    column: 29,
    nodeType: null,
    messageId: 'replace',
    endLine: 4,
    endColumn: 46,
    fix: { range: [71, 88], text: "'next/navigation'" },
  },
  {
    ruleId: 'import/no-unresolved',
    severity: 2,
    message: "Unable to resolve path to module 'next/navigation'.",
    line: 4,
    column: 29,
    nodeType: 'Literal',
    endLine: 4,
    endColumn: 46,
  },
  {
    ruleId: 'quotes',
    severity: 2,
    message: 'Strings must use singlequote.',
    line: 4,
    column: 29,
    nodeType: 'Literal',
    messageId: 'wrongQuotes',
    endLine: 4,
    endColumn: 46,
    fix: { range: [71, 88], text: "'next/navigation'" },
  },
  {
    ruleId: '@typescript-eslint/consistent-type-imports',
    severity: 2,
    message: 'All imports in the declaration are only used as types. Use `import type`.',
    line: 5,
    column: 1,
    nodeType: 'ImportDeclaration',
    messageId: 'typeOverValue',
    endLine: 5,
    endColumn: 43,
    fix: { range: [95, 95], text: ' type' },
  },
  {
    ruleId: 'import/order',
    severity: 2,
    message: 'There should be no empty line between import groups',
    line: 5,
    column: 1,
    nodeType: 'ImportDeclaration',
    endLine: 5,
    endColumn: 43,
    fix: { range: [132, 133], text: '' },
  },
  {
    ruleId: 'prettier/prettier',
    severity: 2,
    message: 'Replace `"types/nav"` with `\'types/nav\'`',
    line: 5,
    column: 32,
    nodeType: null,
    messageId: 'replace',
    endLine: 5,
    endColumn: 43,
    fix: { range: [120, 131], text: "'types/nav'" },
  },
  {
    ruleId: 'import/no-unresolved',
    severity: 2,
    message: "Unable to resolve path to module 'types/nav'.",
    line: 5,
    column: 32,
    nodeType: 'Literal',
    endLine: 5,
    endColumn: 43,
  },
  {
    ruleId: 'quotes',
    severity: 2,
    message: 'Strings must use singlequote.',
    line: 5,
    column: 32,
    nodeType: 'Literal',
    messageId: 'wrongQuotes',
    endLine: 5,
    endColumn: 43,
    fix: { range: [120, 131], text: "'types/nav'" },
  },
  {
    ruleId: 'prettier/prettier',
    severity: 2,
    message: 'Replace `"@/lib/utils"` with `\'@/lib/utils\'`',
    line: 7,
    column: 20,
    nodeType: null,
    messageId: 'replace',
    endLine: 7,
    endColumn: 33,
    fix: { range: [152, 165], text: "'@/lib/utils'" },
  },
  {
    ruleId: 'import/no-unresolved',
    severity: 2,
    message: "Unable to resolve path to module '@/lib/utils'.",
    line: 7,
    column: 20,
    nodeType: 'Literal',
    endLine: 7,
    endColumn: 33,
  },
  {
    ruleId: 'quotes',
    severity: 2,
    message: 'Strings must use singlequote.',
    line: 7,
    column: 20,
    nodeType: 'Literal',
    messageId: 'wrongQuotes',
    endLine: 7,
    endColumn: 33,
    fix: { range: [152, 165], text: "'@/lib/utils'" },
  },
  {
    ruleId: 'unicorn/explicit-length-check',
    severity: 2,
    message: 'Use `.length > 0` when checking length is not zero.',
    line: 16,
    column: 10,
    nodeType: 'MemberExpression',
    messageId: 'non-zero',
    endLine: 16,
    endColumn: 22,
    fix: { range: [343, 355], text: 'items.length > 0' },
  },
  {
    ruleId: 'prettier/prettier',
    severity: 2,
    message: 'Replace `"w-full"` with `\'w-full\'`',
    line: 17,
    column: 20,
    nodeType: null,
    messageId: 'replace',
    endLine: 17,
    endColumn: 28,
    fix: { range: [379, 387], text: "'w-full'" },
  },
  {
    ruleId: 'prettier/prettier',
    severity: 2,
    message: 'Replace `"pb-4"` with `\'pb-4\'`',
    line: 19,
    column: 40,
    nodeType: null,
    messageId: 'replace',
    endLine: 19,
    endColumn: 46,
    fix: { range: [464, 470], text: "'pb-4'" },
  },
  {
    ruleId: 'quotes',
    severity: 2,
    message: 'Strings must use singlequote.',
    line: 19,
    column: 40,
    nodeType: 'Literal',
    messageId: 'wrongQuotes',
    endLine: 19,
    endColumn: 46,
    fix: { range: [464, 470], text: "'pb-4'" },
  },
  {
    ruleId: 'prettier/prettier',
    severity: 2,
    message:
      'Replace `"mb-1·rounded-md·px-2·py-1·text-sm·font-semibold">⏎············{item.title}⏎··········` with `\'mb-1·rounded-md·px-2·py-1·text-sm·font-semibold\'>{item.title}`',
    line: 20,
    column: 25,
    nodeType: null,
    messageId: 'replace',
    endLine: 22,
    endColumn: 11,
    fix: { range: [498, 584], text: "'mb-1 rounded-md px-2 py-1 text-sm font-semibold'>{item.title}" },
  },
  {
    ruleId: 'prettier/prettier',
    severity: 2,
    message:
      'Replace `(⏎············<DocsSidebarNavItems·items={item.items}·pathname={pathname}·/>⏎··········)` with `<DocsSidebarNavItems·items={item.items}·pathname={pathname}·/>`',
    line: 23,
    column: 35,
    nodeType: null,
    messageId: 'replace',
    endLine: 25,
    endColumn: 12,
    fix: { range: [624, 712], text: '<DocsSidebarNavItems items={item.items} pathname={pathname} />' },
  },
  {
    ruleId: 'prettier/prettier',
    severity: 2,
    message: 'Replace `⏎··items,⏎··pathname,⏎` with `·items,·pathname·`',
    line: 37,
    column: 38,
    nodeType: null,
    messageId: 'replace',
    endLine: 40,
    endColumn: 1,
    fix: { range: [893, 915], text: ' items, pathname ' },
  },
  {
    ruleId: 'prettier/prettier',
    severity: 2,
    message: 'Replace `"grid·grid-flow-row·auto-rows-max·text-sm"` with `\'grid·grid-flow-row·auto-rows-max·text-sm\'`',
    line: 42,
    column: 20,
    nodeType: null,
    messageId: 'replace',
    endLine: 42,
    endColumn: 62,
    fix: { range: [992, 1034], text: "'grid grid-flow-row auto-rows-max text-sm'" },
  },
  {
    ruleId: 'prettier/prettier',
    severity: 2,
    message:
      'Replace `"group·flex·w-full·items-center·rounded-md·border·border-transparent·px-2·py-1·hover:underline"` with `\'group·flex·w-full·items-center·rounded-md·border·border-transparent·px-2·py-1·hover:underline\'`',
    line: 49,
    column: 15,
    nodeType: null,
    messageId: 'replace',
    endLine: 49,
    endColumn: 110,
    fix: {
      range: [1220, 1315],
      text: "'group flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:underline'",
    },
  },
  {
    ruleId: 'quotes',
    severity: 2,
    message: 'Strings must use singlequote.',
    line: 49,
    column: 15,
    nodeType: 'Literal',
    messageId: 'wrongQuotes',
    endLine: 49,
    endColumn: 110,
    fix: {
      range: [1220, 1315],
      text: "'group flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:underline'",
    },
  },
  {
    ruleId: 'prettier/prettier',
    severity: 2,
    message: 'Replace `"cursor-not-allowed·opacity-60"` with `\'cursor-not-allowed·opacity-60\'`',
    line: 50,
    column: 32,
    nodeType: null,
    messageId: 'replace',
    endLine: 50,
    endColumn: 63,
    fix: { range: [1348, 1379], text: "'cursor-not-allowed opacity-60'" },
  },
  {
    ruleId: 'quotes',
    severity: 2,
    message: 'Strings must use singlequote.',
    line: 50,
    column: 32,
    nodeType: 'Literal',
    messageId: 'wrongQuotes',
    endLine: 50,
    endColumn: 63,
    fix: { range: [1348, 1379], text: "'cursor-not-allowed opacity-60'" },
  },
  {
    ruleId: 'prettier/prettier',
    severity: 2,
    message:
      'Replace `⏎················?·"font-medium·text-foreground"⏎················:·"text-muted-foreground"` with `·?·\'text-foreground·font-medium\'·:·\'text-muted-foreground\',`',
    line: 51,
    column: 37,
    nodeType: null,
    messageId: 'replace',
    endLine: 53,
    endColumn: 42,
    fix: { range: [1417, 1507], text: " ? 'text-foreground font-medium' : 'text-muted-foreground'," },
  },
  {
    ruleId: 'quotes',
    severity: 2,
    message: 'Strings must use singlequote.',
    line: 52,
    column: 19,
    nodeType: 'Literal',
    messageId: 'wrongQuotes',
    endLine: 52,
    endColumn: 48,
    fix: { range: [1436, 1465], text: "'font-medium text-foreground'" },
  },
  {
    ruleId: 'quotes',
    severity: 2,
    message: 'Strings must use singlequote.',
    line: 53,
    column: 19,
    nodeType: 'Literal',
    messageId: 'wrongQuotes',
    endLine: 53,
    endColumn: 42,
    fix: { range: [1484, 1507], text: "'text-muted-foreground'" },
  },
  {
    ruleId: 'prettier/prettier',
    severity: 2,
    message: 'Replace `"_blank"·:·""` with `\'_blank\'·:·\'\'`',
    line: 55,
    column: 37,
    nodeType: null,
    messageId: 'replace',
    endLine: 55,
    endColumn: 50,
    fix: { range: [1559, 1572], text: "'_blank' : ''" },
  },
  {
    ruleId: 'quotes',
    severity: 2,
    message: 'Strings must use singlequote.',
    line: 55,
    column: 37,
    nodeType: 'Literal',
    messageId: 'wrongQuotes',
    endLine: 55,
    endColumn: 45,
    fix: { range: [1559, 1567], text: "'_blank'" },
  },
  {
    ruleId: 'quotes',
    severity: 2,
    message: 'Strings must use singlequote.',
    line: 55,
    column: 48,
    nodeType: 'Literal',
    messageId: 'wrongQuotes',
    endLine: 55,
    endColumn: 50,
    fix: { range: [1570, 1572], text: "''" },
  },
  {
    ruleId: 'prettier/prettier',
    severity: 2,
    message: 'Replace `"noreferrer"·:·""` with `\'noreferrer\'·:·\'\'`',
    line: 56,
    column: 34,
    nodeType: null,
    messageId: 'replace',
    endLine: 56,
    endColumn: 51,
    fix: { range: [1607, 1624], text: "'noreferrer' : ''" },
  },
  {
    ruleId: 'quotes',
    severity: 2,
    message: 'Strings must use singlequote.',
    line: 56,
    column: 34,
    nodeType: 'Literal',
    messageId: 'wrongQuotes',
    endLine: 56,
    endColumn: 46,
    fix: { range: [1607, 1619], text: "'noreferrer'" },
  },
  {
    ruleId: 'quotes',
    severity: 2,
    message: 'Strings must use singlequote.',
    line: 56,
    column: 49,
    nodeType: 'Literal',
    messageId: 'wrongQuotes',
    endLine: 56,
    endColumn: 51,
    fix: { range: [1622, 1624], text: "''" },
  },
  {
    ruleId: 'prettier/prettier',
    severity: 2,
    message:
      'Replace `"ml-2·rounded-md·bg-[#adfa1d]·px-1.5·py-0.5·text-xs·leading-none·text-[#000000]·no-underline·group-hover:no-underline"` with `\'ml-2·rounded-md·bg-[#adfa1d]·px-1.5·py-0.5·text-xs·leading-none·text-[#000000]·no-underline·group-hover:no-underline\'`',
    line: 60,
    column: 31,
    nodeType: null,
    messageId: 'replace',
    endLine: 60,
    endColumn: 149,
    fix: {
      range: [1722, 1840],
      text: "'ml-2 rounded-md bg-[#adfa1d] px-1.5 py-0.5 text-xs leading-none text-[#000000] no-underline group-hover:no-underline'",
    },
  },
  {
    ruleId: 'prettier/prettier',
    severity: 2,
    message:
      'Replace `"flex·w-full·cursor-not-allowed·items-center·rounded-md·p-2·text-muted-foreground·hover:underline"` with `\'text-muted-foreground·flex·w-full·cursor-not-allowed·items-center·rounded-md·p-2·hover:underline\'`',
    line: 69,
    column: 15,
    nodeType: null,
    messageId: 'replace',
    endLine: 69,
    endColumn: 113,
    fix: {
      range: [2021, 2119],
      text: "'text-muted-foreground flex w-full cursor-not-allowed items-center rounded-md p-2 hover:underline'",
    },
  },
  {
    ruleId: 'quotes',
    severity: 2,
    message: 'Strings must use singlequote.',
    line: 69,
    column: 15,
    nodeType: 'Literal',
    messageId: 'wrongQuotes',
    endLine: 69,
    endColumn: 113,
    fix: {
      range: [2021, 2119],
      text: "'flex w-full cursor-not-allowed items-center rounded-md p-2 text-muted-foreground hover:underline'",
    },
  },
  {
    ruleId: 'prettier/prettier',
    severity: 2,
    message: 'Replace `"cursor-not-allowed·opacity-60"` with `\'cursor-not-allowed·opacity-60\',`',
    line: 70,
    column: 32,
    nodeType: null,
    messageId: 'replace',
    endLine: 70,
    endColumn: 63,
    fix: { range: [2152, 2183], text: "'cursor-not-allowed opacity-60'," },
  },
  {
    ruleId: 'quotes',
    severity: 2,
    message: 'Strings must use singlequote.',
    line: 70,
    column: 32,
    nodeType: 'Literal',
    messageId: 'wrongQuotes',
    endLine: 70,
    endColumn: 63,
    fix: { range: [2152, 2183], text: "'cursor-not-allowed opacity-60'" },
  },
  {
    ruleId: 'prettier/prettier',
    severity: 2,
    message:
      'Replace `"ml-2·rounded-md·bg-muted·px-1.5·py-0.5·text-xs·leading-none·text-muted-foreground·no-underline·group-hover:no-underline"` with `\'bg-muted·text-muted-foreground·ml-2·rounded-md·px-1.5·py-0.5·text-xs·leading-none·no-underline·group-hover:no-underline\'`',
    line: 75,
    column: 31,
    nodeType: null,
    messageId: 'replace',
    endLine: 75,
    endColumn: 152,
    fix: {
      range: [2295, 2416],
      text: "'bg-muted text-muted-foreground ml-2 rounded-md px-1.5 py-0.5 text-xs leading-none no-underline group-hover:no-underline'",
    },
  },
  {
    ruleId: 'prettier/prettier',
    severity: 2,
    message: 'Insert `,`',
    line: 80,
    column: 10,
    nodeType: null,
    messageId: 'insert',
    endLine: 80,
    endColumn: 10,
    fix: { range: [2511, 2511], text: ',' },
  },
]
/* eslint-enable sonarjs/no-duplicate-string */
