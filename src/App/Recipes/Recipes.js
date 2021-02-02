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
      Object.keys(data).map(subsection => (
        <div key={`subsection_${subsection}`}>
          <span className={classNames([styles.heading, styles.subsection_heading, themeClass])}>
            - - - {subsection} - - -
          </span>
          <List className={styles.list}>
            {data[subsection].map((item, index) => (
              <li key={`list_item_${index}`}>{item}</li>
            ))}
          </List>
        </div>
      ))
    );
  };

  renderRecipeContent = (ingredients, directions, source, themeClass) => {
    const headerClasses = classNames([styles.heading, styles.section_heading, themeClass]);
    const sourceSpan = source && <span className={styles.source}> Based on recipe from {source}</span>;
    return (
      <div>
        <span className={headerClasses}>Ingredients</span>
        {this.renderListSection(ingredients, false, themeClass)}
        <span className={headerClasses}>Directions</span>
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

  renderRecipe = (recipe, isPhone) => {
    const { name, category, serves, makes, time, source, ingredients, directions } = recipe;
    if (this.state.category && this.state.category !== category) {
      return null;
    }
    const themeClass = this.props.isDark ? styles.dark : styles.light;
    const isOpen = name === this.state.openRecipe.name;
    const props = {
      key: `recipe_${name}`,
      className: classNames([styles.recipe, isOpen && styles.open, isPhone && styles.phone, themeClass]),
      onClick: () => this.onRecipeHeaderClick(recipe),
      onKeyDown: event => this.onRecipeHeaderKeyDown(event, recipe),
      tabIndex: 0
    };
    const portion = serves ? `Serves ${serves}` : `Makes ${makes}`;
    return (
      <div {...props}>
        <span className={classNames([styles.heading, styles.recipe_heading, themeClass])}>{name}</span>
        <span>
          {portion} | {time}
        </span>
        {isPhone && isOpen && this.renderRecipeContent(ingredients, directions, source, themeClass)}
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
    const isPhone = this.props.formFactor === 'PHONE';
    return (
      <div className={styles.container}>
        <div className={classNames([styles.recipeColumn, isPhone && styles.phone])}>
          <div className={classNames([styles.categories, isPhone && styles.phone])}>
            {Object.values(CATEGORIES).map(category => this.renderCategory(category))}
          </div>
          <div className={styles.recipes}>{DATA.map(recipe => this.renderRecipe(recipe, isPhone))}</div>
        </div>
        {!isPhone && this.renderOpenRecipeDesktop()}
      </div>
    );
  }
}

export default withFormFactor(Recipes);
