import World from './world';

const root = document.getElementById('root')
const world = new World("hello world") // worldというクラスから
world.sayHello(root) // 括弧内はどこに表示するか