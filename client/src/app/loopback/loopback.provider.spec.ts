import {
  beforeEachProviders,
  it,
  describe,
  expect,
  inject
} from '@angular/core/testing';
import { HTTP_PROVIDERS, XHRBackend } from '@angular/http';
import { LoopbackProvider } from './loopback.provider';

describe('Loopback Service', () => {
  beforeEachProviders(() => [
    LoopbackProvider,
    HTTP_PROVIDERS,
    XHRBackend
  ]);

  it('should get a URL property', 
    inject([XHRBackend, LoopbackProvider], (service: LoopbackProvider) => {
      expect(service).toBeTruthy();
    })
  );
  
  it('should format a URL', 
    inject([XHRBackend, LoopbackProvider], (service: LoopbackProvider) => {
      var url = service._parseApiUrl('api/members');
      console.log(url);
      
      expect(url).toBeTruthy();
    })
  );
  
  it('should return the origin url', 
    inject([XHRBackend, LoopbackProvider], (service: LoopbackProvider) => {
      var url = service._getOrigin();
      var expected = 'http://localhost:4200';
      
      console.log(url);
      
      expect(url === expected).toBeTruthy();
    })
  );
});
