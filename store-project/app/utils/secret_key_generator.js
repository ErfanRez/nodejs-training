const crypto = require("crypto");

const key = crypto.randomBytes(32).toString("hex").toUpperCase();
console.log(key);

//198A9CEF59B0AA0F83CD6B154D9FD969824D849D25F596693E4032176DE8228D
//D5235817FDE4EEC46BE32FA3EC4C8CB84306FC606A37F0B96232AD2041C84F3E
