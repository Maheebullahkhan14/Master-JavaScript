const inputEl = document.querySelector('input')
const btn = document.querySelector('.add')
const removebtn = document.querySelector('.remove')
const container = document.querySelector('.container')

let data = JSON.parse(localStorage.getItem('mydata')) || []


btn.addEventListener('click', function (){
    let value = inputEl.value
    if(value === ''){
        alert('data is empty')
        return
    }
    else{
        data.push(value)
        const item = document.createElement('div')
        const itag = document.createElement('i')
        itag.setAttribute('class', 'fa-solid fa-xmark')
        item.classList.add('item')
        item.innerText = value
        item.appendChild(itag)
        container.appendChild(item)
        
        localStorage.setItem('mydata',JSON.stringify([...data]))

    }
    inputEl.value = ''
})

removebtn.addEventListener('click', function () {
    let localdata = [...data]
    let value = inputEl.value
    if(value === ''){
        alert('plz enter data to remove')
        return
    }
    else{
   
    for(let i = 0 ; i < localdata.length ; i++){
        
            if(value === localdata[i]){
                data.splice(i,1)
            }
        
    }
    console.log(localdata)

    // alert('no data')
}
    localStorage.setItem('mydata',JSON.stringify([...data]) )

})

function updateui(data){
    data.forEach(element => {
        const item = document.createElement('div')
        item.classList.add('item')
        item.innerText = element
        container.appendChild(item)
    });
}

window.addEventListener('load', updateui(data))

