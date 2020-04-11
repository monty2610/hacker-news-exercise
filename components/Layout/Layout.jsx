import PropTypes from 'prop-types';
import styles from '../../styles/globalStyles';

const Layout = ({ children }) => (
  <div>
    {children}
    <style jsx global>
      {styles}
    </style>
  </div>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
