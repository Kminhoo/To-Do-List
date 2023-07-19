const inputEl = document.querySelector('.todo-top input')
const plusbtn = document.querySelector('.todo-top .btn')
const listEl = document.querySelector('.list')
const delbtn = document.querySelector('.del')

//list에 할일을 추가하는 함수
function todo() {
  const liEl = document.createElement('li')
  liEl.innerHTML = /* html */ `
    <input type="checkbox" />
    ${inputEl.value}
    <button value="삭제"></button>
  `

  liEl.querySelector('input').addEventListener('click', () => {
    liEl.classList.toggle('line')
  })

  liEl.querySelector('button').addEventListener('click', () => {
    liEl.remove()
  })

  listEl.appendChild(liEl)
}

// 추가히기 버튼
plusbtn.addEventListener('click', ()=> {
  if (!inputEl.value) {
    alert('TO DO List 내용을 채워주세요!')
  } else {
    todo()
    inputEl.value = ""
    inputEl.focus()
  }
})


// enter 키로 추가
inputEl.addEventListener('keydown', (e) => {
  if(e.key === 'Enter') {
    todo()
    inputEl.value = ""
    inputEl.focus()
  }
})


//전체삭제
delbtn.addEventListener('click', () => {
  if (listEl.childElementCount === 0) {
    alert('TO DO List가 비어있습니다.')
  } else {
    if (confirm('정말 삭제하시겠습니까?')) {
      listEl.innerHTML = ''
    } else {
      return
    }
  }
})
