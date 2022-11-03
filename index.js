function getName1(name) {
  return `Имя равно ${name}`
}

const getName2 = function (name) {
  return `Имя равно ${name}`
}

const getName3 = (name) => {
  return `Имя равно ${name}`
}

console.log(getName1('Darya'))
console.log(getName2('Darya'))
console.log(getName3('Darya'))
