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
        theGrid.splice(4, 4);

        this.setState({grid: theGrid}, ()=>{
            this.gameUpdate();
        });

    }
    
    gameUpdate(){
        var thisGrid = this.state.grid;
            var level = 0;
            for(var i = 22; i >= 0; i--){
                for(var j = 0; j <= 9; j++){
                    var secondVal = i + 1;
                    
                    if(thisGrid[i][j] === 1 && thisGrid[secondVal][j] === 0){
                        thisGrid[i][j] = 0;
                        thisGrid[secondVal][j] = 1;
                    }
                }
            }

        this.setState({grid: thisGrid}, ()=>{
            this.gameUpdate2();
        })
    }

    gameUpdate2(){
        setTimeout(()=>{
            this.gameUpdate();
        }, 500)
    }

    componentWillUnmount() {
        clearInterval(this.interval);
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