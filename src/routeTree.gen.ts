/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as SearchImport } from './routes/search'
import { Route as LoginImport } from './routes/login'
import { Route as CartImport } from './routes/cart'
import { Route as AccountImport } from './routes/account'
import { Route as IndexImport } from './routes/index'
import { Route as CategoriesIndexImport } from './routes/categories/index'
import { Route as ProductProductIdImport } from './routes/product/$productId'
import { Route as CategoriesCategoryImport } from './routes/categories/$category'

// Create/Update Routes

const SearchRoute = SearchImport.update({
  id: '/search',
  path: '/search',
  getParentRoute: () => rootRoute,
} as any)

const LoginRoute = LoginImport.update({
  id: '/login',
  path: '/login',
  getParentRoute: () => rootRoute,
} as any)

const CartRoute = CartImport.update({
  id: '/cart',
  path: '/cart',
  getParentRoute: () => rootRoute,
} as any)

const AccountRoute = AccountImport.update({
  id: '/account',
  path: '/account',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const CategoriesIndexRoute = CategoriesIndexImport.update({
  id: '/categories/',
  path: '/categories/',
  getParentRoute: () => rootRoute,
} as any)

const ProductProductIdRoute = ProductProductIdImport.update({
  id: '/product/$productId',
  path: '/product/$productId',
  getParentRoute: () => rootRoute,
} as any)

const CategoriesCategoryRoute = CategoriesCategoryImport.update({
  id: '/categories/$category',
  path: '/categories/$category',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/account': {
      id: '/account'
      path: '/account'
      fullPath: '/account'
      preLoaderRoute: typeof AccountImport
      parentRoute: typeof rootRoute
    }
    '/cart': {
      id: '/cart'
      path: '/cart'
      fullPath: '/cart'
      preLoaderRoute: typeof CartImport
      parentRoute: typeof rootRoute
    }
    '/login': {
      id: '/login'
      path: '/login'
      fullPath: '/login'
      preLoaderRoute: typeof LoginImport
      parentRoute: typeof rootRoute
    }
    '/search': {
      id: '/search'
      path: '/search'
      fullPath: '/search'
      preLoaderRoute: typeof SearchImport
      parentRoute: typeof rootRoute
    }
    '/categories/$category': {
      id: '/categories/$category'
      path: '/categories/$category'
      fullPath: '/categories/$category'
      preLoaderRoute: typeof CategoriesCategoryImport
      parentRoute: typeof rootRoute
    }
    '/product/$productId': {
      id: '/product/$productId'
      path: '/product/$productId'
      fullPath: '/product/$productId'
      preLoaderRoute: typeof ProductProductIdImport
      parentRoute: typeof rootRoute
    }
    '/categories/': {
      id: '/categories/'
      path: '/categories'
      fullPath: '/categories'
      preLoaderRoute: typeof CategoriesIndexImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/account': typeof AccountRoute
  '/cart': typeof CartRoute
  '/login': typeof LoginRoute
  '/search': typeof SearchRoute
  '/categories/$category': typeof CategoriesCategoryRoute
  '/product/$productId': typeof ProductProductIdRoute
  '/categories': typeof CategoriesIndexRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/account': typeof AccountRoute
  '/cart': typeof CartRoute
  '/login': typeof LoginRoute
  '/search': typeof SearchRoute
  '/categories/$category': typeof CategoriesCategoryRoute
  '/product/$productId': typeof ProductProductIdRoute
  '/categories': typeof CategoriesIndexRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/account': typeof AccountRoute
  '/cart': typeof CartRoute
  '/login': typeof LoginRoute
  '/search': typeof SearchRoute
  '/categories/$category': typeof CategoriesCategoryRoute
  '/product/$productId': typeof ProductProductIdRoute
  '/categories/': typeof CategoriesIndexRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/'
    | '/account'
    | '/cart'
    | '/login'
    | '/search'
    | '/categories/$category'
    | '/product/$productId'
    | '/categories'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/'
    | '/account'
    | '/cart'
    | '/login'
    | '/search'
    | '/categories/$category'
    | '/product/$productId'
    | '/categories'
  id:
    | '__root__'
    | '/'
    | '/account'
    | '/cart'
    | '/login'
    | '/search'
    | '/categories/$category'
    | '/product/$productId'
    | '/categories/'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  AccountRoute: typeof AccountRoute
  CartRoute: typeof CartRoute
  LoginRoute: typeof LoginRoute
  SearchRoute: typeof SearchRoute
  CategoriesCategoryRoute: typeof CategoriesCategoryRoute
  ProductProductIdRoute: typeof ProductProductIdRoute
  CategoriesIndexRoute: typeof CategoriesIndexRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  AccountRoute: AccountRoute,
  CartRoute: CartRoute,
  LoginRoute: LoginRoute,
  SearchRoute: SearchRoute,
  CategoriesCategoryRoute: CategoriesCategoryRoute,
  ProductProductIdRoute: ProductProductIdRoute,
  CategoriesIndexRoute: CategoriesIndexRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/account",
        "/cart",
        "/login",
        "/search",
        "/categories/$category",
        "/product/$productId",
        "/categories/"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/account": {
      "filePath": "account.tsx"
    },
    "/cart": {
      "filePath": "cart.tsx"
    },
    "/login": {
      "filePath": "login.tsx"
    },
    "/search": {
      "filePath": "search.tsx"
    },
    "/categories/$category": {
      "filePath": "categories/$category.tsx"
    },
    "/product/$productId": {
      "filePath": "product/$productId.tsx"
    },
    "/categories/": {
      "filePath": "categories/index.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
