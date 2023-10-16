import React, {useState} from 'react';
import './App.css';
import AppTable from "./app-table/table";
import {ITableColumn} from "./app-table/models";

function App() {
    const [tableDataWeekends, setTableDataWeekends] = useState<ITableColumn[]>(
        [{
            id:"1",
            title:"device 01",
            timeSlots:[]
        },
            {
                id:"2",
                title:"device 02",
                timeSlots:[]
            },
            {
                id:"3",
                title:"device 03",
                timeSlots:[]
            },
            {
                id:"4",
                title:"device 04",
                timeSlots:[]
            },
            {
                id:"5",
                title:"device 05",
                timeSlots:[]
            }]
    );
    return (
        <div className="App">
            <AppTable data={tableDataWeekends} mode={"Edit"} onChange={(data) => {
                setTableDataWeekends(data);
            }}/>
        </div>
    );
}

export default App;
