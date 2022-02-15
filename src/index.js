async function init() {
  miro.board.ui.on('icon:click', async () => {
    await miro.board.ui.openPanel({url: 'app.html', height: 600});
  });
}

init();


/***
async function init() {
    await miro.board.ui.openModal({
      url: 'src/modal.html', 
      height: 400,
      width: 600,
      fullscreen: false,
    })
}

init();
***/