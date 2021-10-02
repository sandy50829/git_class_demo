function generateRamdomNumber(maxNum) {
    const random = Math.random(); // 0 - 0.99999999999
    // 0.9 * 6 -> 0 - 5
    const intNum = Math.floor(random * maxNum);
    const result = intNum + 1;
    return result;
  }