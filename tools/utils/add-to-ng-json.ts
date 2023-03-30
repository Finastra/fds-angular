import { Rule, SchematicContext } from '@angular-devkit/schematics';
import { Tree } from '@angular-devkit/schematics/src/tree/interface';
import { getWorkspacePath, updateJsonInTree } from '@nrwl/workspace';

interface NgJsonOptions {
  projectName: string;
}

interface AngularArchitect {
  [key: string]: any;

  test: {
    builder: string;
    options: Record<string, any>;
  };

  lint: {
    builder: string;
    options: Record<string, any>;
  };
}

interface AngularProject {
  [key: string]: any;

  root: string;
  projectType: 'library';
  sourceRoot: string;
  prefix: 'uxg';

  architect: AngularArchitect;
}

type AngularJson = Record<string, any | AngularProject>;

export function addToNgJson(options: NgJsonOptions): Rule {
  return (host: Tree, context: SchematicContext) => {
    updateJsonInTree(getWorkspacePath(host), (json: AngularJson) => {
      const project: AngularProject = {
        projectType: 'library',
        root: `packages/angular-components/${options.projectName}`,
        sourceRoot: `packages/angular-components/${options.projectName}`,
        prefix: 'uxg',

        architect: {
          lint: {
            builder: '@nrwl/linter:eslint',
            options: {
              lintFilePatterns: [
                `packages/angular-components/${options.projectName}/src/**/*.ts`,
                `packages/angular-components/${options.projectName}/src/**/*.html`
              ]
            }
          },
          test: {
            builder: '@nrwl/jest:jest',
            options: {
              jestConfig: `packages/angular-components/${options.projectName}/jest.config.js`
            }
          }
        },
        schematics: {
          '@nrwl/angular:component': {
            styleext: 'scss'
          }
        }
      };

      json.projects[options.projectName] = project;
      return json;
    })(host, context);
  };
}
