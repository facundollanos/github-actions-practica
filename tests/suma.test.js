const { suma, multiplicar } = require('../src/suma');

let errores = 0;

function assert(descripcion, condicion) {
  if (condicion) {
    console.log(`  PASS: ${descripcion}`);
  } else {
    console.error(`  FAIL: ${descripcion}`);
    errores++;
  }
}

console.log('Corriendo tests...');
assert('suma(2, 3) === 5', suma(2, 3) === 5);
assert('suma(0, 0) === 0', suma(0, 0) === 0);
assert('multiplicar(3, 4) === 12', multiplicar(3, 4) === 12);

if (errores > 0) {
  console.error(`\n${errores} test(s) fallaron`);
  process.exit(1);
} else {
  console.log('\nTodos los tests pasaron!');
}
