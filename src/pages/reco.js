import { atom } from "recoil"

const myCount = atom({
  key: 'mycnt',
  default: 0,
})

const myString = atom({
  key: 'mystr',
  default: 'hello world'
})



export const myAtoms = {
  myCount,
  myString,
}