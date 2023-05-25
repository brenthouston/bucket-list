import React, { useState } from 'react';






function TodoForm() {
    const [name, setName] = useState('');

    const handleInputChange = (e) => {
        const { name, value } =e.target;
        return name = 'todoItem'setName(value)


    }
    return (
      <div className="Form text-center">
            <form>
                <input>
                value={todoItem}
                name="todoItem"
                onChange={handleInputChange}
                type="text"
                placeholder="What do you want to get ToDone?"
                </input>
            </form>
      </div>
    );
  }
  
  export default TodoForm;