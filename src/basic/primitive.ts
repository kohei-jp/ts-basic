export default function primitiveSample() {
  let name:string = 'kohei';
  // name = 123;
  console.log("primitiveSample1:", typeof name, name)

  let age:number = 28
  console.log("primitiveSample2:", typeof age, age)

  let isSingle: boolean = true
  console.log("primitiveSample3:", typeof isSingle, isSingle)

  const isOver20: boolean = age >= 20
  console.log("primitiveSample4:", typeof isOver20, isOver20)
}