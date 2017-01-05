import fs from 'fs';
import pify from 'pify';
import preprocessor from 'suitcss-preprocessor';
import {plugins} from './helpers/config';
import test from 'ava';

test('Testing Kern framework', async t => {
    const css = await pify(fs.readFile)('./index.css', 'utf8');
    const fixture = await pify(fs.readFile)('./test/fixtures/theme.css', 'utf8');
    
    const result = await preprocessor(css, {
      root: './',
      minify: true,
      use: plugins
    });

    t.is(result.css, fixture);
});
