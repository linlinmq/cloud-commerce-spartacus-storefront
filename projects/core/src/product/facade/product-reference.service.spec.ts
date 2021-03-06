import { inject, TestBed } from '@angular/core/testing';
import * as ngrxStore from '@ngrx/store';
import { Store, StoreModule } from '@ngrx/store';
import { of } from 'rxjs';
import { ProductReference } from '../../model/product.model';
import * as fromStore from '../store';
import { PRODUCT_FEATURE } from '../store/product-state';
import { ProductReferenceService } from './product-reference.service';

describe('ReferenceService', () => {
  let service: ProductReferenceService;
  let store: Store<fromStore.ProductsState>;
  const productCode = 'productCode';
  const product = {
    code: productCode,
    name: 'testProduct',
  };
  const productReferences: ProductReference[] = [
    { referenceType: 'SIMILAR', target: product },
    { referenceType: 'ACCESSORIES', target: product },
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({}),
        StoreModule.forFeature(PRODUCT_FEATURE, fromStore.getReducers()),
      ],
      providers: [ProductReferenceService],
    });

    store = TestBed.get(Store);
    service = TestBed.get(ProductReferenceService);
    spyOn(store, 'dispatch').and.callThrough();
  });

  it('should ProductReferenceService is injected', inject(
    [ProductReferenceService],
    (productReferenceService: ProductReferenceService) => {
      expect(productReferenceService).toBeTruthy();
    }
  ));

  describe('get(productCode)', () => {
    it('should be able to get product references', () => {
      spyOnProperty(ngrxStore, 'select').and.returnValue(() => () =>
        of(productReferences)
      );
      let result: ProductReference[];
      service.get(productCode).subscribe(data => {
        result = data;
      });

      expect(result).toEqual(productReferences);
    });

    it('should be able to load product references', () => {
      spyOnProperty(ngrxStore, 'select').and.returnValue(() => () =>
        of(undefined)
      );
      service
        .get(productCode)
        .subscribe()
        .unsubscribe();

      expect(store.dispatch).toHaveBeenCalledWith(
        new fromStore.LoadProductReferences({
          productCode: 'productCode',
          referenceType: undefined,
          pageSize: undefined,
        })
      );
    });
  });
});
