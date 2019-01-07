import { createSelector, MemoizedSelector } from '@ngrx/store';

import * as fromUserDetailsReducer from '../reducers/user-details.reducer';
import { UserDetailsState, UserState, StateWithUser } from '../user-state';
import { User } from '../../../occ/occ-models/index';
import { getUserState } from './feature.selector';

export const getDetailsState: MemoizedSelector<
  StateWithUser,
  UserDetailsState
> = createSelector(
  getUserState,
  (state: UserState) => state.account
);

export const getDetails: MemoizedSelector<StateWithUser, User> = createSelector(
  getDetailsState,
  fromUserDetailsReducer.getDetails
);
