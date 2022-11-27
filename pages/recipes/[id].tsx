import React from 'react';
import { GetStaticProps, GetStaticPaths } from 'next';
import styles from 'styles/recipe.module.scss';
import { Recipe, RecipeSection, ALL_RECIPES, getRecipe } from 'data/recipes';
import classNames from 'utils/classNames';

type RecipePageProps = {
  recipe: Recipe;
};

const RecipePage = ({ recipe }: RecipePageProps) => {
  const { name, portion, ingredients, directions } = recipe;

  const renderListSection = (section: RecipeSection, ordered: boolean) => {
    const List = ordered ? 'ol' : 'ul';
    return Array.isArray(section) ? (
      <List>
        {section.map((item, index) => (
          <li key={`list_item_${index}`}>{item}</li>
        ))}
      </List>
    ) : (
      Object.keys(section).map(subsection => (
        <React.Fragment key={`subsection_${subsection}`}>
          <h3>{subsection}</h3>
          <List>
            {section[subsection].map((item, index) => (
              <li key={`list_item_${index}`}>{item}</li>
            ))}
          </List>
        </React.Fragment>
      ))
    );
  };

  const ingredientsSection = renderListSection(ingredients, false);
  const directionsSection = renderListSection(directions, true);

  const portionInfo = `${portion.verb} ${portion.quantity}${portion.units ? ' ' + portion.units : ''}`;

  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        <h1>{name}</h1>
        <div className={styles.portion}>{portionInfo}</div>
      </div>
      <div className={styles.rows}>
        <div className={styles.row}>
          <h2>Ingredients</h2>
          <div className={classNames([styles.textContainer, styles.ingredients])}>{ingredientsSection}</div>
        </div>
        <div className={styles.row}>
          <h2>Directions</h2>
          <div className={classNames([styles.textContainer, styles.directions])}>{directionsSection}</div>
        </div>
      </div>
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = Object.keys(ALL_RECIPES).map(id => `/recipes/${id}`);
  return {
    paths,
    fallback: false
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (params && params.id) {
    const recipeId = Array.isArray(params.id) ? params.id[0] : params.id;
    const recipe = getRecipe(recipeId);
    return {
      props: {
        recipe
      }
    };
  }
  return { props: {} };
};

export default RecipePage;
