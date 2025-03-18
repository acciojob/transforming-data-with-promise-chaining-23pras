const output = document.getElementById('output');

document.getElementById('btn').addEventListener('click', () => {
  new Promise((resolve) => {
    setTimeout(() => {
      const num = Number(document.getElementById('ip').value.trim());
      output.textContent = `Result: ${num}`;
      resolve(num);
    }, 2000);
  })
  .then((num) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const mutnum = num * 2;
        output.textContent = `Result: ${mutnum}`;
        resolve(mutnum);
      }, 2000);
    });
  })
  .then((mutnum) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const subnum = mutnum - 3;
        output.textContent = `Result: ${subnum}`;
        resolve(subnum);
      }, 1000);
    });
  })
  .then((subnum) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const divnum = subnum / 2; // Fix: division instead of modulus
        output.textContent = `Result: ${divnum}`;
        resolve(divnum);
      }, 1000);
    });
  })
  .then((divnum) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const addnum = divnum + 10;
        output.textContent = `Final Result: ${addnum}`;
        resolve(addnum);
      }, 1000);
    });
  })
  .catch((err) => {
    console.log('Error:', err);
  });
});
