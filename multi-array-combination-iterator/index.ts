export class MultiArrayCombinationIterator {
  private indexes: number[];
  private arrays: any[][];

  constructor(arrays: any[][]) {
    this.arrays = arrays;
    this.indexes = [];
  }

  getNextElement(): any[] | undefined {
    if (this.indexes.length === 0) {
      this.indexes = this.arrays.map(() => 0);
    } else {
      this.shift(this.indexes.length - 1);
    }

    if (this.indexes.every(i => i === -1)) {
      return;
    }
    return this.arrays.map((array, index) => array[this.indexes[index]]);
  }

  private shift(position: number): void {
    let newValue = this.indexes[position] + 1;

    if (this.arrays[position].length === newValue) {
      newValue = 0;
      if (position !== 0) {
        this.indexes[position] = newValue;
        return this.shift(position - 1);
      } else {
        this.indexes = this.indexes.map(() => -1);
        return;
      }
    }

    this.indexes[position] = newValue;
  }
}
