import React, { Component } from 'react';
import "./mainAssets/mainStyles.css"

class Main extends Component {
    constructor(){
        super()

        this.state = {
            grid:[
                [0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0],

                [0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0]
            ],

            shapes: [
                [
                    [0,0,0,1,0,0,0,0,0,0],
                    [0,0,0,1,0,0,0,0,0,0],
                    [0,0,0,1,0,0,0,0,0,0],
                    [0,0,0,1,0,0,0,0,0,0]
                ],
                [
                    [0,0,0,0,0,0,0,0,0,0],
                    [0,0,0,0,0,0,0,0,0,0],
                    [0,0,0,0,1,0,0,0,0,0],
                    [0,0,0,1,1,1,0,0,0,0]
                ],
                [
                    [0,0,0,0,0,0,0,0,0,0],
                    [0,0,0,0,0,0,0,0,0,0],
                    [0,0,0,1,1,0,0,0,0,0],
                    [0,0,0,1,1,0,0,0,0,0]
                ],
                [
                    [0,0,0,0,0,0,0,0,0,0],
                    [0,0,0,1,0,0,0,0,0,0],
                    [0,0,0,1,0,0,0,0,0,0],
                    [0,0,0,1,1,0,0,0,0,0]
                ]
            ]

        }
    }

    gameStart(){
        var whichShape = Math.floor(Math.random() * 4);
        var theGrid = this.state.grid;
        theGrid.unshift(this.state.shapes[whichShape][3]);
        theGrid.unshift(this.state.shapes[whichShape][2]);
        theGrid.unshift(this.state.shapes[whichShape][1]);
        theGrid.unshift(this.state.shapes[whichShape][0]);
        theGrid = theGrid.splice(20, 23);
        this.setState({grid: theGrid});
        console.log(theGrid);

        var thisGrid = this.state.grid;
        setTimeout(function(){
            var level = 4;
            for(let i = 0; i <= 23; i++){
                if(thisGrid[level].every(function(value){
                    return value === 0;
                }) === true){
                    console.log("yes it is")
                }
            }
            console.log(thisGrid, "this grid")
        }, 1000);
    }

    gameUpdate(){

    }

    newShape(){

    }


  render() {
      var gameGrid = this.state.grid.map( (row, i) => {
          return(
              <div key={i} className="row">
                { row[0] === 0 ? <div>{
                    <div className="shape"></div>
                }</div> :
                    <div id="special" className="shape"></div>
                }

                { row[1] === 0 ? <div>{
                    <div className="shape"></div>
                }</div> :
                    <div id="special" className="shape"></div>
                }
             
                { row[2] === 0 ? <div>{
                    <div className="shape"></div>
                }</div> :
                    <div id="special" className="shape"></div>
                }

                { row[3] === 0 ? <div>{
                    <div className="shape"></div>
                }</div> :
                    <div id="special" className="shape"></div>
                }

                { row[4] === 0 ? <div>{
                    <div className="shape"></div>
                }</div> :
                    <div id="special" className="shape"></div>
                }

                { row[5] === 0 ? <div>{
                    <div className="shape"></div>
                }</div> :
                    <div id="special" className="shape"></div>
                }

                { row[6] === 0 ? <div>{
                    <div className="shape"></div>
                }</div> :
                    <div id="special" className="shape"></div>
                }

                { row[7] === 0 ? <div>{
                    <div className="shape"></div>
                }</div> :
                    <div id="special" className="shape"></div>
                }

                { row[8] === 0 ? <div>{
                    <div className="shape"></div>
                }</div> :
                    <div id="special" className="shape"></div>
                }

                { row[9] === 0 ? <div>{
                    <div className="shape"></div>
                }</div> :
                    <div id="special" className="shape"></div>
                }

              </div>
            )

        })
    return (
      <div className="mainBodyWrap">
        <div className="gridWrap">
            {gameGrid}
        </div>
        <button onClick={() => this.gameStart()}>start</button>
      </div>
    );
  }
}

export default Main;