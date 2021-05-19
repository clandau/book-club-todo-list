
describe('test', () => {
  it('passes', () => {
    chai.expect(1).to.eql(1);
  });
});

describe("todo items", () => {
  const todo = new ToDo("Buy a coffee.", 1);
  it("allows us to create a new todo", () => {
    chai.expect(todo).to.not.eql(undefined);
  })
  it("todo items contains Buy a coffee.", () => {
    chai.expect(todo.text).deep.eql("Buy a coffee.");
  })
  it("todo items is complete = false", () => {
    chai.expect(todo.complete).eql(false);
  })
  it("todo items can be complete", () => {
    todo.ItemComplete = true;
    chai.expect(todo.complete).eql(true);
  })
})


