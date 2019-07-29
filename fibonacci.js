const fibonacci = function* (times = undefined) {
  const count = ({ i, a0, a1 }) => ({ i: i + 1, a0: a1, a1: a0 + a1 });
  let fib0 = { i: 0, a0: -1, a1: 1 };
  let fib;
  let test;

  try {
    if (times === undefined) {
      console.warn('endless fibonacci sequence was created')
      test = () => true;
    } else if (typeof times !== 'number') {
      throw new Error('times need a number');
    } else if (times >= 0) {
      test = ({ i }) => i <= times;
    } else {
      console.error('A Negative Number Was Received.');
      console.warn('show test fibonacci sequence');
      test = ({ i }) => i <= 5;
    }
  } catch (e) {
    console.error('An Incorrect Serial Number Was Received.');
  } finally {
    while (test(fib0)) {
      fib = count(fib0);
      yield fib.a1;
      fib0 = fib;
    }
  }
}
