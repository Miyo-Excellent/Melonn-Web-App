import AppConstants from './AppConstants';
import ApiPaths from './ApiPaths';
import AssetsPaths from './AssetsPaths';

export default class Constants {
  app: AppConstants = new AppConstants();

  paths: {
    api: ApiPaths;
    assets: AssetsPaths;
  } = {
    api: new ApiPaths(),
    assets: new AssetsPaths(),
  };
}
