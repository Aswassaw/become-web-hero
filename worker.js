let count = 0;

function countPlus() {
  setInterval(() => {
    count += 1;
  }, 1000);

  console.log("Web Worker Running");
}

countPlus();
