import React from 'react';
import 'App.scss';
import { TodoContext } from 'Contexts/Todo';
import get from 'lodash/get';
import { v4 } from 'uuid';
import { TodoDataInterface } from 'Components/Todo';

const ADD = 'add'
const EDIT = 'edit'

export const App = () => {
  const [form, setForm] = React.useState<{ description: string }>({ description: '' })
  const [mode, setMode] = React.useState<{ type: 'edit'|'add', alias: string}>({ type: ADD, alias: '' })
  const { add, edit, remove, todo }: any = React.useContext(TodoContext)

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value
    })
  }

  const onSubmit = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault()
    /* Dispatch */
    const alias = mode.type === EDIT ? mode.alias : v4()
    const data = { alias, description: form.description }
    if (mode.type === ADD) add(data)
    if (mode.type === EDIT) edit(data)

    /* Clear */
    const clearForm: any = Object.keys(form).reduce((newForm, field) => ({ ...newForm, [field]: '' }), {})
    setForm(clearForm)
    setMode({
      type: ADD,
      alias: ''
    })
  }

  const onEdit = (data: { item: TodoDataInterface }): void  => {
    setMode({
      type: EDIT,
      alias: get(data, 'item.alias', '')
    })
    setForm({
      ...form,
      description: get(data, 'item.description', '')
    })
  }

  const onRemove = (data: { item  : TodoDataInterface }): void => remove(data.item)

  const TodoForm = (
    <>
      <form>
        <input
          value={form.description}
          type="text"
          name="description"
          onChange={onChange} />
        <button onClick={onSubmit}>
          { mode.type === ADD ? 'Add' : 'Edit' } Todo
        </button>
      </form>
    </>
  )

  return (
      <>
        <div className="container-fluid">
            <div className="row">
              <div className="col p-5 m-5">
                <div>
                  <ul className="list p-0">
                    {
                      Array.isArray(todo) && todo.length > 0 && todo.map((item, index) => {
                        return (
                          <li className="item d-flex justify-content-between align-items-center" key={`${v4()}-${index}`}>
                            <div>
                              { get(item, 'description', '') }
                            </div>
                            <div>
                              <button onClick={() => onEdit({ item })}>Edit</button>
                              <button onClick={() => onRemove({ item })}>Remove</button>
                            </div>
                          </li>
                        )
                      })
                    }
                  </ul>
                  { TodoForm }
                </div>
              </div>
            </div>
        </div>
        <footer>
            { new Date().getFullYear() } &copy; All Rights Reserved. Photon Enterprise
        </footer>
      </>
  );
}

export default App;
