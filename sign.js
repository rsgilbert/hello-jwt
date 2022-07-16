const jwt = require('jsonwebtoken')
const fs = require('fs')



function signWithSecret() {
    const secret = 'TIK'
    const token = jwt.sign({ name: 'Jonah' }, secret, { expiresIn: '1d' })
    console.log(token)
}

function signWithPrivateKey() {
    const privateKey = fs.readFileSync('./keys/cert/client-key.pem').toString();
    // console.log(privateKey)
    const token = jwt.sign({ name: 'Peterson' },
        privateKey,
        { algorithm: 'RS256', /* seconds to expire */ expiresIn: 60 })
    console.log(token)
}

signWithPrivateKey()
// signWithSecret()

// t1: 1657945112130
//iat: 1657945039
//exp: 165794996
//ex2: 165795379
//ex3: 165795398

const d2 = new Date(1657946789*1000)
console.log(d2)
