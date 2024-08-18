import React from "react";
import classes from './NavigationItems.module.css'
import NavigationItem from "./NavigationItem/NavigationItem";

const navigationItems = (props) => {
  const items = [
    {key: 'about', content: 'About'},
    {key: 'experience', content: 'Experience'},
    {key: 'work', content: 'Work'},
    {key: 'contact', content: 'Contact'},
  ]

  const icons = [
    {key: 'twitter', content: 'twitterLogo'},
    {key: 'linkedIn', content: 'linkedInLogo'},
    {key: 'facebook', content: 'facebookLogo'},
    {key: 'github', content: 'githubLogo'}
  ];

  let navItems = items.map(item =>
    <NavigationItem key={item.key}>
      {item.content}
    </NavigationItem>
  )

  return <ul className={classes.NavigationItems}>
    {navItems}
  </ul>
};

export default navigationItems;