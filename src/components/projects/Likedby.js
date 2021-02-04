import React, { Component } from 'react'

export class Likedby extends Component {
    render() {
        let {list}= this.props;
        console.log(list, 'List')
        return (
            <div >
            { list && list.map(Liker => {
                return (
                  <div>{Liker}</div>
                )
              })}
            </div>
        )
    }
}

export default Likedby
