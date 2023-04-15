import React from "react";
export const Todoitem = ({ todos, onDelete }) => {
  let width = {
    width: "16rem",
    border : "3px solid rebeccapurple"
  };
  let contain = {
    display: "flex",
    justifyContent: "space-between",
  };
  return (
    <>
      <div className="container1" style={contain}>
        {todos.length === 0 ? (
          <h2 className="text-center">All Tasks Completed</h2>
        ) : (
          todos.map((todos) => (
            <>
              <div class="card" style={width}>
                <img src="https://imgs.search.brave.com/DsHmN2ha7ngiQ2RBQAUEfQkGICVNGmzi4X0agV57Dd4/rs:fit:474:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5Z/UUhCU1gtM1hXMkxM/YmQ5Ylc1RE9RSGFI/YSZwaWQ9QXBp" class="card-img-top" alt="..." />
                <div class="card-body">
                  <h2 class="card-title">{todos.title}</h2>
                  <p class="card-text">{todos.desc}</p>
                </div>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">An item</li>
                  <li class="list-group-item">A second item</li>
                  <li class="list-group-item">A third item</li>
                </ul>
                <div class="card-body">
                  <a href="#" class="card-link">
                    Card link
                  </a>
                  <a href="#" class="card-link">
                    Another link
                  </a>
                  <button
                    type="button"
                    class="btn btn-outline-success"
                    onClick={() => {
                      onDelete(todos);
                    }}
                  >
                    Completed
                  </button>
                </div>
              </div>
            </>
          ))
        )}
      </div>
    </>
  );
};
