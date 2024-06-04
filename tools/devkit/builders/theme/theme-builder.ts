import { BuilderContext, BuilderOutput, createBuilder } from '@angular-devkit/architect';
import autoprefixer from 'autoprefixer';
import { ensureFileSync, mkdirp, remove, writeFileSync } from 'fs-extra';
import postcss from 'postcss';
import { compile } from 'sass';
import { Schema } from './schema';
const path = require('path');

async function themeBuilder(options: Schema, context: BuilderContext): Promise<BuilderOutput> {
  const logger = context.logger;
  const printInfo = !options.silent;

  try {
    const src = options.inputPath;
    const dest = options.outputPath;
    context.reportProgress(0, 1);

    // cleanup
    await remove(dest);
    await mkdirp(dest);

    const prebuiltThemes = await import('globby').then(({ globbySync }) => globbySync(path.posix.join(src, '*.scss')));

    for (const theme of prebuiltThemes) {
      const filename = theme.split('/')?.pop();
      const outFile = path.posix.join(dest, filename).replace('.scss', '.css');
      logger.info(`Compiling "${theme}" to "${outFile}"...`);

      const compileResult = compile(theme, { sourceMap: true, verbose: true, loadPaths: ['./node_modules'], style: options.outputStyle ?? 'expanded' });

      const finalCss = await postcss([autoprefixer]).process(compileResult.css, {
        from: theme,
        to: outFile,
        map: {
          inline: false
        }
      });

      ensureFileSync(outFile);
      await writeFileSync(outFile, finalCss.css);
      if (options.sourceMap === true) {
        await writeFileSync(outFile.replace('.css', '.map'), finalCss.map.toString());
      }
    }

    context.reportProgress(1, 1);
    return { success: true };
  } catch (err) {
    if (printInfo) logger.error(err.message, err);
    return { success: false };
  }
}

export default createBuilder(themeBuilder);
