let user = {username : 'Mo', password: '123', email: 'Sfer@gmail.com'}
console.log(user.username)
console.log(user.password)
console.log(user['password'])
console.log(user.email)
user.phoneNumber = '11111111'

let roles = ['Answer emails', 'make powerpoints']
user.roles = roles
console.log(user)

let contact = {office: 'T.3030', phone:'55555555'}
user.contact = contact
console.log(user)
