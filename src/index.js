
require('normalize.css/normalize.css');
require('./styles/index.scss');
// You need to import this to cause webpack to include and compile it.
// Then you can use it like so: '<header class="masthead" style="background-image: url('../src/assets/header.jpg')">'
// Now, when you import MyImage from './my-image.png', that image will be processed and added to your output directory
// and the MyImage variable will contain the final url of that image after processing
import headerIcon from '../src/assets/header.jpg';
