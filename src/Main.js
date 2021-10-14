import React from 'react';

const App = () => {

    const [data, setData] = React.useState(['A', 'B', 'C', 'D']);
    const [drageddata, setDragedata] = React.useState('');
    const [selecteddata, setSelecteddata] = React.useState([]);



    function handleDrag(e) {
        let id = e.target.id;
        // console.log(id)
        // console.log(data[id])
        setDragedata(data[id])
        // setSelecteddata([...selecteddata, drageddata])



        // drageddata = data[id]
    }

    const selectcomponent = (e) => {


        e.stopPropagation();
        e.preventDefault();
        console.log(selecteddata)
        console.log(drageddata)




        setSelecteddata([...selecteddata, drageddata])


        console.log("tjis is ondrage")





    }



    return (
        <div>

            <div style={{ backgroundColor: 'blue', height: 200, marginTop: 20, marginLeft: 20, marginRight: 20, marginBottom: 20 }}>
                <p>Drag Component from here</p>

                {
                    data.map((item, index) => {
                        return (<div id={index} draggable onDragStart={handleDrag} style={{ display: 'inline-block', height: 100, width: 100, marginTop: 20, backgroundColor: 'red', marginLeft: 20 }}>
                            <p>{item}</p>
                        </div>)
                    })
                }







            </div>

            <div onDragLeave={selectcomponent} style={{ backgroundColor: 'green', height: 200, marginTop: 20, marginLeft: 20, marginRight: 20, marginBottom: 20 }}>

                Drop Component here

                <div>
                    {
                        selecteddata.map((item, index) => {
                            return (<div style={{ display: 'inline-block', height: 100, width: 100, marginTop: 20, backgroundColor: 'red', marginLeft: 20 }}>
                                {item}
                            </div>)
                        })
                    }
                </div>

            </div>

            <div style={{ backgroundColor: 'yellow', height: 200, marginTop: 20, marginLeft: 20, marginRight: 20, marginBottom: 20 }}>

                Report will generate here

                <table style={{ marginLeft: 100 }}>
                    <th >Selected Items</th>

                    <tr>
                        <td>
                            {
                                selecteddata.map((item, index) => { return (<tr>{item}</tr>) })
                            }
                        </td>
                    </tr>

                </table>

            </div>
        </div>
    )
}


export default App;



