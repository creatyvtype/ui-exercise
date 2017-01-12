import { Injectable } from '@angular/core';

@Injectable()
export class ApiService {
  getVenues() {
    return new Promise(function (resolve) {
      resolve([{
        name:     "The Big Stadium",
        type:     'stadium',
        capacity: 100000
      }, {
        name:     "The Beer Hall",
        type:     "club",
        capacity: 250
      }, {
        name:     "Blue Theater",
        type:     'theater',
        capacity: 200
      }])
    })
  }
}
