import React, { Component } from 'react'
import './listing.css'

import { ListingProps } from '../../models'
import { ItemProps } from '../../models'

import { Item } from '../Item'

export class Listing extends Component {
  constructor(props: ListingProps) {
    super(props)

    this.items = props.items
    console.log(props.items)
  }

  render() {
    return (
      <div className="item-list">
        {this.items.map((item: ItemProps) => (
          <Item 
            item={item}
          />
        ))}
      </div>
    )
  }
}
