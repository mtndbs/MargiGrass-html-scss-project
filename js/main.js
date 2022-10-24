// making the main logo abutton

let logoBtn = document.querySelector('#main_logo')
logoBtn.addEventListener('click',()=>{
    let popDiv = document.querySelector('#pop_div')
    popDiv.innerHTML = `<p class="m-3">Mardi Gras  refers to events of the Carnival celebration, beginning on or after the Christian feasts of the Epiphany (Three Kings Day) and culminating on the day before Ash Wednesday, which is known as Shrove Tuesday. Mardi Gras is French for "Fat Tuesday", reflecting the practice of the last night of eating rich, fatty foods before the ritual Lenten sacrifices and fasting of the Lenten season.</p>

    <p class="m-3">Related popular practices are associated with Shrovetide celebrations before the fasting and religious obligations associated with the penitential season of Lent. In countries such as the United Kingdom, Mardi Gras is more usually known as Pancake Day or (traditionally) Shrove Tuesday (derived from the word shrive, meaning "to administer the sacrament of confession to; to absolve") Hey!</p>
    <button class=" btn my-btn special-btn m-2"><a aria-current='page' href='about.html'>For more!</a></button>`
    popDiv.classList.add('pop-div')
    console.log('hello')
})
