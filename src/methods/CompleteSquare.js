const CompleteSquare = (a, b, c) => {
  if (a === 0) {
    return [
      "ValueError: Algorithm involves division by Zero",
      "ValueError: Algorithm involves division by Zero"
    ];
  }

  else {
    b = b / a; c = c / a;

    return [
      (Math.sqrt(Math.pow((b / 2), 2) - c) - (b / 2)),
      ((-1 * (Math.sqrt(Math.pow((b / 2), 2) - c))) - (b / 2)),
    ];
  }

  // TODO: Add support for returning complex roots instead of NaN
};

export default CompleteSquare;