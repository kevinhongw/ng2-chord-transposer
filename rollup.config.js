export default {
  entry: 'dist/index.js',
  dest: 'dist/bundles/ng2ChordTranspose.umd.js',
  sourceMap: true,
  format: 'umd',
  moduleName: 'ng2ChordTranspose',
  globals: {
    '@angular/core': 'ng.core',
  }
}