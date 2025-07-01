const sorting = require("../../app");

describe("Books names test suit", () => {
  it("Books names should be sorted in ascending order", () => {
    const data = [
      "Гарри Поттер",
      "Властелин Колец",
      "Волшебник изумрудного города",
    ];

    const expected = [
      "Властелин Колец",
      "Волшебник изумрудного города",
      "Гарри Поттер",
    ];

    const result = sorting.sortByName(data);
    expect(result).toEqual(expected);
  });

  it("should handle equal strings correctly", () => {
    const data = [
      "Властелин Колец",
      "ВЛАСТЕЛИН КОЛЕЦ",
    ];

    const expected = [
      "Властелин Колец",
      "ВЛАСТЕЛИН КОЛЕЦ",
    ];

    const result = sorting.sortByName(data);
    expect(result).toEqual(expected);
  });

  it("should return an empty array when input is empty", () => {
    const data = [];
    const expected = [];
    const result = sorting.sortByName(data);
    expect(result).toEqual(expected);
  });

  it("should return the same array when there is only one element", () => {
    const data = ["Гарри Поттер"];
    const expected = ["Гарри Поттер"];
    const result = sorting.sortByName(data);
    expect(result).toEqual(expected);
  });

  it("Should throw an exception when calling", () => {
    expect(() => sorting.sortByName()).toThrow();
  });

  it("Should be sorting even if Books names recurring", () => {
    const data = [
      "Гарри Поттер",
      "Властелин Колец",
      "Волшебник изумрудного города",
      "Властелин Колец",
    ];

    const expected = [
      "Властелин Колец",
      "Властелин Колец",
      "Волшебник изумрудного города",
      "Гарри Поттер",
    ];

    const result = sorting.sortByName(data);
    expect(result).toEqual(expected);
  });

  it("should handle leading/trailing spaces correctly", () => {
    const data = [
      "  Гарри Поттер  ",
      "ГАРРИ ПОТТЕР",
    ];

    const expected = [
      "  Гарри Поттер  ",
      "ГАРРИ ПОТТЕР",
    ];

    const result = sorting.sortByName(data);
    expect(result).toEqual(expected);
  });
});