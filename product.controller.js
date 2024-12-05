import pool from "../db/dbConfig.js";
export const addProductPage = (request, response, next) => {
  console.log("get method")
  response.render("addProduct.ejs");
};
export const addProductAction = (request, response, next) => {
  console.log("request body adding product", request.body)
console.log("addProductAction")
  let { productName, price, category } = request.body;
  // console.log(name)
  try {
    pool.getConnection((err, con) => {
    //   console.log(con)
      if (!err) {
        let sql = "insert into products (name, price, category) VALUES (?, ?, ?)";
        con.query(sql, [productName, price, category], (err, result) => {
          con.release();
          if (!err) {
            if (result.length != 0)
              // return response.end("add in success....");
              // return response.end("Sing in failed...");
              return response.render("viewProduct.ejs");

          }
          else {
            console.log("err", err);
            return response.end("Something wrong...");
          }
        });

      }
      else {
        // console.log("database",err);
        return response.end("somthing wrong")
      }

    })
  } catch (error) {
    console.log(error)
  }

}

export const viewProductsPage = (request, response, next) => {

  try {
      pool.getConnection((err, con) => {
          if (!err) {
              let sql = "SELECT * FROM products";
              con.query(sql, (err, result) => {
                  con.release();
                  if (!err) {
                      console.log("Fetched Products: ", result);
          
                     return response.render("viewProduct.ejs",{products: result });
                  } else {
                      console.log("Error fetching products:", err);
                      return response.end("Error fetching products.");
                  }
              });
          } else {
              console.log("Database Connection Error:", err);
              return response.end("Database connection error.");
          }
      });
  } catch (error) {
      console.log("Error:", error);
      return response.end("An error occurred.");
  }
};


export const deleteProductsPage=(request,response,next)=>
  {
    let productId=request.params.productId;
    pool.getConnection((err,con)=>{
      if(!err){
        let sql="delete from products where id=?";
        con.query(sql,[productId],(err,result)=>{
          con.release();
          if(!err){
            response.redirect("/product/viewProduct");
          }
          else{
            console.log(err);
          }
        });
  
      }
      else{
        console.log(err);
      }
    });
  };
