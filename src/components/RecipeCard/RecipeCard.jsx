import PropTypes from 'prop-types'
import {
    TfiAlarmClock,
    TfiBarChart,
    TfiDashboard    
} from "react-icons/tfi";
import {
    MdDeleteForever,
    MdZoomIn
} from "react-icons/md";
import {
    RecipeInfo,
    InfoBlock,
    Name,
    BadgeList,
    Badge
} from "./RecipeCard.styles";
import { RecipeDifficulty } from 'constants';

import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#root');

export const RecipeCard = ({ item: { id, image, name, time, servings, calories, difficulty }, onDelete, onSelect }) => {    
    return (
        <div>
            <img src={image} alt={name} width="240" />
            <Name>{name}</Name>

            <RecipeInfo>
                <InfoBlock>
                    <TfiAlarmClock size={24} />
                    <span>{time} min</span>
                </InfoBlock>
                <InfoBlock>
                    <TfiDashboard size={24} />
                    <span>{servings} servings</span>
                </InfoBlock>
                <InfoBlock>
                    <TfiBarChart size={24} />
                    <span>{calories} calories</span>
                </InfoBlock>
            </RecipeInfo>

            <div>
                <h3>Difficulty</h3>
                <BadgeList>
                    <Badge active={difficulty === RecipeDifficulty.easy} type={RecipeDifficulty.easy}>Easy</Badge>
                    <Badge active={difficulty === RecipeDifficulty.medium} type={RecipeDifficulty.medium}>Medium</Badge>
                    <Badge active={difficulty === RecipeDifficulty.hard}type={RecipeDifficulty.hard}>Hard</Badge>
                    {/* ПРИКЛАД <Badge active={difficulty === 'Hard'}>Hard {difficulty === 'hard' && 'ACTIVE'}</Badge> */}
                </BadgeList>
            </div>
            <div>
                <button aria-label='Delete' onClick={() => onDelete(id)}>
                    <MdDeleteForever size={20} />
                </button>
                <button aria-label='Zoom' onClick={() => onSelect(image)}>
                    <MdZoomIn size={20} />
                </button>
            </div>

           

        </div>);
};
 
RecipeCard.propTypes = {
    item: PropTypes.shape({
        image: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        time: PropTypes.number.isRequired,
        servings: PropTypes.number.isRequired,
        calories: PropTypes.number.isRequired,
        difficulty: PropTypes.oneOf(["easy", "medium", "hard"]).isRequired,
    }).isRequired,
};