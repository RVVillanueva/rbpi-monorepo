import { type RouteConfig } from '@react-router/dev/routes'
import { flatRoutes } from '@react-router/fs-routes'

const rootDirectory = './pages'
const ignoredRouteFiles = ['**/.*']

export default flatRoutes({ rootDirectory, ignoredRouteFiles }) satisfies RouteConfig
