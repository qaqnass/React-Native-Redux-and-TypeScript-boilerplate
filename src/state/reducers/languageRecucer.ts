import { LanguageAction } from '../actions/languageActions';
import { LanguageActionType } from '../action-types/languageActionType';
import { LanguageState } from '../../models/Language';

const initialState: LanguageState = {
  language: 'Ku',
}

const reducer = (
  state: LanguageState = initialState,
  action: LanguageAction
) => {
  switch (action.type) {
    case LanguageActionType.CHANGE_LANGUAGE:
      return { ...state, language: action.payload };
    default:
      return state;
  }
}

export default reducer;