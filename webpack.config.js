import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

export default {
  mode: 'production',
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: join(dirname(fileURLToPath(import.meta.url)), 'dist'),
  },
};
