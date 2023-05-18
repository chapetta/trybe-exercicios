const removeItem = require('./removeItem')


describe('Implementando testes para a funçao removeItem', () =>{
  test('verifica se a chamada retorna o array esperado', () => { 
    expect(removeItem([1, 2, 3, 4], 3)).toEqual([1, 2, 4])
   });

   test('verifica se a chamada NAO retorna o array', () => {
    expect(removeItem([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4])
   });

   test('verifica se a chamada removeItem([1, 2, 3, 4], 5) retorna o array esperado', () => {
    expect(removeItem([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4])
   })
})