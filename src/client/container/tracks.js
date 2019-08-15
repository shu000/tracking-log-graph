import React from 'react';
import { connect } from 'react-redux';

import Tracks from '../component/tracks';

function mapStateToProps(state) {
  return state;
}

function mapDispatchToProps(dispatch) {
  return { };
}

export default connect(mapStateToProps, mapDispatchToProps)(Tracks);
