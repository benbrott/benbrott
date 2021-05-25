import React from 'react';
import Link from 'next/link';
import styles from 'styles/recipes.module.scss';
import { CATEGORIES } from 'data/recipes';

const Recipes = () => {
  return (
    <div className={styles.container}>
      {CATEGORIES.map(({ category, recipes }) => {
        return (
          <div className={styles.categoryContainer} key={category}>
            <div className={styles.categorySection}>
              <h1>{category}</h1>
              <div className={styles.dots} />
            </div>
            <div className={styles.recipeSection}>
              {Object.entries(recipes).map(([path, recipe]) => {
                return (
                  <Link href={`/recipes/${path}`} key={path}>
                    <a>{recipe.name}</a>
                  </Link>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default React.memo(Recipes);
