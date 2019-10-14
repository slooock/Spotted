import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Comment from './pages/comment';
import Home from './pages/home';
import Question from './pages/question';
import Card from './components/card';
import arroz from './pages/teste';

export default createAppContainer(
    createSwitchNavigator({
        Home,
        Question,
        Comment,
        Card,
        arroz,
    })
);