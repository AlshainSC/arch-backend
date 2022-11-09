

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

export interface IBuild {
  serverTemplate: string
  databaseTemplate: string
  ormTemplate: string
  serverTemplatePath: string
  databaseTemplatePath: string
  ormTemplatePath: string
  buildPath: string
}