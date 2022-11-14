

export interface ICliOpts {
  name: string
  serverTemplate: string
  databaseTemplate: string
  ormTemplate: string
  serverTemplatePath: string
  databaseTemplatePath: string
  ormTemplatePath: string
  buildPath: string
};

export interface IBuild{
  serverTemplate: string
  databaseTemplate: string
  ormTemplate: string
  serverTemplatePath: string
  databaseTemplatePath: string
  ormTemplatePath: string
  ormChoice: boolean
  databaseChoice: boolean
  buildPath: string
  installChoice: boolean
}

// export interface IBuildConfig {
//   express: Buffer
//   expressMongo: Buffer
//   expressMongoose: Buffer
//   koa: Buffer
//   koaMongo: Buffer
//   koaMongoose: Buffer
// }

export interface IOptions {
  server?: string
  database?: string
  orm?: string
}
