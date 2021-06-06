export default function notExistSample() {
  let name = null;
  name = "トラハック";
  console.log("notExsistsample1:", typeof name, name)
  if (!name){
    console.log("notExsistsample1:", "吾輩は猫である. 名前はまだ"+name)
  } else {
    console.log("notExsistsample1:", "吾輩は猫である. 名前は"+name)
  }

  let age = undefined;
  console.log("notExsistsample2:", typeof age, age)
  age = 28

  if (!age) {
    console.log("ageは秘密です")
  } else {
    console.log("ageは"+age+"です")
  }
}