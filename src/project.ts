import {makeProject} from '@motion-canvas/core';

import title from './scenes/title?scene';
import containers from './scenes/containers?scene';

export default makeProject({
  scenes: [title, containers],
});
