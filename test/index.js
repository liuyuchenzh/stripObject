const { default: SO } = require('../index.js')

const so = new SO()
const sso = new SO(true)

const obj = {
  a: 1,
  b: '',
  c: false,
  d: null,
  e: undefined,
  f: 0
}

const result = so.strip(obj)
const resultS = sso.strip(obj)

function test() {
  const removed = ['b', 'c', 'd', 'e', 'f'].every(key => !(key in result))
  console.log('test non-strict, %s', removed ? 'pass' : 'fail')
}

function testStrict() {
  const left = ['b', 'd', 'e', 'f'].every(key => key in resultS)
  const removed = !('c' in resultS)
  console.log('test strict, %s', left && removed ? 'pass' : 'fail')
}

test()
testStrict()
