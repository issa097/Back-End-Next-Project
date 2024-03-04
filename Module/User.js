const db = require("../DataBase/db")
const user = "user"


function register(username, email, password) {
    const querytext = `INSERT INTO public.${user} ( username, email, password) VALUES ($1, $2, $3)  RETURNING *`
    const values = [username, email, password]
    return db.query(querytext, values)
}

function getEmail(email) {
    console.log("emailssss")
    const queryText = `SELECT * FROM public.${user} WHERE email = $1`;
    const value = [email];
    return db.query(queryText, value)

}


module.exports = {
    register,
    getEmail
}