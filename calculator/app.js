const allD = document.querySelectorAll('li');
const num = document.querySelector('[name="num"]');

num.addEventListener('change', () => {
  const dec = num.value;

  const getAro = (dec) => {
    const bin = dec2bin(dec).padStart(4, '0');
    console.log(bin);
    let H = [];
    for (let i = 0; i < 4; i++) {
      bin[i] == 1 ? (H[i] = true) : (H[i] = false);
    }
    return H;
  };
  console.log(getAro(dec));
  const [A, B, C, D] = getAro(dec);
  let d1, d2, d3, d4, d5, d6, d7;
  d1 = A || C || (D && B) || (!B && !D);
  d2 = !B || (!C && !D) || (C && D);
  d3 = B || !C || D;
  d4 = A || (!B && !D) || (!B && C) || (!D && C) || (B && !C && D);
  d5 = (!B && !D) || (C && !D);
  d6 = A || (B && !C) || (B && !D) || (!C && !D);
  d7 = A || (B && !C) || (!B && C) || (C && !D);
  const lighter = [d1, d2, d3, d4, d5, d6, d7];
  console.log(lighter);
  allD.forEach((el, i = 0) => {
    if (lighter[i] === true) {
      el.style.opacity = '1';
      i = +1;
    } else {
      el.style.opacity = '0.1';
      i = +1;
    }
  });
});

function dec2bin(dec) {
  return (dec >>> 0).toString(2);
}
