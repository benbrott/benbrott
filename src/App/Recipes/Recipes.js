import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './Recipes.module.scss';
import { CATEGORIES, DATA } from './data';
import withFormFactor from 'utils/withFormFactor';
import KEY_EVENTS from 'utils/events';

class Recipes extends React.PureComponent {
  static propTypes = { isDark: PropTypes.bool };
  static defaultProps = { isDark: false };

  constructor(props) {
    super(props);
    this.state = { category: '', openRecipe: {} };
  }

  onRecipeHeaderClick = recipe => {
    const isOpen = recipe.name === this.state.openRecipe.name;
    this.setState({ openRecipe: isOpen ? {} : recipe });
  };

  onRecipeHeaderKeyDown = (event, recipe) => {
    if (KEY_EVENTS.ENTER(event)) {
      this.onRecipeHeaderClick(recipe);
    }
  };

  onCategoryClick = categoryClicked => {
    const { category, openRecipe } = this.state;
    const newCategory = category === categoryClicked ? '' : categoryClicked;

    if (newCategory && newCategory !== openRecipe.category) {
      // Reset the openRecipe state variable if the recipe was just filtered out
      this.setState({ category: newCategory, openRecipe: {} });
    } else {
      this.setState({ category: newCategory });
    }
  };

  onCategoryKeyDown = (event, category) => {
    if (KEY_EVENTS.ENTER(event)) {
      this.onCategoryClick(category);
    }
  };

  renderListSection = (data, ordered, themeClass) => {
    const List = ordered ? 'ol' : 'ul';
    return Array.isArray(data) ? (
      <List className={styles.list}>
        {data.map((item, index) => (
          <li key={`list_item_${index}`}>{item}</li>
        ))}
      </List>
    ) : (
      Object.keys(data).map(section => (
        <div key={`section_${section}`}>
          <h5 className={classNames([styles.label, themeClass])}>- - - {section} - - -</h5>
          <List className={styles.list}>
            {data[section].map((item, index) => (
              <li key={`list_item_${index}`}>{item}</li>
            ))}
          </List>
        </div>
      ))
    );
  };

  renderRecipeContent = (ingredients, directions, source, themeClass) => {
    const headerClasses = classNames([styles.label, themeClass]);
    const sourceSpan = source && <span className={styles.source}> Based on recipe from {source}</span>;
    return (
      <div>
        <h3 className={headerClasses}>Ingredients</h3>
        {this.renderListSection(ingredients, false, themeClass)}
        <h3 className={headerClasses}>Directions</h3>
        {this.renderListSection(directions, true, themeClass)}
        {sourceSpan}
      </div>
    );
  };

  renderOpenRecipeDesktop = () => {
    const openRecipe = this.state.openRecipe;
    if (!openRecipe.name) {
      return;
    }
    const { ingredients, directions, source } = openRecipe;
    const themeClass = this.props.isDark ? styles.dark : styles.light;
    return (
      <div className={classNames([styles.openRecipeDesktop, themeClass])}>
        {this.renderRecipeContent(ingredients, directions, source, themeClass)}
      </div>
    );
  };

  renderRecipe = (recipe, isMobile) => {
    const { name, category, serves, makes, time, source, ingredients, directions } = recipe;
    if (this.state.category && this.state.category !== category) {
      return null;
    }
    const themeClass = this.props.isDark ? styles.dark : styles.light;
    const isOpen = name === this.state.openRecipe.name;
    const props = {
      key: `recipe_${name}`,
      className: classNames([styles.recipe, isOpen && styles.open, isMobile && styles.mobile, themeClass]),
      onClick: () => this.onRecipeHeaderClick(recipe),
      onKeyDown: event => this.onRecipeHeaderKeyDown(event, recipe),
      tabIndex: 0
    };
    const portion = serves ? `Serves ${serves}` : `Makes ${makes}`;
    return (
      <div {...props}>
        <h3 className={classNames([styles.label, styles.noMargin, themeClass])}>{name}</h3>
        <span>
          {portion} | {time}
        </span>
        {isMobile && isOpen && this.renderRecipeContent(ingredients, directions, source, themeClass)}
      </div>
    );
  };

  renderCategory = category => {
    const themeClass = this.props.isDark ? styles.dark : styles.light;
    const props = {
      key: `category_${category}`,
      className: classNames([styles.category, this.state.category === category && styles.selected, themeClass]),
      onClick: () => this.onCategoryClick(category),
      onKeyDown: event => this.onCategoryKeyDown(event, category),
      tabIndex: 0
    };
    return (
      <div {...props}>
        <span>{category}</span>
      </div>
    );
  };

  render() {
    const isMobile = this.props.isMobile;
    return (
      <div className={styles.container}>
        <div className={classNames([styles.recipeColumn, isMobile && styles.mobile])}>
          <div className={classNames([styles.categories, isMobile && styles.mobile])}>
            {Object.values(CATEGORIES).map(category => this.renderCategory(category))}
          </div>
          <div className={styles.recipes}>{DATA.map(recipe => this.renderRecipe(recipe, isMobile))}</div>
        </div>
        {!isMobile && this.renderOpenRecipeDesktop()}
      </div>
    );
  }
}

export default withFormFactor(Recipes);
