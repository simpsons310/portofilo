import React, { Component } from 'react';

class TopBar extends Component {
  items = [
    {key: 'about', content: 'About'},
    {key: 'experience', content: 'Experience'},
    {key: 'work', content: 'Work'},
    {key: 'contact', content: 'Contact'},
  ]

  render() {
    let navItems = this.items.map(item =>
      <li key={item.key}>{item.content}</li>
    )

    return <div>
      <ul>
        { navItems }
      </ul>
    </div>
  }
}

export default TopBar;
