import moment from 'moment';
import { viewPorts, websiteUrl } from '../support/config';
import _ from 'lodash';

describe(`I'm able to execute search`, function() {

  viewPorts.forEach(viewPort => {

    describe(`Search on ${viewPort.join(', ')} viewport`, () => {


      const departureDate = moment().add(2, 'month').date(5);
      const returnDate = departureDate.clone().date(17);
      const dateFormat = 'DD-MM-YYYY';

      beforeEach(function() {
        cy.viewport(...viewPort)
        cy.server({ force404: true });
      })

      it(`Executes the search and receives results`, function() {
        const searchResultsRequest = require('../fixtures/getSearchResults_request');
        const searchResultsResponse = require('../fixtures/getSearchResults_response')(departureDate, returnDate);

        const searchIdRequest = require('../fixtures/getSearchId_request')(departureDate, returnDate);
        const searchIdResponse = require('../fixtures/getSearchId_response');

        cy.route('POST', 'api/getSearchId', searchIdResponse).as('getSearchId');
        cy.route('POST', 'api/getSearchResults', searchResultsResponse).as('getSearchResults');

        cy.visit(`${websiteUrl}/results/AMS-VNO/${departureDate.format('YYYY-MM-DD')}/${returnDate.format('YYYY-MM-DD')}/1,0,0/`)

        cy.wait('@getSearchId').its('request').then(request => {
          expect(request.body).to.deep.eq({ testParam: 'testParamValue' })
        });
        cy.wait('@getSearchResults').its('request').then(request => {
          expect(request.body).to.deep.eq({ searchId: "testSearchId" })
        });
      });

    });
  });
});
