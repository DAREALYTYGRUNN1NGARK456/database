const Database = require("@replit/database");
const db = new Database();
db.set("accounts", "username").then(() => {});
db.get("accounts").then(value => {});
//db.delete("key").then(() => {});
exports.keys = db.list().then(keys => {});
exports.matches = db.list("prefix").then(matches => {});
console.log(`${keys} ${matches}`)






