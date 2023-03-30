import { strings } from '@angular-devkit/core';
import { apply, applyTemplates, chain, mergeWith, move, Rule, SchematicContext, Tree, url } from '@angular-devkit/schematics';

import gitPath from 'git-config-path';
import gitParse from 'parse-git-config';

import { readFile } from 'fs-extra';
import { join } from 'path';
import { Schema } from './schema';

import { updateJsonInTree } from '@nrwl/workspace';
import { addToIndex, addToNgJson, registerLocalPackage } from '../../utils';

export default function (schema: Schema): Rule {
  return async (host: Tree, context: SchematicContext) => {
    const globalGitConfig = gitParse.sync({ path: gitPath('global'), cwd: '/' }) || {};
    const localGitConfig = gitParse.sync({ path: gitPath(), cwd: '/' }) || {};

    const user = {
      name: (localGitConfig.user && localGitConfig.user.name) || globalGitConfig.user.name,
      email: (localGitConfig.user && localGitConfig.user.email) || globalGitConfig.user.email
    };

    const pkg = JSON.parse((await readFile(join(process.cwd(), './package.json'))).toString());
    const filename = strings.dasherize(schema.name);
    const dest = `packages/angular-components/${filename}`;
    const classNamePrefix = strings.classify(schema.name);

    const templateSource = apply(url('./files'), [
      applyTemplates({
        ...strings,
        className: classNamePrefix,
        filename,
        scssFilename: `_${filename}`,
        version: pkg.version,
        author: `${user.name} <${user.email}>`
      }),
      move(dest)
    ]);

    return chain([
      addToIndex({
        indexPath: 'packages/angular-components/index.ts',
        filename
      }),
      addToNgJson({
        projectName: filename
      }),
      updateJsonInTree(`nx.json`, (json) => {
        return {
          ...json,
          projects: {
            ...json.projects,
            [filename]: { tags: [] }
          }
        };
      }),
      mergeWith(templateSource),
      registerLocalPackage(dest, `@finastra/angular-components/${filename}`)
    ]);
  };
}
