let test = () => {
  const targetNode = document.querySelector(".task-display");
  const header = document.querySelector(".heading-status");

  // Options for the observer (which mutations to observe)
  const config = { childList: true };

  // Callback function to execute when mutations are observed
  const callback = function (mutationList, observer) {
    // Use traditional 'for loops' for IE 11
    for (const mutation of mutationList) {
      if (mutation.type === "childList") {
        let count = targetNode.children.length;

        if (count == 1) {
          header.innerText = "nothing :)";
        } else if (count > 1 && count <= 5) {
          header.innerText = "a bit :|";
        } else if (count > 5 && count <= 10) {
          header.innerText = "lots :(";
        } else if (count > 10) {
          header.innerText = "too much o.o";
        }
        // if (targetNode.children.length > 1) {
        //   header.innerText = "a little bit ";
        // } else if (targetNode.children.length > 5) {
        //   header.innerText = "a lot  ";
        // } else if (targetNode.children.length > 10) {
        //   header.innerText = "oh boy";
        // }
        console.log("A child node has been added or removed.");
      }
    }
  };

  // Create an observer instance linked to the callback function
  const observer = new MutationObserver(callback);

  // Start observing the target node for configured mutations
  observer.observe(targetNode, config);
};

export { test };
