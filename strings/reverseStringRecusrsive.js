const printReverse = (str, idx) => {
  if (str === null || idx >= str.length) {
    return;
  }
  printReverse(str, idx +  1);
  console.log(str[idx]);
}

printReverse("hello", 0);