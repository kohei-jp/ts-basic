export default function unknownSample() {
  let maybeNumber: unknown = 10; // 型がわからない時は、anyではなくunknownで定義する.
  console.log("unknwonsample:", typeof maybeNumber, maybeNumber);
  const isFoo = maybeNumber === "foo"
  console.log("unknwonsample2:", typeof isFoo, isFoo);
  
  if(typeof maybeNumber === "number"){
    const sum = maybeNumber + 10;
    console.log("unknwonsample3:", typeof sum, sum);
  } else {

  }
}