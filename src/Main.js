import React, { Component } from 'react';
import './App.css';

export default class AppDragDropDemo extends Component {
    state = {
        tasks: [
            { name: "A", category: "boxone", bgcolor: "yellow" },
            { name: "B", category: "boxone", bgcolor: "pink" },
            { name: "C", category: "boxone", bgcolor: "green" },
            { name: "D", category: "boxone", bgcolor: "skyblue" }
        ]
    }

    onDragStart = (ev, id) => {
        console.log('dragstart:', id);
        ev.dataTransfer.setData("id", id);
    }

    onDragOver = (ev) => {
        ev.preventDefault();
    }

    onDrop = (ev, cat) => {
        let id = ev.dataTransfer.getData("id");

        let tasks = this.state.tasks.filter((task) => {
            if (task.name == id) {
                task.category = cat;
            }
            return task;
        });

        this.setState({
            ...this.state,
            tasks
        });
    }

    render() {
        var tasks = {
            boxone: [],
            boxtwo: []
        }

        this.state.tasks.forEach((t) => {
            tasks[t.category].push(
                <div key={t.name}
                    onDragStart={(e) => this.onDragStart(e, t.name)}
                    draggable
                    className="draggable"
                    style={{ backgroundColor: t.bgcolor, marginTop: 20, width: 50, height: 50, marginLeft: 20 }}
                >
                    {t.name}
                </div>
            );
        });


        return (
            <div >

                <h1>React Drag and Drop Example</h1>

                <div style={{ marginTop: 20, marginLeft: '20%', marginRight: 20, width: 600, height: 400, backgroundColor: 'green' }}>

                    <div
                        style={{ float: 'left', marginTop: 20, marginLeft: 20, marginRight: 20, height: 300, width: 200, backgroundColor: 'red' }}
                        onDragOver={(e) => this.onDragOver(e)}
                        onDrop={(e) => { this.onDrop(e, "boxone") }}>
                        <span>Box one</span>


                        {tasks.boxone}





                    </div>




                    <div
                        onDragOver={(e) => this.onDragOver(e)}

                        onDrop={(e) => this.onDrop(e, "boxtwo")}
                        style={{ marginTop: 20, marginLeft: 20, marginRight: 20, height: 300, width: 200, backgroundColor: 'red', float: 'right', }}>
                        <span >Box two</span>

                        {tasks.boxtwo}



                    </div>










                </div>






                <div style={{ marginLeft: '20%', marginTop: 20, backgroundColor: 'yellow', width: 600, height: 200, marginBottom: 20 }}>
                    <p>Report Will generate here</p>

                    <table>
                        <th>Box one components</th>
                        <th style={{ marginLeft: 50 }}>Box two components</th>
                        <tr>
                            <td>
                                {
                                    tasks.boxone.map((item, index) => {

                                        return (<tr>{item.key}</tr>)
                                    })
                                }

                            </td>
                            <td>
                                {
                                    tasks.boxtwo.map((item, index) => {

                                        return (<tr>{item.key}</tr>)
                                    })
                                }
                            </td>
                        </tr>

                    </table>
                </div>







            </div>
        );
    }
}