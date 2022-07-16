const jwt = require('jsonwebtoken');
const fs = require('fs');


function verifyWithSecret(token) {
    const secret = 'TIK'
    const decoded = jwt.verify(token, secret, { complete: true })
    console.log(decoded)
}

function verifyWithPublicKey(token) {
    const publicKey = fs.readFileSync('./keys/cert/client-cert.pem');
    const decoded = jwt.verify(token, publicKey);
    console.log(decoded)
}


let token = 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiUGV0ZXJzb24iLCJpYXQiOjE2NTc5NDgyNzEsImV4cCI6MTY1Nzk0ODMzMX0.IklCsejVs3UmcwUkwRqx4pT_3Y3PjWr1-IiA-T3jatTcKp9UXczO8pygtxchiVcK3HaQeOdIZQuGtC8G-yoV9nxsK8j_GqiZeCK4OSZG8QQ5dz9m8JbgWZDo3O2FqKz2RMd11DASs7i13XhplW0OjbQ5KHEuNlEqSgf8pIRp8locwDYhtKQFfJan7sJHgCtEH7KpofTraEwK2IMMBCRYf8Atntf9vPPsS1sUA5gCiLFz5RWpqs3zN5cOt0NlRyi3pRdnOG8k1jI1Zy2Pa3YbKn6_pVWTxF6CmuuhnLfm52QFH8e2OL40ZGCt2iNbCsvQ6ywZYtgFu5kvpzHdz0wwFw'
// verifyWithSecret(token)
try {
verifyWithPublicKey(token)
} 