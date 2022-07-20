import { LanguageActionType } from "../action-types/languageActionType"
import { Dispatch } from 'redux';
import { LanguageAction } from "../actions/languageActions";

export const changeLanguage = (lang: string) => {
  return (dispatch: Dispatch<LanguageAction>) => {
    dispatch({
      type: LanguageActionType.CHANGE_LANGUAGE,
      payload: lang
    })
  }
}