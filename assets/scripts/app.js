// alert('js connected');
const customers = ['Matt', 'Sandra', 'Liam', 'Connor'];

const activeCustomers = ['Matt', 'Sandra'];

const inactiveCustomers = _.difference(customers, activeCustomers);

console.log(inactiveCustomers);
