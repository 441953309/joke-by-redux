export function constructUrl(category, page){
  switch (category){
    case 'showapi_joke_text':
      return `http://apis.baidu.com/showapi_open_bus/showapi_joke/joke_text?page=${page}`;
    case 'showapi_joke_pic':
      return `http://apis.baidu.com/showapi_open_bus/showapi_joke/joke_pic?page=${page}`;
    default:
      return null;
  }

}
