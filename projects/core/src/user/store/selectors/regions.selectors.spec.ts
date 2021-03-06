import { TestBed } from '@angular/core/testing';
import { Store, StoreModule, select } from '@ngrx/store';

import * as fromActions from '../actions';
import * as fromReducers from '../reducers';
import * as fromSelectors from '../selectors';
import { StateWithUser, USER_FEATURE } from '../user-state';
import { Region } from '../../../model/address.model';

describe('Regions Selectors', () => {
  let store: Store<StateWithUser>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({}),
        StoreModule.forFeature(USER_FEATURE, fromReducers.getReducers()),
      ],
    });

    store = TestBed.get(Store);
    spyOn(store, 'dispatch').and.callThrough();
  });

  describe('getAllRegions', () => {
    it('should return all regions', () => {
      const mockRegions: Region[] = [
        {
          isocode: 'CA-ON',
          name: 'Ontario',
        },
        {
          isocode: 'CA-QC',
          name: 'Quebec',
        },
      ];

      let result: Region[];
      store
        .pipe(select(fromSelectors.getAllRegions))
        .subscribe(value => (result = value));

      expect(result).toEqual([]);

      store.dispatch(new fromActions.LoadRegionsSuccess(mockRegions));

      expect(result).toEqual(mockRegions);
    });
  });
});
