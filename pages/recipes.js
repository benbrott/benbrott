import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from 'styles/recipes.module.scss';
import { CATEGORIES, DATA } from 'data/recipes';
import withFormFactor from 'utils/withFormFactor';
import KEY_EVENTS from 'utils/events';

const Recipes = ({ formFactor }) => {
  const isPhone = formFactor === 'PHONE';

  const [category, setCategory] = useState('');
  const [openRecipe, setOpenRecipe] = useState({});

  const onRecipeHeaderClick = recipe => {
    const isOpen = recipe.name === openRecipe.name;
    setOpenRecipe(isOpen ? {} : recipe);
  };

  const onRecipeHeaderKeyDown = (event, recipe) => {
    if (KEY_EVENTS.ENTER(event)) {
      onRecipeHeaderClick(recipe);
    }
  };

  const onCategoryClick = categoryClicked => {
    const newCategory = category === categoryClicked ? '' : categoryClicked;
    setCategory(newCategory);
    if (newCategory && newCategory !== openRecipe.category) {
      // Reset the openRecipe state variable if the recipe was just filtered out
      setOpenRecipe({});
    }
  };

  const onCategoryKeyDown = (event, cat) => {
    if (KEY_EVENTS.ENTER(event)) {
      onCategoryClick(cat);
    }
  };

  const renderListSection = (data, ordered) => {
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
          <span className={classNames([styles.heading, styles.subsection_heading])}>- - - {subsection} - - -</span>
          <List className={styles.list}>
            {data[subsection].map((item, index) => (
              <li key={`list_item_${index}`}>{item}</li>
            ))}
          </List>
        </div>
      ))
    );
  };

  const renderRecipeContent = (ingredients, directions, source) => {
    const headerClasses = classNames([styles.heading, styles.section_heading]);
    const sourceSpan = source && <span className={styles.source}> Based on recipe from {source}</span>;
    return (
      <div>
        <span className={headerClasses}>Ingredients</span>
        {renderListSection(ingredients, false)}
        <span className={headerClasses}>Directions</span>
        {renderListSection(directions, true)}
        {sourceSpan}
      </div>
    );
  };

  const renderOpenRecipeDesktop = () => {
    if (!openRecipe.name) {
      return;
    }
    const { ingredients, directions, source } = openRecipe;
    return <div className={styles.openRecipeDesktop}>{renderRecipeContent(ingredients, directions, source)}</div>;
  };

  const renderRecipe = recipe => {
    const { name, serves, makes, time, source, ingredients, directions } = recipe;
    if (category && category !== recipe.category) {
      return null;
    }
    const isOpen = name === openRecipe.name;
    const props = {
      key: `recipe_${name}`,
      className: classNames([styles.recipe, isOpen && styles.open, isPhone && styles.phone]),
      onClick: () => onRecipeHeaderClick(recipe),
      onKeyDown: event => onRecipeHeaderKeyDown(event, recipe),
      tabIndex: 0
    };
    const portion = serves ? `Serves ${serves}` : `Makes ${makes}`;
    return (
      <div {...props}>
        <span className={classNames([styles.heading, styles.recipe_heading])}>{name}</span>
        <span>
          {portion} | {time}
        </span>
        {isPhone && isOpen && renderRecipeContent(ingredients, directions, source)}
      </div>
    );
  };

  const renderCategory = cat => {
    const props = {
      key: `category_${cat}`,
      className: classNames([styles.category, category === cat && styles.selected]),
      onClick: () => onCategoryClick(cat),
      onKeyDown: event => onCategoryKeyDown(event, cat),
      tabIndex: 0
    };
    return (
      <div {...props}>
        <span>{cat}</span>
      </div>
    );
  };

  return (
    <div className={styles.container}>
      <div className={classNames([styles.recipeColumn, isPhone && styles.phone])}>
        <div className={classNames([styles.categories, isPhone && styles.phone])}>
          {Object.values(CATEGORIES).map(cat => renderCategory(cat))}
        </div>
        <div className={styles.recipes}>{DATA.map(recipe => renderRecipe(recipe))}</div>
      </div>
      {!isPhone && renderOpenRecipeDesktop()}
    </div>
  );
};

Recipes.propTypes = { formFactor: PropTypes.string };
Recipes.defaultProps = { formFactor: 'DESKTOP' };

export default withFormFactor(Recipes);
