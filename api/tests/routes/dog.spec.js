/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require('chai');
const session = require('supertest-session');
const app = require('../../src/app.js');
const { Dog, conn } = require('../../src/db.js');

const agent = session(app);
const dog = {
  name: 'Pug',
};

describe('Dog routes', () => {
  before(() => conn.authenticate()
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  }));
  beforeEach(() => Dog.sync({ force: true })
    .then(() => Dog.create(dog)));
  describe('GET /dogs', () => {
    it('should get 200', () =>
      agent.get('/dogs').expect(200)
    );
  });
  describe("/details/:id", () => {
    it("Should give a 200 response and show the details of a dog with the id required", (done) => {
      try {
        agent
          .get("/details/71")
          .expect("Content-Type", /json/)
          .expect(200)
          .end((err, res) => {
            if (err) {
              return done(err);
            }
            expect(res.body).to.have.property("id");
            expect(res.body).to.have.property("name");
            done();
          });
      } catch (error) {
        done(error);
      }
    });
  });
  
});
