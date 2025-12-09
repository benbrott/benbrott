import { Fragment } from 'react';
import { notFound } from 'next/navigation';
import styles from '@/styles/recipe.module.scss';
import { ALL_RECIPES } from '@/app/recipes/data';
import { type RecipeSection } from '@/types/recipes';
import classNames from '@/utils/classNames';

const RecipePage = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  const recipe = ALL_RECIPES[slug];
  if (!recipe) {
    return notFound();
  }
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
        <Fragment key={`subsection_${subsection}`}>
          <h3>{subsection}</h3>
          <List>
            {section[subsection].map((item, index) => (
              <li key={`list_item_${index}`}>{item}</li>
            ))}
          </List>
        </Fragment>
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

export default RecipePage;
