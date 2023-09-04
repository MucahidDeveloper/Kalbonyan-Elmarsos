import React, { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';
import Card from '../UI/Card';
import ExpenseFilter from './ExpenseFilter';
function Expenses(props){
    const [filterYear,setFilterYear] = useState('2019');
    const filterChangedHandler = selectedYear =>{
        setFilterYear(selectedYear);
    }
    const filteredExpenses = props.items.filter(expense => {return expense.date.getFullYear().toString() === filterYear })
    return(
        <div>
        <Card className="expenses">
            <ExpenseFilter selectedYear={filterYear} onChangeFilter = {filterChangedHandler}/>
            {filteredExpenses.map((item) => (
                <ExpenseItem 
                    key={item.id}
                    title={item.title} 
                    price={item.amount} 
                    date={item.date} 
                />
                )
            )}
        </Card>
        </div>
    )
}
export default Expenses;