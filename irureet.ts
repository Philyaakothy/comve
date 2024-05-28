type IncomeRecord = {
  [key: string]: number;
};

const riyadIncome: IncomeRecord = {
  // ... (other properties with numeric values)
};

const prop: keyof IncomeRecord = 'somePropertyName'; // Replace with actual property name

// Safely accessing the property using TypeScript's type checking
if (prop in riyadIncome) {
  console.log(riyadIncome[prop]);
} else {
  console.error(`Property ${prop} does not exist on riyadIncome object.`);
}
