export default function toCurrency(value) {
    if (typeof value !== 'number') {
      return value;
    }
    const formatter = new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
    });
    return formatter.format(value);
  }
  