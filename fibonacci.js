const fibonacci = (function () {

  const fabcount = function ({i, a0, a1}) {
    return { i: i + 1, a0: a1, a1: a0 + a1 };
  };

  const fibonacciGen = function* () {
    let fab0 = { i: 0, a0: -1, a1: 1 }, fab;

    while (true) {
      fab = fabcount(fab0);
      yield fab.a1;
      fab0 = fab;
    }
  };

  const fibonacci_n = function (n) {
    let fab0 = { i: 0, a0: -1, a1: 1 }, fab;

    while (fab0.i <= n) {
      fab = fabcount(fab0);
      fab0 = fab;
    }

    return fab.a1;
  };

  return function (n) {
    if (n === undefined) {
      return fibonacciGen();
    }

    return fibonacci_n(n);
  };

})();
