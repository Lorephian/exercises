/* 
pt-br
Crie um objeto que possuirá 2 propriedades, ambas do tipo array:
    * receitas: [] 
    * despesas: []
Agora, crie uma função que irá calcular o total de receitas e 
despesas e irá mostrar uma mensagem se a família está com 
saldo positivo ou negativo, seguido do valor do saldo.

en-us
Create an object that will have 2 properties, both of type array:
     * revenues: []
     * expenditure: []
Now create a function that will calculate the total revenue and
expenses and will display a message if the family has
positive or negative balance, followed by the balance amount.
*/

console.log('===== START of exercise | Cash Flow | =====')

const caixa = {
  receitas: [34 + 54 + 78 + 237 + 45 + 58],

  despesas: [45 + 37 + 47 + 102]
}

function fluxoDeCaixa(fluxo) {
  let saldo = [caixa.receitas - caixa.despesas]

  if (saldo) {
    saldo >= 0
    console.log('Saldo Positivo')
  } else {
    console.log('Saldo Negativo')
  }

  return (
    console.log('Receitas', caixa.receitas),
    console.log('Despesas', caixa.despesas),
    console.log('Saldo', saldo)
  )
}

fluxoDeCaixa()

console.log('===== END of exercise | Cash Flow | =====')
