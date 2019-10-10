import * as React from 'react';

const Task = ({ task: {id, title, state}, onArchiveTask, onPinTask }: any) => (
    <div className="list-item">
        <input type="text" value={title} readOnly={true} />
    </div>
)

export default Task