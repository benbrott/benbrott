import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './Recipes.module.scss';
import { DATA } from './data';

class Recipes extends React.PureComponent {
  static propTypes = { isDark: PropTypes.bool }
  static defaultProps = { isDark: false }

  constructor(props) {
    super(props);
    this.state = {};
  }

  renderRecipe = ({ name, serves, prepTime, cookTime, ingredients }, isOpen) => {
    const isDark = this.props.isDark;
    const contents = isOpen ? ({}

    ) : ({}

    );

    const themeClass = isDark ? styles.dark : styles.light;
    return(
      <div className={classNames([styles.container, themeClass])}>
        <div className={classNames([styles.heading])}>
          <h2 className={classNames([styles.name, themeClass])}>{name}</h2>
          <span className={classNames([styles.info, themeClass])}>
            Serves: {serves} | Prep: {prepTime} | Cook: {cookTime}
          </span>
        </div>
        {/* {contents} */}
      </div>
    );
  }

  render() {
    return DATA.map((recipe, index) => {
      return this.renderRecipe(recipe, index === this.state.openIndex);
    });
  }
}

export default Recipes;