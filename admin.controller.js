import pool from "../db/dbConfig.js";
export const singInPage = (request, response, next) => {
  console.log("get method")
  response.render("sign-in.ejs");
};
export const signInAction = (request, response, next) => {
  console.log("request body->", request.body)
  let { email, password } = request.body;
  // console.log(pool)
  try {
    pool.getConnection((err, con) => {
      // console.log(con)
      if (!err) {
        let sql = "select * from admin where email =? and password =?";
        con.query(sql, [email, password], (err, result) => {
          con.release();
          if (!err) {
            if (result.length != 0)
              // return response.end("Sign in success....");
              // return response.end("Sing in failed...");
              return response.render("home.ejs");

          }
          else {
            console.log("erro", err);
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

export const singUpPage = (request, response, next) => {
  console.log("get method")
  response.render("sign-up.ejs");
};
export const homePage = (request, response, next) => {
  console.log("Home")
  response.render("home.ejs");
};
export const signUpAction = (request, response, next) => {
  console.log("request body->", request.body)
  let { email, password } = request.body;
  // let abc=request.body.email
  // console.log(pool)
  try {
    pool.getConnection((err, con) => {
      // console.log(con)
      if (!err) {
        let sql = "insert into admin values(?,?)"; 
        con.query(sql, [email, password], (err, result) => {
          con.release();
          if (!err) {
            console.log(result)
            if (result.length != 0)
              // return response.end("Sign in success....");
              // return response.end("Sing in failed...");
              return response.render("sign-in.ejs");

          }
          else {
            console.log("erro", err);
            return response.end(err.sqlMessage);
          }
        });

      }
      else {
        console.log("database",err);
        // return response.end("somthing wrong")
      }

    })
  } catch (error) {
    console.log(error)
  }

}