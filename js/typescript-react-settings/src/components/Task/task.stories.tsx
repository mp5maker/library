import * as React from 'react';

// @ts-ignore
import { storiesOf } from '@storybook/react';
// @ts-ignore
import { action } from '@storybook/addon-actions';

import Task from '.'


/* Alternative */
// export default { title: 'Task' };
// export const withText = () => <input type="button" value="Hello"/>


/* They are usually function but we are using them in stories */
export const task = {
    id: '1',
    title: 'Test Task',
    state: 'TASK_INBOX',
    updatedAt: new Date(2019, 0, 1, 9, 0)
}

export const actions = {
    onPinTask: action
}

storiesOf('Task', module)
    .add('default', () => <Task task={task} {...actions} />)
    .add('pinned', () => <Task task={{ ...task, state: 'TASK_PINNED' }} {...actions} />)
    .add('archived', () => <Task task={{ ...task, state: 'TASK_ARCHIVED' }} {...actions} />)