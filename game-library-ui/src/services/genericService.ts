export interface GenericService<RequestData = any> {
  getEntities(requestData: RequestData): any;
  getEntityById(requestData: RequestData): any;
  postEntity(requestData: RequestData): any;
  putEntity(requestData: RequestData): any;
  patchEntity(requestData: RequestData): any;
  deleteEntity(requestData: RequestData): any;
}
