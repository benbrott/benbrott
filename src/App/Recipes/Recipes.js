import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './Recipes.module.scss';
import { DATA } from './data';
import withFormFactor from 'utils/withFormFactor';
import { KEYS, killEvent } from 'utils/events';

class Recipes extends React.PureComponent {
  static propTypes = { isDark: PropTypes.bool }
  static defaultProps = { isDark: false }

  constructor(props) {
    super(props);
    this.state = { openIndex: -1 };
  }

  onRecipeHeaderClick = index => {
    const isOpen = index === this.state.openIndex;
    this.setState({ openIndex: isOpen ? -1 : index })
  }

  onRecipeHeaderKeyPress = (event, index) => {
    switch (event.key) {
      case KEYS.ENTER:
        this.onRecipeHeaderClick(index);
        break;
      case KEYS.SPACE:
        killEvent(event);
        this.onRecipeHeaderClick(index);
        break;
      default:
        break;
    }
  }

  renderListSection = (data, ordered, themeClass) => {
    const List = ordered ? 'ol' : 'ul';
    return Array.isArray(data) ? (
      <List className={styles.list}>
        {data.map(item => <li>{item}</li>)}
      </List>
    ) : Object.keys(data).map(section => (
      <div>
        <h5 className={classNames([styles.label, themeClass])}>
          - - - {section} - - -
        </h5>
        <List className={styles.list}>
          {data[section].map(item => <li>{item}</li>)}
        </List>
      </div>
    ));
  }

  renderRecipeLists = (ingredients, directions, themeClass) => {
    const headerClasses = classNames([styles.label, themeClass]);
    return (
      <div>
        <h4 className={headerClasses}>INGREDIENTS</h4>
        {this.renderListSection(ingredients, false, themeClass)}
        <h4 className={headerClasses}>DIRECTIONS</h4>
        {this.renderListSection(directions, true, themeClass)}
      </div>
    );
  }

  renderOpenRecipeDesktop = () => {
    const openIndex = this.state.openIndex;
    if (openIndex === -1) {
      return;
    }
    const themeClass = this.props.isDark ? styles.dark : styles.light;
    const { ingredients, directions } = DATA[openIndex];
    return (
      <div className={classNames([styles.openRecipeDesktop, themeClass])}>
        {this.renderRecipeLists(ingredients, directions, themeClass)}
      </div>
    );
  }

  renderRecipe = (recipe, index, isMobile) => {
    const { name, serves, makes, time, ingredients, directions } = recipe;
    const themeClass = this.props.isDark ? styles.dark : styles.light;
    const isOpen = index === this.state.openIndex;
    const props = {
      className: classNames([
        styles.recipe,
        isOpen && styles.open,
        isMobile && styles.mobile,
        themeClass
      ]),
      onClick: () => this.onRecipeHeaderClick(index),
      onKeyPress: event => this.onRecipeHeaderKeyPress(event, index),
      tabIndex: 0
    };
    const portion = serves ? `Serves ${serves}` : `Makes ${makes}`
    return(
      <div {...props}>
        <h3 className={classNames([styles.label, styles.noMargin, themeClass])}>
          {name}
        </h3>
        <span>{portion} | {time}</span>
        {isMobile && isOpen && this.renderRecipeLists(ingredients, directions, themeClass)}
      </div>
    );
  }

  render() {
    const isMobile = this.props.isMobile;
    return (
      <div className={styles.container}>
        <div className={classNames([styles.recipes, isMobile && styles.mobile])}>
          {DATA.map((recipe, index) =>  this.renderRecipe(recipe, index, isMobile))}
        </div>
        {!isMobile && this.renderOpenRecipeDesktop()}
      </div>
    );
  }
}

export default withFormFactor(Recipes);