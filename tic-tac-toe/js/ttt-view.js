class View {
  constructor(game, $el) {
    this.game = game;
    this.$el = $el;
    this.setupBoard();
    this.bindEvents();
    // this.game.swapTurn();
  }

  bindEvents() {
    this.$el.on("click", "li", ( event => {
      const $square = $(event.currentTarget);
      this.makeMove($square);
    }));
  }

  makeMove($square) {
    const player = this.game.currentPlayer;
    this.game.playMove($square.data("pos"));
    $square.addClass(player);
    if (this.game.isOver()) {
      alert(`${this.game.winner()} wins!`);
    }
  }

  setupBoard() {

    this.$el.append("<ul class='grid'></ul>");
    for (var rowIdx = 0; rowIdx < 3; rowIdx++) {
      for (var colIdx = 0; colIdx < 3; colIdx++) {
        let $box = $("<li></li>");
        $box.data ("pos", [rowIdx, colIdx]);
        $(".grid").append($box);
      }
    }

    // $(".grid").append("<li class='box' pos=[0, 0]></li>");
    // $(".grid").append("<li class='box' pos =[0, 1]></li>");
    // $(".grid").append("<li class='box' pos =[0, 2]></li>");
    // $(".grid").append("<li class='box' pos =[1, 0]></li>");
    // $(".grid").append("<li class='box' pos =[1, 1]></li>");
    // $(".grid").append("<li class='box' pos =[1, 2]></li>");
    // $(".grid").append("<li class='box' pos =[2, 0] ></li>");
    // $(".grid").append("<li class='box' pos =[2, 1]></li>");
    // $(".grid").append("<li class='box' pos =[2, 2]></li>");
  }
}

module.exports = View;
