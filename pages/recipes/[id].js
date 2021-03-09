import React from 'react';
import styles from 'styles/recipe.module.scss';
import { ALL_RECIPES, getRecipe } from 'data/recipes';

const Recipe = ({ recipe }) => {
  const { name, serves, makes, source, ingredients, directions } = recipe;

  const renderListSection = (data, ordered) => {
    const List = ordered ? 'ol' : 'ul';
    return Array.isArray(data) ? (
      <List>
        {data.map((item, index) => (
          <li key={`list_item_${index}`}>{item}</li>
        ))}
      </List>
    ) : (
      Object.keys(data).map(subsection => (
        <React.Fragment key={`subsection_${subsection}`}>
          <h3>{subsection}</h3>
          <List>
            {data[subsection].map((item, index) => (
              <li key={`list_item_${index}`}>{item}</li>
            ))}
          </List>
        </React.Fragment>
      ))
    );
  };

  const ingredientsSection = renderListSection(ingredients, false);
  const directionsSection = renderListSection(directions, true);

  const portion = serves ? `Serves ${serves}` : `Makes ${makes}`;
  const headingInfo = source ? `${portion} ~ Credit to ${source}` : portion;

  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        <h1>{name}</h1>
        <span>{headingInfo}</span>
      </div>
      <div className={styles.columns}>
        <div>
          <h2>Ingredients</h2>
          {ingredientsSection}
        </div>
        <div>
          <h2>Directions</h2>
          {directionsSection}
        </div>
      </div>
    </div>
  );
};

export async function getStaticPaths() {
  const paths = Object.keys(ALL_RECIPES).map(id => `/recipes/${id}`);
  return {
    paths,
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  const recipe = getRecipe(params.id);
  return {
    props: {
      recipe
    }
  };
}

export default Recipe;
