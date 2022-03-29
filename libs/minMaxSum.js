const minMaxSum = (arr = []) => {
  let numbers = arr.slice().sort();
  let maxScore = 0;
  let minScore = 0;

  if (arr.length > 0) {
    const oneLess = numbers.length - 1;
    for (let i = 0; i < oneLess; i++) {
      minScore += numbers[i];
    }
    for (let j = 1; j < numbers.length; j++) {
      maxScore += numbers[j];
    }

    return [minScore, maxScore];
  }
  return [];
};

export default minMaxSum;
