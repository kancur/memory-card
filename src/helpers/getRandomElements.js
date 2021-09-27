import shuffle from "./shuffle";

export default function getRandomElements(array, n) {
  if (n > array.length) {
    throw new Error('Number of requested random elements is higher than number of elements in the array')
  }
  const newArray = shuffle(array)
  return newArray.slice(0, n);
}