import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Comment from './pages/comment';
import Home from './pages/home';
import Question from './pages/question';

export default createAppContainer(
    createSwitchNavigator({
        Home,
        Question,
        Comment,
    })
);