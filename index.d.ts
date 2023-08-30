import { type Linter } from 'eslint'

export const config: Promise<Linter.FlatConfig[]>
export const configWithTypeChecking: Promise<Linter.FlatConfig[]>
export function createConfig(options?: {
  overrides?: {
    /** overrides rules for js files */
    js?: Linter.FlatConfig | ((...args: unknown[]) => Linter.FlatConfig)
    /** overrides rules for ts files */
    ts?: Linter.FlatConfig | ((...args: unknown[]) => Linter.FlatConfig)
  }
  /**
   * Should type checking rules be enabled, defaults to true if there is a tsconfig.json file
   * */
  typeChecking?: boolean
  /**
   * Should ignore gitignore files
   * @default true
   * */
  useGitignore?: boolean
  /** append custom flat configs to default */
  append?: Linter.FlatConfig[]
  /** Libraries related config */
  libraries?: {
    /** Should react related plugins and rules be enabled */
    react?: boolean
  }
}): Promise<Linter.FlatConfig[]>
export const configForJs: Linter.FlatConfig
export const configForTsWithTypeChecking: Linter.FlatConfig
export const configForTsWithoutTypeChecking: Linter.FlatConfig
