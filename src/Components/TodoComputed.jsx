const TodoComputed = ({computedItemsLeft, ClearCompleted }) => {
  return (
    <section className="py-4 px-4 flex rounded-b-md justify-between bg-white transition-duration: 1000ms dark:bg-gray-800">
    <span className="text-gray-400">{computedItemsLeft} items left</span>
    <button className="text-gray-400" onClick={ClearCompleted}>Clear completed</button>
  </section>
  );
};
export default TodoComputed;
