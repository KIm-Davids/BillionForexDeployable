// File: C:\Users\User\Desktop\BillionaireForeUI\starter_repo\app\page.js
import * as entry from '../../../app/page'
type TEntry = typeof entry

check<IEntry, TEntry>(entry)

type PageParams = Record<string, string>
interface PageProps {
  params: any
  searchParams?: any
}
interface LayoutProps {
  children: React.ReactNode
  params: any
}

type PageComponent = (props: PageProps) => React.ReactNode | Promise<React.ReactNode>
type LayoutComponent = (props: LayoutProps) => React.ReactNode | Promise<React.ReactNode>

interface IEntry {
  default: PageComponent
  config?: {}
  generateStaticParams?: (params?: PageParams) => Promise<any[]>
  revalidate?: RevalidateRange<TEntry> | false
  dynamic?: 'auto' | 'force-dynamic' | 'error' | 'force-static'
  dynamicParams?: boolean
  fetchCache?: 'auto' | 'force-no-store' | 'only-no-store' | 'default-no-store' | 'default-cache' | 'only-cache' | 'force-cache'
  preferredRegion?: 'auto' | 'home' | 'edge'
  runtime?: 'nodejs' | 'experimental-edge'
}

// =============
// Utility types
type RevalidateRange<T> = T extends { revalidate: any } ? NonNegative<T['revalidate']> : never
type Impossible<K extends keyof any> = { [P in K]: never }
function check<Base, T extends Base>(_mod: T & Impossible<Exclude<keyof T, keyof Base>>): void {}

// https://github.com/sindresorhus/type-fest
type Numeric = number | bigint
type Zero = 0 | 0n
type Negative<T extends Numeric> = T extends Zero ? never : `${T}` extends `-${string}` ? T : never
type NonNegative<T extends Numeric> = T extends Zero ? T : Negative<T> extends never ? T : '__invalid_negative_number__'
