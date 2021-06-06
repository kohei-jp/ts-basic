export default function anySample() {
  let name: any = "kohei" // string型を代入したよ
  console.log("any sample1:", typeof name, name)
  name = 28
  console.log("any sample2:", typeof name, name)
}