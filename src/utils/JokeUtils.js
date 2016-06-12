export function constructUrl(category, page){
  if(category == 1){
    return `http://apis.baidu.com/showapi_open_bus/showapi_joke/joke_text?page=${page}`;
  }else if(category == 2){
    return `http://apis.baidu.com/showapi_open_bus/showapi_joke/joke_pic?page=${page}`;
  }else if(category == 3){
    return `http://apis.baidu.com/tngou/gallery/news?id=${page}`;
  }else{
    return null;
  }
}
