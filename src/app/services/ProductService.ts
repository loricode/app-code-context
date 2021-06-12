import  _http from 'axios';


export class ProductService{
   
    ulrbase = "http://127.0.0.1:8000/api"

    private static _instance: ProductService;

    public static get service():ProductService{
      if(!ProductService._instance){
        ProductService._instance = new ProductService();
      }
     return ProductService._instance;
    }
    
    public async getProducts() {
		return  (await _http.get<any[]>(this.ulrbase+`/product`)).data;
	}
}