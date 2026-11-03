// TypeScript 7 has no JavaScript compiler API yet, and vue-tsc and
// typescript-eslint need one. Give those tools their own TypeScript 6 while the
// project itself uses 7. Remove this once they support 7.
const TYPESCRIPT_6 = '6.0.3'
const NEEDS_TYPESCRIPT_API =
  /^(vue-tsc|typescript-eslint|@vue\/language-core|@vue\/eslint-config-typescript|@volar\/.+|@typescript-eslint\/.+)$/

module.exports = {
  hooks: {
    readPackage(pkg) {
      if (NEEDS_TYPESCRIPT_API.test(pkg.name)) {
        if (pkg.peerDependencies) delete pkg.peerDependencies.typescript
        if (pkg.peerDependenciesMeta) delete pkg.peerDependenciesMeta.typescript
        if (pkg.dependencies?.typescript || !pkg.name.startsWith('@volar/')) {
          pkg.dependencies = { ...pkg.dependencies, typescript: TYPESCRIPT_6 }
        }
      }
      return pkg
    }
  }
}
