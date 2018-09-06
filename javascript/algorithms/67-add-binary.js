function addBinary(a, b) {
  let carry = 0;
  let i = a.length - 1;
  let j = b.length - 1;
  let result = '';

  while (i >= 0 || j >= 0 || carry > 0) {
    const bita = i >= 0 ? Number(a[i]) : 0;
    const bitb = j >= 0 ? Number(b[j]) : 0;
    const sum = bita + bitb + carry;
    result = `${sum % 2}${result}`;
    carry = Math.floor(sum / 2);
    i -= 1;
    j -= 1;
  }

  return result;
}
