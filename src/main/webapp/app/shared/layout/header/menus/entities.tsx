import React from 'react';
import { DropdownItem } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Translate, translate } from 'react-jhipster';
import { NavLink as Link } from 'react-router-dom';
import { NavDropdown } from '../header-components';

export const EntitiesMenu = props => (
  // tslint:disable-next-line:jsx-self-close
  <NavDropdown icon="th-list" name={translate('global.menu.entities.main')} id="entity-menu">
    <DropdownItem tag={Link} to="/entity/region">
      <FontAwesomeIcon icon="asterisk" fixedWidth />&nbsp;<Translate contentKey="global.menu.entities.region" />
    </DropdownItem>
    <DropdownItem tag={Link} to="/entity/country">
      <FontAwesomeIcon icon="asterisk" fixedWidth />&nbsp;<Translate contentKey="global.menu.entities.country" />
    </DropdownItem>
    <DropdownItem tag={Link} to="/entity/location">
      <FontAwesomeIcon icon="asterisk" fixedWidth />&nbsp;<Translate contentKey="global.menu.entities.location" />
    </DropdownItem>
    <DropdownItem tag={Link} to="/entity/department">
      <FontAwesomeIcon icon="asterisk" fixedWidth />&nbsp;<Translate contentKey="global.menu.entities.department" />
    </DropdownItem>
    <DropdownItem tag={Link} to="/entity/task">
      <FontAwesomeIcon icon="asterisk" fixedWidth />&nbsp;<Translate contentKey="global.menu.entities.task" />
    </DropdownItem>
    <DropdownItem tag={Link} to="/entity/employee">
      <FontAwesomeIcon icon="asterisk" fixedWidth />&nbsp;<Translate contentKey="global.menu.entities.employee" />
    </DropdownItem>
    <DropdownItem tag={Link} to="/entity/job">
      <FontAwesomeIcon icon="asterisk" fixedWidth />&nbsp;<Translate contentKey="global.menu.entities.job" />
    </DropdownItem>
    <DropdownItem tag={Link} to="/entity/job-history">
      <FontAwesomeIcon icon="asterisk" fixedWidth />&nbsp;<Translate contentKey="global.menu.entities.jobHistory" />
    </DropdownItem>
    <DropdownItem tag={Link} to="/entity/blog">
      <FontAwesomeIcon icon="asterisk" fixedWidth />&nbsp;<Translate contentKey="global.menu.entities.blog" />
    </DropdownItem>
    <DropdownItem tag={Link} to="/entity/entry">
      <FontAwesomeIcon icon="asterisk" fixedWidth />&nbsp;<Translate contentKey="global.menu.entities.entry" />
    </DropdownItem>
    <DropdownItem tag={Link} to="/entity/tag">
      <FontAwesomeIcon icon="asterisk" fixedWidth />&nbsp;<Translate contentKey="global.menu.entities.tag" />
    </DropdownItem>
    {/* jhipster-needle-add-entity-to-menu - JHipster will add entities to the menu here */}
  </NavDropdown>
);
