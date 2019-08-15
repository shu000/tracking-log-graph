import React from 'react';
import { connect } from 'react-redux';

import Tracks from '../component/tracks';

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(Tracks);
