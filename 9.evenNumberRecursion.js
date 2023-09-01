const printEvenUsingRecursion = (num) => {
  if (num == 0) {
    return 0;
  }

  if (num % 2 == 0) {
    console.log(num);
  }
  printEvenUsingRecursion(num - 1);
};

printEvenUsingRecursion(10);
