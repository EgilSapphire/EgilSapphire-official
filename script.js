// モバイルメニュー
const btn = document.querySelector('.menu-btn');
const nav = document.querySelector('.nav');
btn.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  btn.setAttribute('aria-expanded', open);
});
nav.addEventListener('click', e => {
  if (e.target.tagName === 'A') { nav.classList.remove('open'); btn.setAttribute('aria-expanded', false); }
});

// キャスト/ワールドが1件でもあれば「準備中」を隠す
document.querySelectorAll('#cast-list, #world-list').forEach(list => {
  const empty = list.parentElement.querySelector('.empty');
  if (empty && list.children.length > 0) empty.hidden = true;
});

// ポスター画像(assets/poster.webp)が未配置のときは、セクションごと非表示にする
const poster = document.querySelector('#poster img');
if (poster) {
  const hidePoster = () => {
    document.getElementById('poster').hidden = true;
    document.getElementById('nav-poster').hidden = true;
  };
  poster.addEventListener('error', hidePoster);
  if (poster.complete && poster.naturalWidth === 0) hidePoster();
}
