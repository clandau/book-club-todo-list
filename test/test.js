
describe('test', () => {
  it('passes', () => {
    chai.expect(1).to.eql(1);
  });
});

describe("todo items", () => {
  it("allows us to create a new todo", () => {
    const todo = new ToDo("Buy a coffee.");
    chai.expect(todo).to.not.eql(undefined);
  })
})

mocha.run();