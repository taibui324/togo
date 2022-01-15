
const chaiHttp = require('chai-http');
const chai = require('chai');
const app = require('../../../server.js');
chai.should();

chai.use(chaiHttp);

//write test for get todos
describe('GET /todos', () => {
    it('should get all todos', (done) => {
        chai.request(app)
            .get('/todos')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('array');
                res.body.length.should.be.eql(4);
                done();
            })
    })
})

//write test for post todos
describe('POST /todos', () => {
    it('should create new todo', (done) => {
        let todo = {
            name: 'test todo'
        };
        chai.request(app)
            .post('/todos')
            .send(todo)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.have.property('name');
                res.body.should.have.property('createdAt');
                res.body.should.have.property('_id');
                res.body.name.should.be.eql('test todo');
                done();
            })
    })
  })