import { LanguageActionType } from '../action-types/languageActionType';

interface ChangeLanguageAction {
  type: LanguageActionType.CHANGE_LANGUAGE,
  payload: string
}

export type LanguageAction = ChangeLanguageAction 