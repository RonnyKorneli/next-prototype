import { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  debug: true,
  verbose: true,
  schema: './graphql/schema.graphql',
  config: {
    rawRequest: true,
  },
  documents: ['graphql/queries/*.graphql', '**/*.ts', '!node_modules/**/*'],
  generates: {
    './graphql/generated/client.ts': {
      plugins: [
        'typescript',
        'typescript-operations',
        'typescript-graphql-request',
      ],
      config: {},
    },
  },
};

export default config;
