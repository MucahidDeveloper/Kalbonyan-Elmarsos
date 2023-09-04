import './ExpensesFilter.css';
 
const ExpensesFilter = (props) => {
  const pickYearHandler = (e) => {
    const yearData = e.target.value;
 
    props.showYearHandler(yearData);
  };
 
  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select onChange={pickYearHandler}>
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
        </select>
      </div>
    </div>
  );
};
 
export default ExpensesFilter;


// Expenses

import '../../style/components/expenses.css';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
 
import { useState } from 'react';
 
const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('');
 
  const addFilterByYear = (newYear) => {
    setFilteredYear(newYear);
    console.log(`Here is from Expenses ${newYear}`);
  };
 
  return (
    <div>
      <Card className='expenses'>
        <ExpensesFilter showYearHandler={addFilterByYear} />
        <ExpenseItem
          title={props.expenses[0].title}
          amount={props.expenses[0].amount}
          date={props.expenses[0].date}
        />
        <ExpenseItem
          title={props.expenses[1].title}
          amount={props.expenses[1].amount}
          date={props.expenses[1].date}
        />
        <ExpenseItem
          title={props.expenses[2].title}
          amount={props.expenses[2].amount}
          date={props.expenses[2].date}
        />
        <ExpenseItem
          title={props.expenses[3].title}
          amount={props.expenses[3].amount}
          date={props.expenses[3].date}
        />
      </Card>
    </div>
  );
};
 
export default Expenses;