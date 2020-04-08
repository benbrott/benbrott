import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './Recipes.module.scss';
import { DATA } from './data';
import { KEYS, killEvent } from 'utils/events';

class Recipes extends React.PureComponent {
  static propTypes = { isDark: PropTypes.bool }
  static defaultProps = { isDark: false }

  constructor(props) {
    super(props);
    this.state = {};
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

  renderRecipeHeader = ({ name, serves, time }, index) => {
    const themeClass = this.props.isDark ? styles.dark : styles.light;
    const headerProps = {
      className: classNames([
        styles.recipeHeader,
        index === this.state.openIndex && styles.open,
        themeClass
      ]),
      onClick: () => this.onRecipeHeaderClick(index),
      onKeyPress: event => this.onRecipeHeaderKeyPress(event, index),
      tabIndex: 0
    };
    return(
      <div {...headerProps}>
        <h2 className={classNames([styles.label, themeClass])}>
          {name}
        </h2>
        <span>Serves {serves} | {time}</span>
      </div>
    );
  }

  renderOpenRecipe = () => {
    const openIndex = this.state.openIndex;
    if (openIndex > -1) {
      const themeClass = this.props.isDark ? styles.dark : styles.light;
      const { ingredients, directions } = DATA[openIndex];
      return (
        <div className={classNames([styles.recipe, themeClass])}>
          <h3 className={classNames([styles.label, themeClass])}>
            INGREDIENTS
          </h3>
          <ul>
            {ingredients.map(item => <li>{item}</li>)}
          </ul>
          <h3 className={classNames([styles.label, themeClass])}>
            DIRECTIONS
          </h3>
          <ol>
            {directions.map(step => <li>{step}</li>)}
          </ol>
        </div>
      )
    }
    return;
  }

  render() {
    return (
      <div className={styles.container}>
        <div className={styles.leftPane}>
          <div className={styles.recipeList}>
            {DATA.map((recipe, index) =>  this.renderRecipeHeader(recipe, index))}
          </div>
        </div>
        {this.renderOpenRecipe()}
      </div>
    );
  }
}

export default Recipes;