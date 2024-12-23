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
        root: `libs/angular-components/${options.projectName}`,
        sourceRoot: `libs/angular-components/${options.projectName}`,
        prefix: 'uxg',

        architect: {
          lint: {
            builder: '@nrwl/linter:eslint',
            options: {
              lintFilePatterns: [
                `libs/angular-components/${options.projectName}/src/**/*.ts`,
                `libs/angular-components/${options.projectName}/src/**/*.html`
              ]
            }
          },
          test: {
            builder: '@nx/jest:jest',
            options: {
              jestConfig: `libs/angular-components/${options.projectName}/jest.config.js`
            }
          }
        },
        schematics: {
          '@nx/angular:component': {
            styleext: 'scss'
          }
        }
      };

      json.projects[options.projectName] = project;
      return json;
    })(host, context);
  };
}
