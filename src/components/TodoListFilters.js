import React from 'react'
import { todoListFilterState } from '../todoAtoms'
import { useRecoilState } from 'recoil'

const TodoListFilters = () => {

  const [filter, setFilter] = useRecoilState(todoListFilterState);

  const updateFilter = ({ target : { value }}) => {
    setFilter(value)
  }

  return (
    <div>
      Filters:
      <select value={filter} onChange={updateFilter} >
        <option value="Show All">All</option>
        <option value="Show Completed">Completed</option>
        <option value="Show Uncompleted">Uncompleted</option>
      </select>
    </div>
  )
}

export default TodoListFilters